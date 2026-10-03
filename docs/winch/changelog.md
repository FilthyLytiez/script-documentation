# Changelog

## 2.3.0

### New

* The NUI source is included so the winch interface can be rebuilt.

### Changed

* The truck scan backs off while you stand still and speeds back up as soon as you move.

### Fixed

* Rope length is validated on the server, so an out-of-range value can no longer slip through.
* Tow trucks are detected reliably at start, instead of only after a restart.
* Fixed garbled characters in a few log messages.
