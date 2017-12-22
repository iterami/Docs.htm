[iterami/FileBrowser.c](https://github.com/iterami/FileBrowser.c) Documentation
-------------------------------------------------------------------------------

### Shortcuts

Shortcut         | Notes
-----------------|---------------------
Ctrl + Q         | Quit

---

### Installation

1. Install GTK+ 3: `sudo apt-get install libgtk-3-dev`
2. Compile `c/filebrowser.c`:

```
gcc filebrowser.c `pkg-config --cflags --libs gtk+-3.0` -o filebrowser
```
3. Run FileBrowser.c by either `./filebrowser` or running `c/filebrowser` through your file browser.
