[iterami/TextEditor.c](https://github.com/iterami/TextEditor.c) Documentation
-----------------------------------------------------------------------------

### Shortcuts

Shortcut         | Notes
-----------------|---------------------
Ctrl + A         | Select All
Ctrl + Backspace | Delete Previous Word
Ctrl + C         | Copy
Ctrl + D         | Delete Line
Ctrl + Delete    | Delete Next Word
Ctrl + F         | Find and Replace...
Ctrl + G         | Find Next
Ctrl + L         | Goto Line...
Ctrl + O         | Open...
Ctrl + Q         | Quit
Ctrl + R         | Sort Lines
Ctrl + S         | Save
Ctrl + Shift + G | Find Previous
Ctrl + Shift + S | Save As...
Ctrl + Shift + Z | Redo
Ctrl + T         | New Tab
Ctrl + V         | Paste
Ctrl + W         | Close Tab
Ctrl + X         | Cut
Ctrl + Z         | Undo

---

### Installation

1. Install GTK+ 3: `sudo apt-get install libgtk-3-dev`
2. Compile `c/texteditor.c`:

```
gcc texteditor.c `pkg-config --cflags --libs gtk+-3.0` -o texteditor
```
3. Run TextEditor.c by either `./texteditor` or running `c/texteditor` through your file browser.
