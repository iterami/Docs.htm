[iterami/Engine.gtk](https://github.com/iterami/Engine.gtk) Documentation
-------------------------------------------------------------------------

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
2. `git clone http://github.com/iterami/common.git` into the same directory as `Engine.gtk`.
3. Use your terminal to navigate to the `Engine.gtk` directory and `make` it.
4. Run the compiled `engine` located at `~/.iterami/engine`.

---

### Updating

1. Close `Engine.gtk`.
2. `git pull` the `common` and `Engine.gtk` repositories.
3. Use your terminal to navigate to the `Engine.gtk` directory and `make` it.
4. Run the compiled `engine` located at `~/.iterami/engine`.

---

### Uninstallation

1. Use your terminal to navigate to the `Engine.gtk` directory.
2. `make clean`
3. If you have no other iterami GTK repositories installed, you can delete the `~/.iterami/` directory.
4. Delete the cloned `Engine.gtk` directory.
5. Optionally remove `common`, `libglew-dev`, and `libgtk-3-dev`.
