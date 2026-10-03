# Installation

## Requirements

| Resource | Why |
|---|---|
| `community_bridge` | Framework, inventory, target and notify detection |
| `ox_lib` | UI helpers |
| `oxmysql` | Database. The 9 tables are created on first start |

## Steps

1. Drop the `filthy_ammunation` folder into your resources.
2. Add `ensure filthy_ammunation` to your server cfg, after the requirements above.
3. Add the permission below to your permissions cfg.
4. Restart the server.

There is no SQL file to import.

## Items

There are no custom items. The categories use standard weapon, attachment and ammunition names. Crafting
materials (steel, gunpowder, plastic and electronics) are stock the business buys through contracts, not
inventory items.

## Permission

The setup menu is locked behind an ace. Add this to your permissions cfg:

```ini
add_ace group.admin ammucreator.admin allow
```

## First setup

Use `/ammucreator` in game to place the shop, its rep and its staff points.
