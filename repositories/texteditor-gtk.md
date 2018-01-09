[iterami/TextEditor.gtk](https://github.com/iterami/TextEditor.gtk) Documentation
---------------------------------------------------------------------------------

### Shortcuts

Shortcut         | Notes
-----------------|-----------------------
Backspace        | Backspace
Ctrl + A         | Select All
Ctrl + Backspace | Delete Previous Word
Ctrl + C         | Copy
Ctrl + D         | Delete Line
Ctrl + Delete    | Delete Next Word
Ctrl + F         | Find/Replace...
Ctrl + G         | Find Next
Ctrl + L         | Go to Line...
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
Delete           | Delete
End              | Go to Bottom
Escape           | Hide Find/Replace
Home             | Go to Top
Insert           | Toggle Insertion

---

### Installation

1. Install GTK+ 3: `sudo apt-get install libgtk-3-dev`
2. Use your terminal to navigate to the `TextEditor.gtk` directory.
3. `make`
4. Run the compiled `texteditor` located at `~/.iterami/texteditor`.

---

### Updating

1. Close `TextEditor.gtk`.
2. Use your terminal to navigate to the `TextEditor.gtk` directory.
3. `git pull`
4. `make`
5. Run the compiled `texteditor` located at `~/.iterami/texteditor`.

---

### Uninstallation

1. Use your terminal to navigate to the `TextEditor.gtk` directory.
2. `make clean`
3. If you have no other iterami GTK repositories installed, you can delete the `~/.iterami/` directory.
4. Delete the cloned `TextEditor.gtk` directory.
5. If you aren't using `libgtk-3-dev` anymore, you can `sudo apt-get remove libgtk-3-dev`.
