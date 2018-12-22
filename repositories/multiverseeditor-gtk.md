[iterami/MultiverseEditor.gtk](https://github.com/iterami/MultiverseEditor.gtk) Docs
------------------------------------------------------------------------------------

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

1. `git clone https://github.com/iterami/MultiverseEditor.gtk.git`
2. `sudo apt-get install libglew-dev libgtk-3-dev`
3. `git clone https://github.com/iterami/common.git` into the same directory as `MultiverseEditor.gtk`.
4. Use your terminal to navigate to the `MultiverseEditor.gtk` directory and `make` it.
5. Run the compiled `~/.iterami/multiverseeditor`.

---

### Updating

1. Close `MultiverseEditor.gtk`.
2. `git pull` the `common` and `MultiverseEditor.gtk` repositories that you cloned.
3. Use your terminal to navigate to the `MultiverseEditor.gtk` directory and `make` it.
4. Run the compiled `~/.iterami/multiverseeditor`.

---

### Uninstallation

1. Use your terminal to navigate to the `MultiverseEditor.gtk` directory.
2. `make clean`
3. Delete the cloned `MultiverseEditor.gtk` directory.
4. Optionally remove `common`, optionally `sudo apt-get remove libglew-dev`, and optionally `sudo apt-get remove libgtk-3-dev`.
5. If you have no other iterami GTK repositories installed, you can delete the `~/.iterami/` directory.
