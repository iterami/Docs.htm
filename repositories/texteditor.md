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
2. Use your terminal to navigate to the `TextEditor.c` directory and `make` it.
3. Run the compiled `texteditor` located at `~/.iterami/texteditor`.

---

### Uninstallation

1. Use your terminal to navigate to the `TextEditor.c` directory and `make clean`.
2. If you have no other iterami GTK repositories installed, you can delete the `~/.iterami/` directory.
3. Delete the cloned `TextEditor.c` directory.
