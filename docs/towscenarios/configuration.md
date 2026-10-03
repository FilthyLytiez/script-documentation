# Configuration

## Files you can edit

| File | Contains |
|---|---|
| `shared/towing_config.lua` | Jobs, payments, XP, rewards, fires, bystanders, accident layouts |
| `shared/chopshop_config.lua` | Chop shop slots, prices, materials and sound |
| `shared/tow_scenarios.lua` | Every call-out scenario, its dialogue and damage |
| `shared/categories/*.lua` | Vehicle price categories |
| `data/default-locations.json` | Job locations |
| `data/default-dispatch-settings.json` | Dispatch defaults |

Everything else is protected. Edits to protected files are lost on update.

## General

| Option | Description |
|---|---|
| `Config.Debug` | Prints what the script is doing. Leave `false` on a live server |
| `Config.CheckForUpdates` | Prints one line at startup with the latest version |
| `Config.Currency` | Currency symbol shown in the UI |
| `Config.SpeedMeasurement` | `mph` or `kmh` |
| `Config.ToggleHudCommand` | Command that shows or hides the tow HUD |

## Jobs

All times are in minutes.

| Option | Description |
|---|---|
| `Config.maxactivetowjobs` | Most jobs on the board at once |
| `Config.JobMinInterval` / `JobMaxInterval` | Random time between new jobs |
| `Config.JobExpirationTime` | How long an unclaimed job stays on the board |
| `Config.ClaimedJobExpiration` | How long a claimed job lasts |
| `Config.unclaimedcleanup` | Time before an abandoned claimed job is cleaned up |
| `Config.Flatbedchance` | Percent chance a job needs a flatbed |
| `Config.lowqualitychance` / `midqualitychance` / `highqualitychance` | Chance of each payout tier |

## Payments

| Option | Description |
|---|---|
| `Config.PaymentSplit` | Player and company percentages, and the payment method |
| `Config.TowPriceTier` | Minimum and maximum payout for each tier |
| `Config.ReviveReward` | Paid for reviving a casualty |
| `Config.AmbulanceBonus` | Bonus when the ambulance is called to a scene |
| `Config.TowCompanyPrice` | Default price to buy a company |
| `Config.TowCompanySellPercent` | Percent refunded when a company is sold |

## XP and levels

`Config.XP` sets the XP gained per delivery for players and companies. `Config.Levels` lists the XP needed for each
level and the reward (money and an item) paid at milestone levels. Rewards use standard inventory items by default.

## Spares shop

`Config.SparesShop` places the shop and lists what it sells.

```lua
stock = {
    { item = 'replacement_battery',     price = 350 },
    { item = 'spare_tire',              price = 300 },
    { item = 'WEAPON_FIREEXTINGUISHER', price = 900 },
    { item = 'WEAPON_CROWBAR',          price = 450 },
},
```

## Item rewards

`Config.RewardSystem` gives a chance of an item after a job or a dialogue. Items are grouped by rarity, and
`rarityChances` sets how often each group is picked. The defaults are standard inventory items. Replace them
with your own.

## Scene payouts

`Config.SceneRewards` sets the bonuses for large scenes.

| Option | Description |
|---|---|
| `rescueBonus` | Pulling a casualty out of a wreck |
| `fireReward` | Putting out a fire, once per fire |
| `bodyRecovery` | Bagging a casualty who did not survive |

## Scene fires

`Config.FireV2` controls how fires are settled. Every key is optional.

| Option | Description |
|---|---|
| `splitPayout` | Share the fire bonus between everyone who sprayed |
| `reignite` | Chance, delay and maximum number of times a fire flares back up |
| `explosion` | Whether burning cars explode, how long it takes, the warning time and the payout penalty |
| `sceneRepublishMs` | Re-broadcast interval for clients that missed a scene update. `0` disables it |

## Bystanders

`Config.SceneBystanders` controls how many pedestrians react, how far away they react from, and the chance that
they flee or film.

## Accident layouts

`Config.AccidentComposer.layouts` describes where each vehicle sits in a crash, which side is damaged and which
props are placed. Copy a layout to add your own, then point a scenario at it with `composer = "<layout name>"` in
`shared/tow_scenarios.lua`.

## Chop shop

Settings are in `shared/chopshop_config.lua`.

| Option | Description |
|---|---|
| `Chopshop.BaseSlots` and `SlotUpgrades` | Vehicle slots and the cost of each upgrade |
| `Chopshop.ChopPriceTiers` / `ExportPriceTiers` | Payout ranges |
| `Chopshop.ChopMaterials` | Items produced by chopping |
| `Chopshop.RareItem` and `RareItemChance` | A rare find while chopping |
| `Chopshop.Sound` | Volume, distance and filters for the chop sounds |
