[iterami/Engine.gtk](https://github.com/iterami/Engine.gtk) Documentation
-------------------------------------------------------------------------

### Shortcuts

Shortcut         | Notes
-----------------|---------------------
Ctrl + Q         | Quit

---

### Installation

1. Install GTK+ 3: `sudo apt-get install libgtk-3-dev`
2. Install GLEW: `sudo apt-get install libglew-dev`
3. Use your terminal to navigate to the `Engine.gtk` directory.
4. `make`
5. Run the compiled `engine` located at `~/.iterami/engine`.

---

### Updating

1. Close `Engine.gtk`.
2. Use your terminal to navigate to the `Engine.gtk` directory.
3. `git pull`
4. `make`
5. Run the compiled `engine` located at `~/.iterami/engine`.

---

### Uninstallation

1. Use your terminal to navigate to the `Engine.gtk` directory.
2. `make clean`
3. If you have no other iterami GTK repositories installed, you can delete the `~/.iterami/` directory.
4. Delete the cloned `Engine.gtk` directory.
5. If you aren't using `libgtk-3-dev` anymore, you can `sudo apt-get remove libgtk-3-dev`.
6. If you aren't using `libglew-dev` anymore, you can `sudo apt-get remove libglew-dev`.
