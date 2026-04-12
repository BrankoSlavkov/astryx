# Astryx (Zed)

This directory is a **Zed extension** root: it contains [`extension.toml`](extension.toml) and [`themes/astryx.json`](themes/astryx.json) per the [Zed theme extension docs](https://zed.dev/docs/extensions/themes).

## Try it locally

1. Open Zed → **Extensions** → **Install Dev Extension**.
2. Select this folder (`…/astryx/zed`), not the repository root.

## Iterate on colors

- Edit [`themes/astryx.json`](themes/astryx.json); the file references the JSON schema for validation in editors that support `$schema`.
- Use the [Zed Theme Builder](https://zed.dev/theme-builder) to tune surfaces and export JSON, then merge into `themes/astryx.json`.
- Keep **VS Code** colors in [`../themes/Astryx-color-theme.json`](../themes/Astryx-color-theme.json) as the source of truth; this Zed file is kept in sync with that palette (scrollbars, line numbers, selection, syntax, git-style accents, etc.).

## Publish later

Publishing requires a PR to [zed-industries/extensions](https://github.com/zed-industries/extensions) with a submodule and a compatible license **at the extension root** (this folder includes [`LICENSE`](LICENSE) for that reason). See [Developing Extensions](https://zed.dev/docs/extensions/developing-extensions).
