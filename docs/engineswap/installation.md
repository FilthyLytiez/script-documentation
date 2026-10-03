# Installation

## Requirements

| Resource | Why |
|---|---|
| `community_bridge` | Framework, notify and fuel detection |
| `ox_lib` | UI helpers |
| `oxmysql` | Database. The 2 tables are created on first start |
| An engine sound pack | The catalogue is built around the sound pack supplied with the script |

## Steps

1. Drop the `filthy_engineswap` folder into your resources.
2. Add the sound pack supplied with your purchase to your server like any other resource.
3. Add `ensure filthy_engineswap` to your server cfg, after the requirements and the sound pack.
4. Add the permission below to your permissions cfg.
5. Restart the server.

There is no SQL file to import and no inventory item to add.

## Permission

The setup menu is locked behind an ace. Add this to your permissions cfg:

```ini
add_ace group.admin engineswap.admin allow
```

## Placing a shop

1. Type `/engineswap` and choose to add a location.
2. Give it a name and a radius.
3. Pick which sound categories the shop may sell. A shop with none selected sells nothing, so pick at least one.
4. Choose a job if only that job may use the shop. Leave it blank and anybody can.
5. Aim where the shop should sit and place it.

Players walk or drive into the zone and press **E**. Admins can also open the panel from anywhere with the
command.
