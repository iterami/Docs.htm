[iterami/TextEditor.c](https://github.com/iterami/TextEditor.c) Documentation
-----------------------------------------------------------------------------

### Shortcuts

Shortcut | Notes
---------|--------------
Ctrl + A | Select All
Ctrl + C | Copy Selected
Ctrl + V | Paste
Ctrl + X | Cut Selected

---

### Installation

1. Install GTK+ 3: `sudo apt-get install libgtk-3-dev`
2. Compile `c/texteditor.c`:

```
gcc texteditor.c `pkg-config --cflags --libs gtk+-3.0` -o texteditor
```
3. Run TextEditor.c by either `./texteditor` or running `c/texteditor` through your file browser.
