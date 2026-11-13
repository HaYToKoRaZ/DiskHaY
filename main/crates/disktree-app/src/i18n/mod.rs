//! Interface text (i18n).
//!
//! Each language lives in its own file (`tr.rs`, `en.rs`, ...) as one
//! [`Strings`] value, so translators never touch Rust logic. The compiler
//! rejects a language that misses a text.

mod tr;
mod en;
mod es;
mod de;
mod fr;
mod ru;
mod pt;
mod zh;
mod ar;
mod hi;

use disktree_core::classify::Category;

/// The interface language.
#[derive(Clone, Copy, Debug, Default, PartialEq, Eq)]
pub enum Language {
    #[default]
    En,
    Tr,
    Es,
    De,
    Fr,
    Ru,
    Pt,
    Zh,
    Ar,
    Hi,
}

macro_rules! define_strings {
    (
        plain: [$($plain:ident),* $(,)?],
        extra: [$($extra:ident),* $(,)?] $(,)?
    ) => {
        /// Every interface text of one language.
        #[derive(Debug)]
        pub struct Strings {
            $(pub $plain: &'static str,)*
            $(pub $extra: &'static str,)*
        }

        impl Language {
            $(
                pub fn $plain(self) -> &'static str {
                    self.strings().$plain
                }
            )*
        }
    };
}

define_strings! {
    plain: [
        theme_header,
        theme_dark,
        theme_light,
        options_title,
        options_button,
        options_tooltip,
        language_header,
        ini_note,
        check_updates_btn,
        download_update_btn,
        close,
        choose_source_title,
        choose_source_sub,
        choose_source_btn,
        mode_size,
        mode_files,
        mode_age,
        hidden_files,
        apparent_size,
        view_details,
        view_mosaic,
        depth,
        cancel,
        delete,
        view_header,
        col_name,
        col_size,
        col_share,
        col_items,
        no_data,
        folder_empty,
        up_one_level,
        scan_failed,
        indexing_stopped,
        waiting_first_entries,
        scan_again,
        stop_scan,
        stop_indexing,
        choose_what_to_scan,
        choose_what_to_scan_sub,
        this_computer,
        connect_ssh,
        scan_directory,
        scan_selected_root,
        mounted_volume,
        listing_mounts,
        selection,
        selection_hint,
        worth_a_look,
        nothing_disposable,
        waiting_for_scan,
        kind,
        files,
        last_write,
        marked,
        marked_for_removal,
        mark_for_removal,
        unmark,
        open_item,
        reclaimable,
        disk,
        source,
        review,
        back,
        key_mark,
        key_open,
        key_up,
        key_review,
        key_move,
        key_filter,
        key_depth,
        key_mode,
        key_reset,
        key_volumes,
        key_rescan,
        key_all_keys,
        key_indexing_incomplete,
        category_code,
        category_agent_scratch,
        category_toolchain,
        category_synced,
        category_git,
        category_media,
        category_documents,
        category_cache,
        category_other,
        restart_as_admin,
        admin_warning_file_table,
        restarting_drops_marks,
        logo_tooltip,
        scan_from_here_tooltip,
        depth_tooltip,
        of_scan,
        partly_unreadable,
        checking_updates,
        update_server_error,
        update_check_failed,
    ],
    extra: [
        scan_entries_tpl,
        scan_cancelled_tpl,
        admin_unreadable_tpl,
        admin_faster_suffix,
        power_tooltip_tpl,
        power_miser,
        power_balanced,
        power_aggressive,
        power_drain,
        power_custom,
        goes_with_tpl,
        unmark_item_tpl,
        new_version_available_tpl,
        up_to_date_tpl,
    ],
}

impl Language {
    pub const ALL: [Self; 10] = [
        Self::Tr,
        Self::En,
        Self::Es,
        Self::De,
        Self::Fr,
        Self::Ru,
        Self::Pt,
        Self::Zh,
        Self::Ar,
        Self::Hi,
    ];

    pub const fn code(self) -> &'static str {
        match self {
            Self::Tr => "tr",
            Self::En => "en",
            Self::Es => "es",
            Self::De => "de",
            Self::Fr => "fr",
            Self::Ru => "ru",
            Self::Pt => "pt",
            Self::Zh => "zh",
            Self::Ar => "ar",
            Self::Hi => "hi",
        }
    }

    pub const fn native_name(self) -> &'static str {
        match self {
            Self::Tr => "Türkçe",
            Self::En => "English",
            Self::Es => "Español",
            Self::De => "Deutsch",
            Self::Fr => "Français",
            Self::Ru => "Русский",
            Self::Pt => "Português",
            Self::Zh => "中文",
            Self::Ar => "العربية",
            Self::Hi => "हिन्दी",
        }
    }

    #[allow(dead_code)]
    pub fn parse(s: &str) -> Self {
        match s.trim().to_lowercase().as_str() {
            "tr" | "turkish" | "türkçe" => Self::Tr,
            "es" | "spanish" | "español" => Self::Es,
            "de" | "german" | "deutsch" => Self::De,
            "fr" | "french" | "français" => Self::Fr,
            "ru" | "russian" | "русский" => Self::Ru,
            "pt" | "portuguese" | "português" => Self::Pt,
            "zh" | "chinese" | "中文" => Self::Zh,
            "ar" | "arabic" | "العربية" => Self::Ar,
            "hi" | "hindi" | "हिन्दी" => Self::Hi,
            _ => Self::En,
        }
    }

    const fn strings(self) -> &'static Strings {
        match self {
            Self::Tr => &tr::STRINGS,
            Self::En => &en::STRINGS,
            Self::Es => &es::STRINGS,
            Self::De => &de::STRINGS,
            Self::Fr => &fr::STRINGS,
            Self::Ru => &ru::STRINGS,
            Self::Pt => &pt::STRINGS,
            Self::Zh => &zh::STRINGS,
            Self::Ar => &ar::STRINGS,
            Self::Hi => &hi::STRINGS,
        }
    }

    pub fn category_label(self, category: Category) -> &'static str {
        match category {
            Category::Code => self.category_code(),
            Category::AgentScratch => self.category_agent_scratch(),
            Category::Toolchain => self.category_toolchain(),
            Category::Synced => self.category_synced(),
            Category::Git => self.category_git(),
            Category::Media => self.category_media(),
            Category::Documents => self.category_documents(),
            Category::Cache => self.category_cache(),
            Category::Other => self.category_other(),
        }
    }

    pub fn key_scan_entries(self, count: &str) -> String {
        self.strings().scan_entries_tpl.replace("{count}", count)
    }

    pub fn key_scan_cancelled(self, count: &str) -> String {
        self.strings().scan_cancelled_tpl.replace("{count}", count)
    }

    pub fn admin_warning_unreadable(self, count: &str, faster: bool) -> String {
        let strings = self.strings();
        let suffix = if faster { strings.admin_faster_suffix } else { "" };
        strings
            .admin_unreadable_tpl
            .replace("{count}", count)
            .replace("{faster}", suffix)
    }

    pub fn power_efficiency_name(self, name: &str) -> &'static str {
        let strings = self.strings();
        match name {
            "Miser" => strings.power_miser,
            "Balanced" => strings.power_balanced,
            "Aggressive" => strings.power_aggressive,
            "Drain My Battery" => strings.power_drain,
            _ => strings.power_custom,
        }
    }

    pub fn power_efficiency_tooltip(self, name: &str, workers: usize, cpus: usize) -> String {
        self.strings()
            .power_tooltip_tpl
            .replace("{name}", self.power_efficiency_name(name))
            .replace("{workers}", &workers.to_string())
            .replace("{cpus}", &cpus.to_string())
    }

    pub fn goes_with(self, ancestor: &str) -> String {
        self.strings().goes_with_tpl.replace("{ancestor}", ancestor)
    }

    pub fn unmark_item(self, name: &str) -> String {
        self.strings().unmark_item_tpl.replace("{name}", name)
    }

    pub fn new_version_available(self, remote: &str, current: &str) -> String {
        self.strings()
            .new_version_available_tpl
            .replace("{remote}", remote)
            .replace("{current}", current)
    }

    pub fn up_to_date(self, version: &str) -> String {
        self.strings().up_to_date_tpl.replace("{version}", version)
    }
}
