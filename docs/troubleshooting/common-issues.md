# Common issues

## The script does not start

* Check that `community_bridge`, `ox_lib` and `oxmysql` are started **before** the script.
* Make sure the resource folder name matches the name in your `ensure` line.
* Read the first red line in the server console. It usually names the missing dependency.

## Tables are missing or SQL errors appear

Each script creates its own tables on first start, so there is no SQL file to import. Make sure the database
user has permission to create tables, then restart the server.

## The setup command says I do not have permission

Add the permission from the script's installation page to your permissions cfg and restart. Admin commands
are locked behind an ace.

## An item has no icon or does not exist

Add the items listed on the script's installation page to your inventory, and copy the icons into your
inventory's images folder. Item names must match exactly.

## Targets or zones are hard to see

Set `Config.Debug = true` in the script's config to draw the zones and print what the script is doing. Turn it
back off on a live server.

## My edits were lost after an update

Only the config files listed on each script's configuration page are kept open for editing. Edits to any other
file are overwritten when you update.
