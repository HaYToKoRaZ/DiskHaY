//! The colour theme the user picked in the options dialog.

use gpui_kit::App;
use gpui_omarchy::Theme;

use crate::ini_config::ThemeMode;

/// Apply the palette for `mode`. Applying an explicit theme also stops
/// gpui-omarchy watching for theme files that are not there.
pub fn apply_theme_mode(mode: ThemeMode, cx: &mut App) {
    let theme = match mode {
        ThemeMode::Light => Theme::flexoki_light(),
        ThemeMode::Dark => Theme::tokyo_night(),
    };
    theme.apply(cx);
}
