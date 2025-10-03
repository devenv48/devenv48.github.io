# Changelog
## Beta 5 - September 13, 2025
* Updates on research and improvements.
* The modified input remains experimental; in some cases, it is slow compared to a pad. It also requires a deeper review of the game's core UI.
* Fixed the first-person model matrix translation, which was showing the player a block below in an unfamiliar way.
* UI tweaks have been tidied up and fixed.
* Fast minigame respawn.
* Bugfixes
* External textures now load correctly.
* Attempted to run in HEN with some errors.
* Rebuilt for HFW.
* Research on Level map data, initial stage of minimap.
* First person didn't consider partial marks when rendering. It's now synced with the world.
* Reverse view matrix and initial review of some waypoint utilities.
* Initial stage of ShieldItem.

> The main reason for my delay is that I'm working on other libraries and reworking some game ideas that aren't finished or even added to the final program.
> Please note that some of the features we looked at previously might not be present in the current version due to a need for "rework", as I call it sometimes. Writing and testing for Cell is, above all, laborious.

# v1.0
* Initial stage of server functionability.
* Add updating capability
* Add versioning
* Add several startup validations
* Added main message feed
- Must fix crash after exiting screen from mins of gameplay
# Pre 1.0
* Health Info Tags over every player entity head.   ||
* Field Of View fixed distorting when using Speed II.
* Fix certain food items could not be usable from both hands.
* Fixed item renderer matrix making culling issues.
* Added multiple soundtracks.
* Added main ping indicator on HUD.
* Fixed item renderer matrix not showing enchanment foil layer.
* Added mob effect HUD inspired by Lunar Client
* Fix textures being unloaded incorrectly ingame.
* Fix main menu crashing after ticking Discord Rich Presence.
* Added projection and waypoints features.
* Added command input buffer
* Added optional first person pumpkin rendering.
* Fixed resource packs being unusable.
* Fixed old engine making GL errors.
* Reimplemented various properties doesnt taking sense and some ones being unused.
* Implemented changelog display webhost.
* Reimplemented keyboard and mouse input feature in first person and various menus.
* Moved HUD hotbar to bottom.
* Added main menu's 'exit game' button.
* Changed entity name tags background color.

