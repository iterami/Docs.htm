[iterami/EVETools.gtk](https://github.com/iterami/EVETools.gtk) Documentation
-----------------------------------------------------------------------------

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

1. `sudo apt-get install libgtk-3-dev`
2. `git clone http://github.com/iterami/common.git` into the same directory as `EVETools.gtk`.
3. Use your terminal to navigate to the `EVETools.gtk` directory and `make` it.
4. Run the compiled `evetools` located at `~/.iterami/evetools`.

---

### Updating

1. Close `EVETools.gtk`.
2. `git pull` the `common` and `EVETools.gtk` repositories.
3. Use your terminal to navigate to the `EVETools.gtk` directory and `make` it.
4. Run the compiled `evetools` located at `~/.iterami/evetools`.

---

### Uninstallation

1. Use your terminal to navigate to the `EVETools.gtk` directory.
2. `make clean`
3. If you have no other iterami GTK repositories installed, you can delete the `~/.iterami/` directory.
4. Delete the cloned `EVETools.gtk` directory.
5. Optionally remove `common` and `libgtk-3-dev`.
