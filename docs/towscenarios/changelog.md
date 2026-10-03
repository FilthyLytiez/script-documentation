# Changelog

## 5.1.0

### New

* New call-out: a car fire at the roadside. Put it out with a fire extinguisher before it explodes, then recover the wreck.
* New call-outs: a head-on collision and a vehicle rollover, posed and damaged where they were hit.
* Fires can flare back up after being put out, and a burning car explodes, with a warning first, if nobody puts it out. Its payout is reduced when it does.
* The fire bonus is split between everyone who sprayed the fire.
* Pedestrians near a fire scene may flee or stop to film.
* Drivers who arrive late or drive into range find a scene straight away.

### Changed

* Scene events go to tow drivers and players near the scene instead of every player.
* Default item rewards use standard inventory items.
* Item definitions and icons moved to the documentation.

### Fixed

* The fire bonus goes to the player who actually sprayed the fire.
* A tow driver can no longer put out fires from across the map.
* Props left behind when the script restarts during an ambulance scene, an ambulance drive, a door being forced or a spares shop purchase.

### Config

* Added `Config.FireV2`, `Config.SceneBystanders` and `Config.AccidentComposer`. Every key is optional.
* Added the `car_fire`, `head_on_collision` and `vehicle_rollover` scenarios.

## 5.0.4

### Fixed

* Breakdown vehicles and their NPCs failing to spawn, especially at server start or with addon vehicles.
* Failed spawns are cleaned up and the job can be triggered again.
* Script-owned ambulance, chop and repair vehicles left behind after a crash or restart are swept up on start.
