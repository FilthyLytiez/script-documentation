# Installation

## Requirements

| Resource | Why |
|---|---|
| `community_bridge` | Framework, target and notify detection |
| `ox_lib` | UI helpers |
| `oxmysql` | Database. The table is created on first start |

## Steps

1. Drop the `filthy_addcreator` folder into your resources.
2. Add `ensure filthy_addcreator` to your server cfg, after the requirements above.
3. Add the permission below to your permissions cfg.
4. Restart the server.

There is no SQL file to import and no inventory item to add.

## Permission

The setup menu is locked behind an ace. Add this to your permissions cfg:

```ini
add_ace group.admin addcreator.admin allow
```

## Placing an advert

1. Type `/addcreator`.
2. Fill in the advert, and choose the job that may edit it later if you want one.
3. Aim where the advert should sit. Left click to place, right click to cancel.

Everything is saved as you go, so there is nothing to restart afterwards.
