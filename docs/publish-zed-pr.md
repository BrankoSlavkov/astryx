# Open a PR to list Astryx on Zed

Follow Zed's [Publishing Prerequisites](https://zed.dev/docs/extensions/publishing/prerequisites) and [Publishing Guide](https://zed.dev/docs/extensions/publishing/publishing-guide).

## Before the PR

1. **Push this repo:** `git push origin main`. The submodule pointer in the extensions index must be a commit that exists on a branch of `BrankoSlavkov/astryx`.
2. **Test in Zed at that commit:** install this folder as a dev extension (see the main [README](../README.md)), select **Astryx**, and check the editor, panels, terminal and git gutter.

The theme repo must stay public, with `extension.toml`, `themes/astryx.json` and `LICENSE` at the root.

## Extensions index branch

```bash
git clone --filter=blob:none https://github.com/zed-industries/extensions.git zed-extensions-fork
cd zed-extensions-fork
git remote rename origin upstream
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/extensions.git
git checkout -b add-astryx-theme

git submodule add https://github.com/BrankoSlavkov/astryx.git extensions/astryx-theme
```

Add to `extensions.toml` (version must match `extension.toml` at the submodule commit):

```toml
[astryx-theme]
submodule = "extensions/astryx-theme"
version = "0.1.0"
```

Then sort, commit and push:

```bash
pnpm install
pnpm sort-extensions
git add .gitmodules extensions.toml extensions/astryx-theme
git commit -m "Add astryx-theme"
git push -u origin add-astryx-theme
```

## Open the PR

1. On GitHub, open **Compare & pull request** from `YOUR_GITHUB_USERNAME:add-astryx-theme` into `zed-industries/extensions` **main**.
2. Write the description yourself. The repo's [AI policy](https://github.com/zed-industries/extensions/blob/main/AI_POLICY.md) rejects AI-written PR bodies and maintainer replies.
3. Respond to maintainer feedback within **3 weeks**, or the PR is closed as stale.

## Updating later

Bump `version` in `extension.toml`, push, then open a PR that moves the `extensions/astryx-theme` submodule to the new commit and bumps the matching `version` in `extensions.toml`.
