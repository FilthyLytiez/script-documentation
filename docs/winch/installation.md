# Installation

## Requirements

| Resource | Why |
|---|---|
| `community_bridge` | Framework, notify and target detection |
| `ox_lib` | UI helpers |
| `oxmysql` | Database |

## Steps

1. Drop the `filthy_winch` folder into your resources.
2. Add `ensure filthy_winch` to your server cfg, after the requirements above.
3. Restart the server.

There is no SQL file to import and no inventory item to add.

## Adding a custom tow truck

Trucks that ship with the script are detected automatically. To add your own, use the setup command in game:

```
/winchsetup
```

The command name is set by `Config.AdminCommand` in `shared/config.lua`.
