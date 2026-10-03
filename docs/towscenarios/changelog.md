# Changelog

## 5.0.4

### New

* Tow scenes now find drivers who arrive late or drive into range on their own, instead of waiting on a repeated
  announcement.
* Tow fires can flare back up after being put out, and a burning car explodes, with a warning first, if nobody
  puts it out in time. Its payout is reduced when it does.
* New call-out: a car fire at the roadside. Put it out with a fire extinguisher before it explodes, then recover
  the wreck.
* Fire scenes feel more alive: nearby pedestrians may flee or stop to film.
* Two new crash scenarios: a head-on collision and a vehicle rollover. Both are posed and damaged where they were
  hit and leave their hazard lights blinking.

### Fixed

* Fixed a crash that could happen if the script restarted while someone was using a defibrillator on an
  ambulance scene.
* Fixed the ambulance and paramedic not being cleaned up if the script restarted while they were driving to the
  call.
* Fixed leftover props (the crowbar used to force a door, and the item handed over at the spares shop) if the
  script restarted mid-animation.
* The fire bonus now goes to the player who actually sprayed the fire.
* A tow driver far from a scene can no longer report a fire out from a distance.
