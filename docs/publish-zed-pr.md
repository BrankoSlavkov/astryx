# Open a PR to list Astryx on Zed

1. **Push this repo first:** `git push origin main` so GitHub has the same commit as the submodule pointer in the extensions index (CI clones `BrankoSlavkov/astryx` by SHA).

Your theme repo must stay public (`extension.toml` + `themes/astryx.json` at the root).

## Prepared extensions index (local)

A clone of `zed-industries/extensions` may already exist on your machine with:

- Submodule `extensions/astryx` → `https://github.com/BrankoSlavkov/astryx.git`
- `[astryx]` entry in `extensions.toml` with `version = "0.1.0"` (keep in sync with `extension.toml` when you bump versions)
- Branch: **`add-astryx-theme`**, commit: **Add astryx theme extension**

Typical path (adjust if yours differs): `../zed-extensions-fork` next to this repo.

## Push and open the PR

1. **Fork** [zed-industries/extensions](https://github.com/zed-industries/extensions) on GitHub (if you have not already).

2. In the prepared clone:

   ```bash
   cd /path/to/zed-extensions-fork
   git remote rename origin upstream
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/extensions.git
   git push -u origin add-astryx-theme
   ```

   Replace `YOUR_GITHUB_USERNAME` with your account (fork URL).

3. On GitHub, open **Compare & pull request** from `add-astryx-theme` into `zed-industries/extensions` **main**.

4. Wait for review; maintainers may ask for tweaks (version, license, naming).

If you start from a **fresh fork clone** instead of the prepared folder, repeat the submodule + `extensions.toml` steps from the main [README](../README.md) or copy the two changes from this prepared branch.
