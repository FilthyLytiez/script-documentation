# Installation

## Requirements

| Resource | Why |
|---|---|
| `community_bridge` | Framework, inventory, target and notify detection |
| `ox_lib` | UI helpers |
| `oxmysql` | Database. The table and stashes are created on first start |
| Animated Recycler prop | The machine model, by Mrs. BzZz. A separate purchase, see below |

::: warning Recycler prop
The animated recycler prop is not part of this download. Without it the machine will not appear in game. Get it
from [Mrs. BzZz](https://bzzz.tebex.io/package/5372116). This script streams the animated smoke effect for the
machine, and the model itself comes from that pack.
:::

## Steps

1. Drop the `filthy_recycling` folder into your resources.
2. Start the recycler prop pack.
3. Add `ensure filthy_recycling` to your server cfg, after the requirements and the prop pack.
4. Add the items below to your inventory and copy their icons into its images folder.
5. Add the permission below to your permissions cfg.
6. Restart the server.

There is no SQL file to import.

```ini
ensure oxmysql
ensure ox_lib
ensure community_bridge
ensure filthy_recycling
```

## Items

The recycling plant uses scrap parts from wrecks and gives back materials. The item names are the names the script
uses. If you rename one, rename it in `shared/recipes.lua` as well, or the recipe will never complete.

| Item | Label | Icon |
|---|---|---|
| `scrapdoor` | Scrap Door | None supplied |
| `scrapengine` | Scrap Engine | [Download](/items/recycling/scrapengine.png) |
| `scrapexhaust` | Scrap Exhaust | [Download](/items/recycling/scrapexhaust.png) |
| `scrapfbumper` | Scrap Front Bumper | [Download](/items/recycling/scrapfbumper.png) |
| `scraphood` | Scrap Hood | [Download](/items/recycling/scraphood.png) |
| `scrappanel` | Scrap Panel | [Download](/items/recycling/scrappanel.png) |
| `scrapradiator` | Scrap Radiator | [Download](/items/recycling/scrapradiator.png) |
| `scraprbumper` | Scrap Rear Bumper | [Download](/items/recycling/scraprbumper.png) |
| `scraptransmission` | Scrap Transmission | [Download](/items/recycling/scraptransmission.png) |
| `scraptrunk` | Scrap Trunk | [Download](/items/recycling/scraptrunk.png) |
| `scrapwheel` | Scrap Wheel | [Download](/items/recycling/scrapwheel.png) |
| `steel` | Steel | [Download](/items/recycling/steel.png) |
| `aluminum` | Aluminum | [Download](/items/recycling/aluminum.png) |
| `copper` | Copper | [Download](/items/recycling/copper.png) |
| `iron` | Iron | [Download](/items/recycling/iron.png) |
| `rubber` | Rubber | [Download](/items/recycling/rubber.png) |
| `glass` | Glass | [Download](/items/recycling/glass.png) |
| `plastic` | Plastic | None supplied |
| `metalscrap` | Metal Scrap | [Download](/items/recycling/metalscrap.png) |

::: tip
`plastic` and `scrapdoor` ship without an icon. Add your own or point them at an icon you already have.
:::

::: code-group

```lua [ox_inventory]
-- data/items.lua
['scrapdoor'] = {
    label = 'Scrap Door',
    weight = 250,
    stack = true,
    close = true,
    description = 'A door panel pulled from a wreck',
},
['scrapengine'] = {
    label = 'Scrap Engine',
    weight = 250,
    stack = true,
    close = true,
    description = 'A seized engine block pulled from a wreck',
},
['scrapexhaust'] = {
    label = 'Scrap Exhaust',
    weight = 250,
    stack = true,
    close = true,
    description = 'A rusted exhaust pulled from a wreck',
},
['scrapfbumper'] = {
    label = 'Scrap Front Bumper',
    weight = 250,
    stack = true,
    close = true,
    description = 'A front bumper pulled from a wreck',
},
['scraphood'] = {
    label = 'Scrap Hood',
    weight = 250,
    stack = true,
    close = true,
    description = 'A buckled hood pulled from a wreck',
},
['scrappanel'] = {
    label = 'Scrap Panel',
    weight = 250,
    stack = true,
    close = true,
    description = 'A body panel pulled from a wreck',
},
['scrapradiator'] = {
    label = 'Scrap Radiator',
    weight = 250,
    stack = true,
    close = true,
    description = 'A leaking radiator pulled from a wreck',
},
['scraprbumper'] = {
    label = 'Scrap Rear Bumper',
    weight = 250,
    stack = true,
    close = true,
    description = 'A rear bumper pulled from a wreck',
},
['scraptransmission'] = {
    label = 'Scrap Transmission',
    weight = 250,
    stack = true,
    close = true,
    description = 'A dead gearbox pulled from a wreck',
},
['scraptrunk'] = {
    label = 'Scrap Trunk',
    weight = 250,
    stack = true,
    close = true,
    description = 'A trunk lid pulled from a wreck',
},
['scrapwheel'] = {
    label = 'Scrap Wheel',
    weight = 250,
    stack = true,
    close = true,
    description = 'A buckled wheel pulled from a wreck',
},
['steel'] = {
    label = 'Steel',
    weight = 250,
    stack = true,
    close = true,
    description = 'Refined steel ready for sale',
},
['aluminum'] = {
    label = 'Aluminum',
    weight = 250,
    stack = true,
    close = true,
    description = 'Refined aluminum ready for sale',
},
['copper'] = {
    label = 'Copper',
    weight = 250,
    stack = true,
    close = true,
    description = 'Refined copper ready for sale',
},
['iron'] = {
    label = 'Iron',
    weight = 250,
    stack = true,
    close = true,
    description = 'Refined iron ready for sale',
},
['rubber'] = {
    label = 'Rubber',
    weight = 250,
    stack = true,
    close = true,
    description = 'Reclaimed rubber ready for sale',
},
['glass'] = {
    label = 'Glass',
    weight = 250,
    stack = true,
    close = true,
    description = 'Reclaimed glass ready for sale',
},
['plastic'] = {
    label = 'Plastic',
    weight = 250,
    stack = true,
    close = true,
    description = 'Reclaimed plastic ready for sale',
},
['metalscrap'] = {
    label = 'Metal Scrap',
    weight = 250,
    stack = true,
    close = true,
    description = 'Mixed metal scrap ready for sale',
},
```

```lua [qb / ps / qs inventory]
-- items.lua
scrapdoor = { name = 'scrapdoor', label = 'Scrap Door', weight = 250, type = 'item', image = 'scrapdoor.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'A door panel pulled from a wreck' },
scrapengine = { name = 'scrapengine', label = 'Scrap Engine', weight = 250, type = 'item', image = 'scrapengine.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'A seized engine block pulled from a wreck' },
scrapexhaust = { name = 'scrapexhaust', label = 'Scrap Exhaust', weight = 250, type = 'item', image = 'scrapexhaust.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'A rusted exhaust pulled from a wreck' },
scrapfbumper = { name = 'scrapfbumper', label = 'Scrap Front Bumper', weight = 250, type = 'item', image = 'scrapfbumper.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'A front bumper pulled from a wreck' },
scraphood = { name = 'scraphood', label = 'Scrap Hood', weight = 250, type = 'item', image = 'scraphood.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'A buckled hood pulled from a wreck' },
scrappanel = { name = 'scrappanel', label = 'Scrap Panel', weight = 250, type = 'item', image = 'scrappanel.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'A body panel pulled from a wreck' },
scrapradiator = { name = 'scrapradiator', label = 'Scrap Radiator', weight = 250, type = 'item', image = 'scrapradiator.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'A leaking radiator pulled from a wreck' },
scraprbumper = { name = 'scraprbumper', label = 'Scrap Rear Bumper', weight = 250, type = 'item', image = 'scraprbumper.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'A rear bumper pulled from a wreck' },
scraptransmission = { name = 'scraptransmission', label = 'Scrap Transmission', weight = 250, type = 'item', image = 'scraptransmission.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'A dead gearbox pulled from a wreck' },
scraptrunk = { name = 'scraptrunk', label = 'Scrap Trunk', weight = 250, type = 'item', image = 'scraptrunk.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'A trunk lid pulled from a wreck' },
scrapwheel = { name = 'scrapwheel', label = 'Scrap Wheel', weight = 250, type = 'item', image = 'scrapwheel.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'A buckled wheel pulled from a wreck' },
steel = { name = 'steel', label = 'Steel', weight = 250, type = 'item', image = 'steel.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'Refined steel ready for sale' },
aluminum = { name = 'aluminum', label = 'Aluminum', weight = 250, type = 'item', image = 'aluminum.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'Refined aluminum ready for sale' },
copper = { name = 'copper', label = 'Copper', weight = 250, type = 'item', image = 'copper.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'Refined copper ready for sale' },
iron = { name = 'iron', label = 'Iron', weight = 250, type = 'item', image = 'iron.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'Refined iron ready for sale' },
rubber = { name = 'rubber', label = 'Rubber', weight = 250, type = 'item', image = 'rubber.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'Reclaimed rubber ready for sale' },
glass = { name = 'glass', label = 'Glass', weight = 250, type = 'item', image = 'glass.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'Reclaimed glass ready for sale' },
plastic = { name = 'plastic', label = 'Plastic', weight = 250, type = 'item', image = 'plastic.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'Reclaimed plastic ready for sale' },
metalscrap = { name = 'metalscrap', label = 'Metal Scrap', weight = 250, type = 'item', image = 'metalscrap.png', unique = false, useable = false, shouldClose = true, combinable = nil, description = 'Mixed metal scrap ready for sale' },
```

:::

## Permission

The setup menu is locked behind an ace. Nobody can use it until you grant the permission. Add this to your
permissions cfg:

```ini
add_ace group.admin recycling.admin allow
```

## First setup

Use `/recycle` in game to create, edit and delete recycling centers.
