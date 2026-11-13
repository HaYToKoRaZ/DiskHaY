#!/bin/sh
# Install a diskhay release: the binary, a desktop entry and an icon.
#
#   ./install.sh                  # into ~/.local, no root needed
#   sudo PREFIX=/usr/local ./install.sh
#
# The same three files `make install` puts in place, for a machine without a
# Rust toolchain.
set -eu

here=$(cd "$(dirname "$0")" && pwd)
PREFIX=${PREFIX:-"$HOME/.local"}
BINDIR=${BINDIR:-"$PREFIX/bin"}
APPDIR=${APPDIR:-"$PREFIX/share/applications"}
ICONDIR=${ICONDIR:-"$PREFIX/share/icons/hicolor/scalable/apps"}
VERSION=$(cat "$here/VERSION")

install -d "$BINDIR" "$APPDIR" "$ICONDIR"
install -m755 "$here/diskhay" "$BINDIR/diskhay"
install -m644 "$here/diskhay.svg" "$ICONDIR/diskhay.svg"
sed -e "s|@BINDIR@|$BINDIR|" -e "s|@VERSION@|$VERSION|" \
    "$here/diskhay.desktop.in" > "$APPDIR/diskhay.desktop"
chmod 644 "$APPDIR/diskhay.desktop"
if command -v update-desktop-database >/dev/null 2>&1; then
    update-desktop-database "$APPDIR" 2>/dev/null || true
fi

echo "installed DiskHaY $VERSION:"
echo "  $BINDIR/diskhay"
echo "  $APPDIR/diskhay.desktop"
echo "  $ICONDIR/diskhay.svg"
resolved=$(command -v diskhay 2>/dev/null || true)
if [ -z "$resolved" ] || ! [ "$resolved" -ef "$BINDIR/diskhay" ]; then
    echo
    if [ -n "$resolved" ]; then
        echo "warning: diskhay still resolves to $resolved"
        echo "         that hides the build in $BINDIR"
    else
        echo "warning: $BINDIR is not on PATH"
    fi
    printf '%s\n' "Run in your shell: export PATH=\"$BINDIR:\$PATH\""
    echo "Then add that PATH setting to your shell configuration."
fi
