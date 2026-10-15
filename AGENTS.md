# Astryx for Zed: agent notes

Theme name `Astryx` (dark). Extension id `astryx-theme`. Theme file `themes/astryx.json`.

## Configure Astryx for a user

Use exactly one install route. Combining routes registers two themes named `Astryx`.

1. **Registry (preferred once listed).** Check https://zed.dev/extensions?query=astryx first. The extension is listed only after `zed-industries/extensions` merges an `[astryx-theme]` entry. If it's listed, add `"auto_install_extensions": { "astryx-theme": true }` to the user's settings, or have them install it from the Extensions panel.
2. **Local theme file (works now, no UI).** Copy `themes/astryx.json` to `~/.config/zed/themes/astryx.json` on macOS or Linux, or to `%APPDATA%\Zed\themes\astryx.json` on Windows. Zed picks it up without a restart.
3. **Dev extension.** This route is UI only (`zed: install dev extension`, then pick this repo's root), so an agent can't do it. Hand it to the user.

Then select the theme in `~/.config/zed/settings.json`:

- The file is JSONC, so it can contain comments and trailing commas. Edit it as text. Never round-trip it through `jq` or `JSON.parse`, which drop comments or fail.
- If `"theme"` is a string, replace it with `"Astryx"`.
- If `"theme"` is an object (`mode` / `light` / `dark`), set `"dark": "Astryx"` and leave `mode` and `light` alone.
- If `"theme"` is missing, add `"theme": "Astryx"`.

Verify:

- `jq empty themes/astryx.json`. The theme file itself is strict JSON.
- Zed has no CLI validator. If the theme doesn't show up, ask the user to check **Zed → Open Log**.

Undo: restore the previous `"theme"` value, then delete `~/.config/zed/themes/astryx.json` or uninstall the extension.

## Maintaining

- `themes/astryx.json` is the source of truth for the palette. The Ghostty port (https://github.com/BrankoSlavkov/astryx-ghostty) copies its `terminal.*` colours and `players[0].cursor`, so mirror any change to those keys there.
- Shipping a change to the registry means bumping `version` in `extension.toml`, pushing, then opening a PR in `zed-industries/extensions` that moves the submodule and the matching `version`. See `docs/publish-zed-pr.md`. That repo rejects AI-written PR descriptions, so the user writes the PR text.
