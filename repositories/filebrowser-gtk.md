[iterami/FileBrowser.gtk](https://github.com/iterami/FileBrowser.gtk) Documentation
-----------------------------------------------------------------------------------

### Shortcuts

Shortcut         | Notes
-----------------|------
Ctrl + Q         | Quit

---

### Installation

1. `sudo apt-get install libgtk-3-dev`
2. `git clone http://github.com/iterami/common.git` into the same directory as `FileBrowser.gtk`.
3. Use your terminal to navigate to the `FileBrowser.gtk` directory and `make` it.
4. Run the compiled `filebrowser` located at `~/.iterami/filebrowser`.

---

### Updating

1. Close `FileBrowser.gtk`.
2. `git pull` the `common` and `FileBrowser.gtk` repositories.
3. Use your terminal to navigate to the `FileBrowser.gtk` directory and `make` it.
4. Run the compiled `filebrowser` located at `~/.iterami/filebrowser`.

---

### Uninstallation

1. Use your terminal to navigate to the `FileBrowser.gtk` directory.
2. `make clean`
3. If you have no other iterami GTK repositories installed, you can delete the `~/.iterami/` directory.
4. Delete the cloned `FileBrowser.gtk` directory.
5. Optionally remove `common` and `libgtk-3-dev`.
