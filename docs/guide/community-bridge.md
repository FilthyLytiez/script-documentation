# community_bridge

`community_bridge` is the one dependency shared by every Filthy Lytiez script. It sits between the script and
your server, so the script never talks to a specific framework or inventory directly.

## What it handles

| Area | Examples |
|---|---|
| Framework | Qbox, QBCore, ESX |
| Inventory | ox_inventory, qb-inventory, ps-inventory, qs-inventory, origen, codem, tgiann |
| Target | ox_target, qb-target |
| Notifications, menus, input, progress bars | ox_lib and others |
| Fuel and vehicle keys | Your installed fuel and key scripts |

It picks up what your server runs automatically. There is nothing to set.

## Install

1. Download `community_bridge` and put it in your resources.
2. Start it before every Filthy Lytiez script.

```ini
ensure community_bridge
ensure ox_lib
ensure oxmysql
ensure filthy_towscenarios
```

::: tip
If a script prints that `community_bridge` is not loaded, it is either missing or started after the script.
:::
