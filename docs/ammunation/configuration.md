# Configuration

## Files you can edit

| File | Contains |
|---|---|
| `shared/config.lua` | General settings, experience levels and stock run collection points |
| `shared/stock_types.lua` | Crafting materials, their capacity and supplier contracts |
| `shared/categories/*.lua` | What can be crafted and sold, one file per category |

Everything else is protected. Edits to protected files are lost on update.

## General

| Option | Description |
|---|---|
| `Config.Debug` | Draws the target zones and prints what the script is doing. Leave `false` on a live server |
| `Config.CheckForUpdates` | Prints one line at startup with the latest version |
| `Config.BusinessSellPrice` | Percent of the purchase price returned when a business is sold |
| `Config.Experience` | Experience needed for each level |
| `Config.CollectionSpots` | Places a stock run's collection point can spawn |

## Materials and contracts

`shared/stock_types.lua` defines each material (steel, gunpowder, plastic, electronics), the most the business can
hold and the supplier contracts that sell it, each with a price range and a quantity per box.

## Categories

Each file in `shared/categories` is one category: pistols, rifles, shotguns, SMGs, snipers, melee, throwables,
tools, attachments and ammunition. Copy a file and edit it to add your own. A new file appears in game with no
other change.

```lua
{
    item = "weapon_pistol",
    category = "Pistols",
    sellable = true,
    name = "Pistol",
    craftTime = 8000,
    experience = { min = 5, max = 10 },
    requirements = { steel = 22, gunpowder = 14, plastic = 18, electronics = 8 },
    level = 1,
},
```

| Field | Description |
|---|---|
| `item` | Inventory item name |
| `sellable` | Whether the item can be sold in the shop |
| `craftTime` | Milliseconds to craft |
| `experience` | Experience earned, a random value between min and max |
| `requirements` | Materials used, by stock type |
| `level` | Level the business needs before it can craft the item |
