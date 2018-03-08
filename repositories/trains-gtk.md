[iterami/Trains.gtk](https://github.com/iterami/Trains.gtk) Documentation
-------------------------------------------------------------------------

### Shortcuts

Shortcut         | Notes
-----------------|--------------------
A                | Move Camera Left
Ctrl + H         | Return to Origin
Ctrl + Q         | Quit
D                | Move Camera Right
S                | Move Camera Back
W                | Move Camera Forward

---

### Installation

1. `sudo apt-get install libglew-dev libgtk-3-dev`
2. `git clone http://github.com/iterami/common.git` into the same directory as `Trains.gtk`.
3. Use your terminal to navigate to the `Trains.gtk` directory and `make` it.
4. Run the compiled `trains` located at `~/.iterami/trains`.

---

### Updating

1. Close `Trains.gtk`.
2. `git pull` the `common` and `Trains.gtk` repositories.
3. Use your terminal to navigate to the `Trains.gtk` directory and `make` it.
4. Run the compiled `trains` located at `~/.iterami/trains`.

---

### Uninstallation

1. Use your terminal to navigate to the `Trains.gtk` directory.
2. `make clean`
3. If you have no other iterami GTK repositories installed, you can delete the `~/.iterami/` directory.
4. Delete the cloned `Trains.gtk` directory.
5. Optionally remove `common`, `libglew-dev`, and `libgtk-3-dev`.
