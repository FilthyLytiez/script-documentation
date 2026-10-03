# Configuration

Everything you can change lives in `config.lua`. The rest of the resource is protected, and edits to protected
files are lost on update.

| Option | Description |
|---|---|
| `Config.Debug` | Draws the target zones and prints what the script is doing. Leave `false` on a live server |
| `Config.CheckForUpdates` | Prints one line at startup with the latest version |
| `Config.AdDuration` | Milliseconds an advert notification stays on screen |
| `Config.StatusDuration` | Milliseconds status messages stay on screen |
| `Config.NotificationPosition` | `top-left`, `top-right`, `bottom-left`, `bottom-right`, `center-top`, `center-left`, `center-right` or `center-bottom` |
| `Config.DiscordWebhooks.adPublished` | Discord webhook that logs published adverts. Leave it as `YOUR_WEBHOOK_URL` to disable |
