//! Configuration persistence in `disktree.ini` beside the executable.

use std::fs;
use std::io;
use std::path::PathBuf;

use crate::i18n::Language;
use crate::state::ViewLayout;

#[derive(Clone, Copy, Debug, Default, PartialEq, Eq)]
pub enum ThemeMode {
    #[default]
    Dark,
    Light,
}

impl ThemeMode {
    pub const fn code(self) -> &'static str {
        match self {
            Self::Dark => "dark",
            Self::Light => "light",
        }
    }

    #[allow(dead_code)]
    pub fn parse(s: &str) -> Self {
        match s.trim().to_lowercase().as_str() {
            "light" | "acik" | "açık" => Self::Light,
            _ => Self::Dark,
        }
    }
}

#[derive(Clone, Debug, Default)]
pub struct AppConfig {
    pub language: Language,
    pub default_view: ViewLayout,
    pub theme_mode: ThemeMode,
}

impl AppConfig {
    /// Locate `diskhay.ini` next to the running executable, or in the current directory.
    pub fn file_path() -> PathBuf {
        if let Ok(exe) = std::env::current_exe() {
            if let Some(dir) = exe.parent() {
                return dir.join("diskhay.ini");
            }
        }
        PathBuf::from("diskhay.ini")
    }

    /// Load configuration from `diskhay.ini`. If the file doesn't exist, create it with defaults.
    pub fn load() -> Self {
        #[cfg(test)]
        {
            Self {
                language: Language::En,
                default_view: ViewLayout::Mosaic,
                theme_mode: ThemeMode::Dark,
            }
        }

        #[cfg(not(test))]
        {
            let path = Self::file_path();
            if let Ok(content) = fs::read_to_string(&path) {
                let mut config = Self::default();
                for line in content.lines() {
                    let trimmed = line.trim();
                    if trimmed.is_empty() || trimmed.starts_with(';') || trimmed.starts_with('#') {
                        continue;
                    }
                    if let Some((key, val)) = trimmed.split_once('=') {
                        let k = key.trim().to_lowercase();
                        let v = val.trim();
                        if k == "language" || k == "lang" {
                            config.language = Language::parse(v);
                        } else if k == "defaultview" || k == "default_view" || k == "view" {
                            match v.to_lowercase().as_str() {
                                "mosaic" | "treemap" | "mozaik" => {
                                    config.default_view = ViewLayout::Mosaic;
                                }
                                _ => {
                                    config.default_view = ViewLayout::Details;
                                }
                            }
                        } else if k == "theme" || k == "thememode" || k == "theme_mode" {
                            config.theme_mode = ThemeMode::parse(v);
                        }
                    }
                }
                config
            } else {
                let config = Self::default();
                let _ = config.save();
                config
            }
        }
    }

    /// Save configuration to `disktree.ini`.
    pub fn save(&self) -> io::Result<()> {
        let path = Self::file_path();
        let view_str = match self.default_view {
            ViewLayout::Mosaic => "mosaic",
            ViewLayout::Details => "details",
        };
        let content = format!(
            "[General]\r\nLanguage={}\r\nDefaultView={}\r\nTheme={}\r\n",
            self.language.code(),
            view_str,
            self.theme_mode.code()
        );
        fs::write(path, content)
    }
}
