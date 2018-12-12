[iterami/EVETools.gtk](https://github.com/iterami/EVETools.gtk) Docs
--------------------------------------------------------------------

* [Shortcuts](#shortcuts)
* [Installation](#installation)
* [Updating](#updating)
* [Uninstallation](#uninstallation)

---

### Shortcuts

Shortcut         | Notes
-----------------|------
Ctrl + Q         | Quit

---

### Installation

1. `git clone https://github.com/iterami/EVETools.gtk.git`
2. `sudo apt-get install libgtk-3-dev`
3. `git clone https://github.com/iterami/common.git` into the same directory as `EVETools.gtk`.
4. Use your terminal to navigate to the `EVETools.gtk` directory and `make` it.
5. Run the compiled `evetools` located at `~/.iterami/evetools`.

---

### Updating

1. Close `EVETools.gtk`.
2. `git pull` the `common` and `EVETools.gtk` repositories that you cloned.
3. Use your terminal to navigate to the `EVETools.gtk` directory and `make` it.
4. Run the compiled `evetools` located at `~/.iterami/evetools`.

---

### Uninstallation

1. Use your terminal to navigate to the `EVETools.gtk` directory.
2. `make clean`
3. Delete the cloned `EVETools.gtk` directory.
4. Optionally remove `common` and optionally `sudo apt-get remove libgtk-3-dev`.
5. If you have no other iterami repositories installed, you can delete the `~/.iterami/` directory.
