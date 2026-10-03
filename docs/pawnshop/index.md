# Pawnshop Management

![Pawnshop Management](/images/pawnshop.jpg)

A player owned pawnshop. Players buy goods over the counter, owners set prices, and stock is run out to a buyer
for profit.

::: info Version 2.1.0
Requires `community_bridge`, `ox_lib` and `oxmysql`. The default categories use standard inventory items only.
:::

## Features

* **Player owned shops.** Buy a pawnshop, hire staff and set grades.
* **Pricing.** Owners and managers set what the shop pays for each item.
* **Export runs.** Load a van with stock and drive it to a buyer. The driver keeps a cut and the business keeps
  the rest.
* **Categories.** Each file in `shared/categories` is one category. Tick which categories each shop buys when you
  place it.
* **Anti-farming.** Repeated sales of the same item are paid less, and impossible requests are blocked.
* **Admin tools.** Place everything in game with `/pawncreator`.

## Get started

1. [Install the script](/pawnshop/installation)
2. [Configure it](/pawnshop/configuration)
