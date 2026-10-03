# Installation

## Requirements

| Resource | Why |
|---|---|
| `community_bridge` | Framework, inventory, target and notify detection |
| `ox_lib` | UI helpers |
| `oxmysql` | Database. The 8 tables are created on first start |

## Steps

1. Drop the `filthy_pawnshop` folder into your resources.
2. Add `ensure filthy_pawnshop` to your server cfg, after the requirements above.
3. Add the permission below to your permissions cfg.
4. Restart the server.

There is no SQL file to import.

## Items

There is nothing to add. The default categories only use standard ox_inventory items: phone, radio, lockpick,
parachute, armour, mastercard and scrapmetal.

To buy more items, copy a file from `shared/categories`, rename it and list your own items. The `category` field is
the name owners tick for each pawnshop in `/pawncreator`.

```lua
Config.PawnItems = Config.PawnItems or {}

for _, item in ipairs({
    { item = "phone", category = "Electronics", price = 350, maxSellQuantity = 5 },
}) do
    table.insert(Config.PawnItems, item)
end
```

## Permission

The setup menu is locked behind an ace. Add this to your permissions cfg:

```ini
add_ace group.admin pawncreator.admin allow
```

## First setup

Use `/pawncreator` in game to place each pawnshop, its boss menu, counter and export points.
