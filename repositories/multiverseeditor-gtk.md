[iterami/MultiverseEditor.gtk](https://github.com/iterami/MultiverseEditor.gtk) Documentation
---------------------------------------------------------------------------------------------

Table of Contents:
* [Shortcuts](#shortcuts)
* [Installation](#installation)
* [Updating](#updating)
* [Uninstallation](#uninstallation)

---

### Shortcuts

Shortcut         | Notes
-----------------|--------------------
A                | Move Camera Left
C                | Move Camera Down
Ctrl + H         | Return to Origin
Ctrl + Q         | Quit
D                | Move Camera Right
S                | Move Camera Back
Space            | Move Camera Up
W                | Move Camera Forward

---

### Installation

1. `sudo apt-get install libglew-dev libgtk-3-dev`
2. `git clone http://github.com/iterami/common.git` into the same directory as `MultiverseEditor.gtk`.
3. Use your terminal to navigate to the `MultiverseEditor.gtk` directory and `make` it.
4. Run the compiled `multiverseeditor` located at `~/.iterami/multiverseeditor`.

---

### Updating

1. Close `MultiverseEditor.gtk`.
2. `git pull` the `common` and `MultiverseEditor.gtk` repositories.
3. Use your terminal to navigate to the `MultiverseEditor.gtk` directory and `make` it.
4. Run the compiled `multiverseeditor` located at `~/.iterami/multiverseeditor`.

---

### Uninstallation

1. Use your terminal to navigate to the `MultiverseEditor.gtk` directory.
2. `make clean`
3. If you have no other iterami GTK repositories installed, you can delete the `~/.iterami/` directory.
4. Delete the cloned `MultiverseEditor.gtk` directory.
5. Optionally remove `common`, `libglew-dev`, and `libgtk-3-dev`.
