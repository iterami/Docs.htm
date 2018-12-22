[iterami/FileBrowser.gtk](https://github.com/iterami/FileBrowser.gtk) Docs
--------------------------------------------------------------------------

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

1. `git clone https://github.com/iterami/FileBrowser.gtk.git`
2. `sudo apt-get install libgtk-3-dev`
3. `git clone https://github.com/iterami/common.git` into the same directory as `FileBrowser.gtk`.
4. Use your terminal to navigate to the `FileBrowser.gtk` directory and `make` it.
5. Run the compiled `~/.iterami/filebrowser`.

---

### Updating

1. Close `FileBrowser.gtk`.
2. `git pull` the `common` and `FileBrowser.gtk` repositories that you cloned.
3. Use your terminal to navigate to the `FileBrowser.gtk` directory and `make` it.
4. Run the compiled `~/.iterami/filebrowser`.

---

### Uninstallation

1. Use your terminal to navigate to the `FileBrowser.gtk` directory.
2. `make clean`
3. Delete the cloned `FileBrowser.gtk` directory.
4. Optionally remove `common` and optionally `sudo apt-get remove libgtk-3-dev`.
5. If you have no other iterami GTK repositories installed, you can delete the `~/.iterami/` directory.
