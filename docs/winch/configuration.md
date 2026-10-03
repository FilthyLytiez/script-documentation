# Configuration

Everything you can change lives in `shared/config.lua`. Saved winch points are stored in `shared/winch_custom_trucks.json`, which you can also edit. Everything else is protected, and edits to protected files are lost on update.

## General

| Option | Description |
|---|---|
| `Config.Debug` | Prints what the script is doing. Leave `false` on a live server |
| `Config.CheckForUpdates` | Prints one line at startup with the latest version |
| `Config.AdminCommand` | Command used to add custom tow trucks |
| `Config.JobCheck` | `true` limits the winch to the jobs in `Config.JobRoles` |
| `Config.JobRoles` | Jobs allowed to use the winch |
| `Config.ScanRadius` | How far around the player trucks are searched for |
| `Config.ScanInterval` | Seconds between searches |

## Ropes

| Option | Description |
|---|---|
| `Config.Ropes.MinLength` | Shortest a rope can be wound in |
| `Config.Ropes.MaxLength` | Longest a rope can be let out |
| `Config.Ropes.WindingSpeed` | How fast the rope winds |

## Sound

| Option | Description |
|---|---|
| `Config.Sound.Radius` | Distance in metres at which players can hear the winch |
| `Config.Sound.Volume` | `0.0` to `1.0` |
| `Config.Sound.FadeDuration` | Seconds the sound takes to fade out when winding stops |
| `Config.Sound.UpdateInterval` | Milliseconds between position and filter updates |
| `Config.Sound.Panner` | Spatial audio settings |
| `Config.Sound.InteriorFilter` | Muffling when the listener is indoors |
| `Config.Sound.VehicleFilter` | Muffling through a closed cabin |
| `Config.Sound.DisableInteriorFilter` / `DisableVehicleFilter` | Turn a filter off |
