# Installation

## Requirements

| Resource | Why |
|---|---|
| `community_bridge` | Framework, notify and target detection |
| `ox_lib` | UI helpers |
| `oxmysql` | Database |

## Steps

1. Drop the `filthy_winch` folder into your resources.
2. Add `ensure filthy_winch` to your server cfg, after the requirements above.
3. Add the permission below to your permissions cfg.
4. Restart the server.

There is no SQL file to import and no inventory item to add.

## Permission

The setup menu is locked behind an ace. Admins who hold it get the setup options on the target.

```ini
add_ace group.admin filthy_winch.admin allow
```

## Controls

Keybinds are set by each player under Settings, Keybinds, FiveM. Look for the four winch entries.

## Setting up a winch

Every tow truck needs one winch point. That is the spot the rope comes from. You set it once per truck model and
it is saved for everyone.

1. Sit in or stand next to the truck you want to set up.
2. Type `/winchsetup`.
3. Choose **Setup New Winch**.
4. Aim at the truck. Move your crosshair to the exact point the rope should come from. The hook end of a tow arm
   or the middle of the rear bed both work well.
5. Left click to capture. Right click cancels.
6. The point is saved straight away and every player has it from that moment.

Choose **Current Winches** in the same menu to see everything you have set up and to delete any of them.

::: warning
If a truck has no winch point set, the winch will not attach to it. That is the usual reason a new truck does not
work. Some vehicles have no collisions at the point you aim at, so try another spot.
:::

Saved points live in `shared/winch_custom_trucks.json`. You can edit that file by hand, but the menu is easier
and works out the offsets for you.
