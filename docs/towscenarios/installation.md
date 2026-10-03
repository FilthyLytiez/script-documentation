# Installation

## Requirements

| Resource | Why |
|---|---|
| `community_bridge` | Framework, inventory, target and notify detection |
| `ox_lib` | UI helpers |
| `oxmysql` | Database. The 15 tables are created on first start |
| OneSync | The server creates the scene vehicles and peds |

## Steps

1. Drop the `filthy_towscenarios` folder into your resources.
2. Add `ensure filthy_towscenarios` to your server cfg, after the requirements above.
3. Add the two items below to your inventory and copy their icons into its images folder.
4. Add the permission below to your permissions cfg.
5. Restart the server.

There is no SQL file to import.

## Items

Battery and tyre call-outs use two items. Both are sold at the spares shop and removed from the driver's
inventory when the repair is done. Every other item the script hands out is a standard inventory item.

| Item | Used for | Icon |
|---|---|---|
| `replacement_battery` | Battery run call-outs | [Download](/items/replacement_battery.png) |
| `spare_tire` | Tyre change call-outs | [Download](/items/spare_tire.png) |

::: code-group

```lua [ox_inventory]
-- data/items.lua
['spare_tire'] = {
    label = 'Spare Tire',
    weight = 100,
    stack = true,
    close = true,
    description = 'A spare tyre for tow call-outs.',
},
['replacement_battery'] = {
    label = 'Replacement Battery',
    weight = 100,
    stack = true,
    close = true,
    description = 'A replacement battery for tow call-outs.',
},
```

```lua [qb / ps / qs inventory]
-- items.lua
spare_tire          = { name = 'spare_tire',          label = 'Spare Tire',          weight = 1000, type = 'item', image = 'spare_tire.png',          unique = false, useable = false, shouldClose = true, description = 'A spare tyre for tow call-outs.' },
replacement_battery = { name = 'replacement_battery', label = 'Replacement Battery', weight = 1000, type = 'item', image = 'replacement_battery.png', unique = false, useable = false, shouldClose = true, description = 'A replacement battery for tow call-outs.' },
```

:::

The names must match `Config.SparesShop.stock` in `shared/towing_config.lua`. If you rename them, rename the icon
files to match.

::: tip Weapons
`WEAPON_CROWBAR` and `WEAPON_FIREEXTINGUISHER` are standard weapons and already exist in every inventory. They
are not items and do not go in your items file.
:::

## Permission

The setup menu is locked behind an ace. Add this to your permissions cfg:

```ini
add_ace group.admin towcreator.admin allow
```

## First setup

Use `/towcreator` in game to place the tow yard, the spares shop and everything else.
