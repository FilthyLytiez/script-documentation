# Configuration

Everything you can change lives in `config.lua`. The rest of the resource is protected, and edits to protected
files are lost on update.

## General

| Option | Description |
|---|---|
| `Config.Debug` | Draws the target zones and prints what the script is doing. Leave `false` on a live server |
| `Config.CheckForUpdates` | Prints one line at startup with the latest version |
| `Config.MinimumPolice` | Police that must be online before a wash can start |
| `Config.PoliceAlertChance` | Chance that police are alerted, `0.90` is 90% |
| `Config.PoliceJobs` | Jobs counted as police |

## Business

| Option | Description |
|---|---|
| `Config.BossPercentage` | Share of washed money paid to the business owner, `0.10` is 10% |
| `Config.BusinessSellPrice` | Percent of the purchase price an owner gets back when selling |
| `Config.MachineRepairCost` | Minimum and maximum cost to repair a machine |

## Dirty money

| Option | Description |
|---|---|
| `Config.DirtyMoneyItems` | Items accepted as dirty money |
| `Config.UseMetadataWorth` | `true` uses an item's `metadata.worth` when it has one, so scripts that pay a whole sum in one item wash for that exact amount. `false` always uses `Config.BlackMoneyWorth` |
| `Config.BlackMoneyWorth` | Value of an item with no `metadata.worth`. Most scripts pay one dirty money item per dollar, so keep this at `1` |
| `Config.MaxNoteWorth` | Most a single dirty money item can wash for |

::: warning
A `BlackMoneyWorth` higher than what your other scripts pay per item multiplies those payouts. Keep it at `1`
unless you know how your scripts pay out dirty money.
:::

## Washing

| Option | Description |
|---|---|
| `Config.UseValueBasedTimer` | `true` scales the wash time with the amount washed. `false` uses a fixed time per note |
| `Config.WashTimePerThousandMs` | Milliseconds per $1,000 when the timer is value based |
| `Config.WashTimePerNote` | Seconds per note when it is not |
| `Config.CollectTime` | Milliseconds for the collect animation |

## Tokens

| Option | Description |
|---|---|
| `Config.TokenItem` | Item name of the wash token |
| `Config.TokenCraftingRequirements` | Items needed to craft one token. The defaults are standard inventory items |
