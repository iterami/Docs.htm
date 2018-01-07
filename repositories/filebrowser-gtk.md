[iterami/FileBrowser.gtk](https://github.com/iterami/FileBrowser.gtk) Documentation
-----------------------------------------------------------------------------------

### Shortcuts

Shortcut         | Notes
-----------------|---------------------
Ctrl + Q         | Quit

---

### Installation

1. Install GTK+ 3: `sudo apt-get install libgtk-3-dev`
2. Use your terminal to navigate to the `FileBrowser.gtk` directory.
3. `make`
4. Run the compiled `filebrowser` located at `~/.iterami/filebrowser`.

---

### Updating

1. Close `FileBrowser.gtk`.
2. Use your terminal to navigate to the `FileBrowser.gtk` directory.
3. `git pull`
4. `make`
5. Run the compiled `filebrowser` located at `~/.iterami/filebrowser`.

---

### Uninstallation

1. Use your terminal to navigate to the `FileBrowser.gtk` directory.
2. `make clean`
3. If you have no other iterami GTK repositories installed, you can delete the `~/.iterami/` directory.
4. Delete the cloned `FileBrowser.gtk` directory.
5. If you aren't using `libgtk-3-dev` anymore, you can `sudo apt-get remove libgtk-3-dev`.