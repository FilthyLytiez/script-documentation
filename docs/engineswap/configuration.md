# Configuration

## Files you can edit

| File | Contains |
|---|---|
| `shared/config.lua` | General settings and the default sound price |
| `shared/categories/*.lua` | The sound catalogue, one file per category |

Everything else is protected. Edits to protected files are lost on update.

## General

| Option | Description |
|---|---|
| `Config.Debug` | Draws the target zones and prints what the script is doing. Leave `false` on a live server |
| `Config.CheckForUpdates` | Prints one line at startup with the latest version |
| `Config.DefaultSoundPrice` | What a sound costs when its own entry does not set a price |

## Categories

Each file in `shared/categories` is one category, grouped by manufacturer or style. Every entry sets the sound
name exactly as your sound pack registers it, the vehicle class, a price and the label shown to players.

```lua
{ sound = 'ecoboostv6', class = 'car', price = 2400, label = "Vapid Turbo V6" },
```

## Using your own sounds

You are not tied to the supplied pack.

* **Add to a category.** Open its file in `shared/categories` and copy a line.
* **Make a new category.** Copy any file in the folder and rename it. Change the category name at the top and put
  your own sounds in the list. The new file appears in game with nothing else to change. Nothing needs registering
  anywhere.

The rev counter and the dyno readouts are driven by the vehicle itself, so a new sound needs no extra work to make
the gauges behave.
