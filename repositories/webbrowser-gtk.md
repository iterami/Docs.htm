[iterami/WebBrowser.gtk](https://github.com/iterami/WebBrowser.gtk) Docs
------------------------------------------------------------------------

* [Shortcuts](#shortcuts)
* [Installation](#installation)
* [Updating](#updating)
* [Uninstallation](#uninstallation)

---

### Shortcuts

Shortcut         | Notes
-----------------|-----------------------
Ctrl + Q         | Quit
Ctrl + R         | Reload
Ctrl + Shift + + | Move Current Tab Right
Ctrl + Shift + _ | Move Current Tab Left
Ctrl + T         | New Tab
Ctrl + W         | Close Tab
Ctrl + =         | Next Tab
Ctrl + -         | Previous Tab

---

### Installation

1. `git clone https://github.com/iterami/WebBrowser.gtk.git`
2. `sudo apt-get install libgtk-3-dev webkit2gtk-3.0`
3. `git clone https://github.com/iterami/common.git` into the same directory as `WebBrowser.gtk`.
4. Use your terminal to navigate to the `WebBrowser.gtk` directory and `make` it.
5. Run the compiled `~/.iterami/webbrowser`.

---

### Updating

1. Close `WebBrowser.gtk`.
2. `git pull` the `common` and `WebBrowser.gtk` repositories that you cloned.
3. Use your terminal to navigate to the `WebBrowser.gtk` directory and `make` it.
4. Run the compiled `~/.iterami/webbrowser`.

---

### Uninstallation

1. Use your terminal to navigate to the `WebBrowser.gtk` directory.
2. `make clean`
3. Delete the cloned `WebBrowser.gtk` directory.
4. Optionally remove `common` and optionally `sudo apt-get remove libgtk-3-dev webkit2gtk-3.0`.
5. If you have no other iterami GTK repositories installed, you can delete the `~/.iterami/` directory.
