# Changelog

## 5.1.0

### New

* `Config.MaxNoteWorth`: the most a single dirty money item can wash for.
* Tokens can be added to the shop from the crafting spot as well as the boss menu.

### Changed

* Dirty money with no stamped value defaults to $1 per item. It used to be a random 100 to 5000.
* `Config.UseMetadataWorth` is on by default.
* The token recipe uses standard inventory items.

### Fixed

* A finished wash can only be collected once.
* The amount to wash is validated, and money is valued lowest first so a large item cannot be washed repeatedly.

::: warning Updating
Config files are replaced when you update. If you edited `config.lua`, merge your values into the new file. Servers still on a `BlackMoneyWorth` of 100 to 5000 should change it to `{ min = 1, max = 1 }`.
:::
