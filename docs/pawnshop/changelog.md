# Changelog

## 2.1.0

### New

* Two default categories built from standard inventory items: Electronics and General Goods.
* New messages when the export van cannot spawn or a run cannot start. Your stock is returned.

### Changed

* The old default categories (metal detecting, Funko pops) are removed so the shop works on any server. Add your own by copying a file in `shared/categories`.
* `Config.AlwaysCategories` is empty by default.

### Fixed

* An export run that fails to start cancels cleanly instead of getting stuck.
* A failure setting the van's fuel or giving keys no longer stops the run.
* Crate and buyer targets are cleaned up when a run ends.
