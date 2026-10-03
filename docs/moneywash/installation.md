# Installation

## Requirements

| Resource | Why |
|---|---|
| `community_bridge` | Framework, inventory, target and notify detection |
| `ox_lib` | UI helpers |
| `oxmysql` | Database. The 5 tables are created on first start |

## Steps

1. Drop the `filthy_moneywash` folder into your resources.
2. Add `ensure filthy_moneywash` to your server cfg, after the requirements above.
3. Add the wash token to your inventory and copy its icon into the images folder.
4. Add the permission below to your permissions cfg.
5. Restart the server.

There is no SQL file to import.

## Items

The wash token is the only custom item. `Config.TokenItem` in `config.lua` must match the name you register.

| Item | Used for | Icon |
|---|---|---|
| `moneywash_token` | Running a wash machine | [Download](/items/moneywash_token.png) |

::: code-group

```lua [ox_inventory]
-- data/items.lua
['moneywash_token'] = {
    label = 'Wash Token',
    weight = 1,
    stack = true,
    close = true,
    description = 'Token used to wash dirty money',
},
```

```lua [qb / ps / qs inventory]
-- items.lua
moneywash_token = { name = 'moneywash_token', label = 'Wash Token', weight = 1000, type = 'item', image = 'moneywash_token.png', unique = false, useable = false, shouldClose = true, description = 'Token used to wash dirty money' },
```

:::

## Permission

The setup menu is locked behind an ace. Add this to your permissions cfg:

```ini
add_ace group.admin washcreator.admin allow
```

## First setup

Use `/washcreator` in game to place each laundrette and its machines.
