# Introduction

Welcome to the Filthy Lytiez documentation. Every script here is built to run on any server, so there is
nothing framework specific to set up.

## What you need

Every script needs the same three resources running before it starts.

| Resource | Why |
|---|---|
| [community_bridge](/guide/community-bridge) | Detects your framework, inventory, target, notify and fuel system |
| `ox_lib` | UI helpers |
| `oxmysql` | Database. Each script creates its own tables on first start |

## Installing a script

1. Drop the folder into your resources.
2. Add `ensure <script name>` to your server cfg, after the three resources above.
3. Add the script's permission to your permissions cfg.
4. Add any inventory items the script lists on its installation page.
5. Restart the server.

There is no SQL file to import for any script.

## Editing after purchase

Each script leaves its config files open so you can edit them. The rest of the resource is protected, and
edits to protected files are lost on update. The files you can edit are listed on each script's
configuration page.

## Updates

Every script prints one line at startup telling you whether you are on the latest release. Set
`Config.CheckForUpdates = false` to silence it. Nothing is uploaded and nothing is downloaded either way.

## Need help?

Start with [Common issues](/troubleshooting/common-issues), then the [FAQ](/troubleshooting/faq). If you are
still stuck, see [Support](/troubleshooting/support).
