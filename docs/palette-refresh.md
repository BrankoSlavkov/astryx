# Palette refresh: every change

Applied to `themes/astryx.json`. Only the git status colours changed. Code editor colours, comments, chrome and every other key stay as they were.

| Key | Before | After | Why |
| --- | --- | --- | --- |
| `modified` | `#00ffb3ff` | `#7fa8ffff` | Modified files were the same neon green family as added files, so the two were hard to tell apart. Blue is the usual "changed" colour. |
| `modified.border` | `#00ffb3ff` | `#7fa8ffff` | Follows `modified`. |
| `created` | `#29d398ff` | `#3ddc97ff` | Slightly brighter green, clearly separate from the blue modified colour. |
| `created.border` | `#29d39888` | `#3ddc9788` | Follows `created`. |

These colours show up in the project panel (file names and the `M` / `A` badges) and on tabs.

Not changed: `renamed` stays `#00ffb3ff`, and every `terminal.*` key and `players[0].cursor` are untouched, so the Ghostty port needs no update.
