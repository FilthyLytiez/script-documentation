# Configuration

## Files you can edit

| File | Contains |
|---|---|
| `shared/config.lua` | General settings and the wreck search cooldown |
| `shared/recipes.lua` | What each material needs, how long it takes and what it pays |
| `shared/wreckedcars.lua` | The wreck models that can be searched |
| `install/items.lua` | Item definitions for reference |

Everything else is protected. Edits to protected files are lost on update.

## General

| Option | Description |
|---|---|
| `Config.Debug` | Draws the target zones and prints what the script is doing. Leave `false` on a live server |
| `Config.CheckForUpdates` | Prints one line at startup with the latest version |
| `Config.Search.cooldown` | Milliseconds before the same player can search the same wreck again |

## Recipes

Each recipe turns scrap parts into a material.

```lua
steel = {
    inputs = {
        { item = "scrapfbumper", amount = 3 },
        { item = "scraprbumper", amount = 3 },
    },
    output  = { item = "steel", amount = { min = 24, max = 36 } },
    time    = 15000,
    payment = { min = 1800, max = 2000 },
},
```

| Field | Description |
|---|---|
| `inputs` | Items consumed and how many of each |
| `output` | Item produced and a random amount between `min` and `max` |
| `time` | Milliseconds the recycling takes |
| `payment` | Random payout between `min` and `max` |

::: warning
If you rename an item in your inventory, rename it in `shared/recipes.lua` too, or the recipe will never complete.
:::

## Wrecks

`shared/wreckedcars.lua` lists the prop models that can be searched. Add a model to make that wreck searchable.
