# Configuration

## Files you can edit

| File | Contains |
|---|---|
| `shared/config.lua` | Prices, grades, export runs and anti-farming |
| `shared/categories/*.lua` | What the shops buy, one file per category |

Everything else is protected. Edits to protected files are lost on update.

## General

| Option | Description |
|---|---|
| `Config.Debug` | Draws the target zones and prints what the script is doing. Leave `false` on a live server |
| `Config.CheckForUpdates` | Prints one line at startup with the latest version |
| `Config.DefaultBusinessPrice` | Price of a shop created without its own price |
| `Config.BusinessSellPrice` | Percent of the purchase price an owner gets back when selling |
| `Config.AlwaysCategories` | Categories every shop buys without being ticked, for example `{ 'General Goods' }` |

## Employee grades

`Config.EmployeeGrades` sets what each grade can do.

| Permission | Description |
|---|---|
| `canWithdraw` | Take money from the business account |
| `canHirefire` | Hire and fire staff |
| `canPrice` | Change what the shop pays |
| `canExport` | Start export runs |

## Export runs

| Option | Description |
|---|---|
| `Config.Export.Markup` | Payout multiplier over what the shop paid for the goods |
| `Config.Export.BoxCapacity` | Stock units that fit in one crate |
| `Config.Export.DriverCommission` | Percent of the run's profit paid to the driver |
| `Config.Export.MinCrateInterval` | Shortest time in milliseconds between crate pickups |

## Anti-farming

| Option | Description |
|---|---|
| `Config.AntiExploit.FarmThreshold` | How many times the sale limit can be reached in 24 hours before the payout drops |
| `Config.AntiExploit.FarmPenalty` | How much the payout drops, `0.20` is 20% |
| `Config.AntiExploit.TrackingRetentionDays` | Days sale records are kept |
| `Config.AntiExploit.MaxWarnings` | Strikes for impossible requests before the player is dropped |
| `Config.AntiExploit.WarningDecay` | Seconds before an old strike is forgotten |
| `Config.AntiExploit.ActionCooldown` | Milliseconds between actions |

## Category files

Each entry sets the item, its category, the price and the most that can be sold in one sale.

```lua
{ item = "lockpick", category = "General Goods", price = 120, maxSellQuantity = 10 },
```
