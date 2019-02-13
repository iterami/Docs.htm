[iterami/TextEditor.gtk](https://github.com/iterami/TextEditor.gtk) Docs
------------------------------------------------------------------------

* [Shortcuts](#shortcuts)
* [Installation](#installation)
* [Updating](#updating)
* [Uninstallation](#uninstallation)

---

### Shortcuts

Shortcut         | Notes
-----------------|-------------------------------
Backspace        | Backspace
Ctrl + -         | Previous Tab
Ctrl + =         | Next Tab
Ctrl + A         | Select All
Ctrl + Backspace | Delete Previous Word
Ctrl + C         | Copy Selected
Ctrl + D         | Delete Line
Ctrl + Delete    | Delete Next Word
Ctrl + F         | Find/Replace...
Ctrl + G         | Find Next
Ctrl + H         | Replace All
Ctrl + L         | Go to Line...
Ctrl + O         | Open...
Ctrl + Q         | Quit
Ctrl + R         | Sort Selected Lines Ascending
Ctrl + S         | Save
Ctrl + Shift + + | Move Current Tab Right
Ctrl + Shift + G | Find Previous
Ctrl + Shift + R | Sort Selected Lines Descending
Ctrl + Shift + S | Save As...
Ctrl + Shift + Z | Redo
Ctrl + Shift + _ | Move Current Tab Left
Ctrl + T         | New Tab
Ctrl + V         | Paste
Ctrl + W         | Close Tab
Ctrl + X         | Cut Selected
Ctrl + Y         | Clear Undo/Redo
Ctrl + Z         | Undo
Delete           | Delete
End              | Go to Bottom
Escape           | Hide Windows
Home             | Go to Top
Insert           | Toggle Overwrite

---

### Installation

1. `git clone https://github.com/iterami/TextEditor.gtk.git`
2. `sudo apt-get install libgtk-3-dev`
3. `git clone https://github.com/iterami/common.git` into the same directory as `TextEditor.gtk`.
4. Use your terminal to navigate to the `TextEditor.gtk` directory and `make` it.
5. Run the compiled `~/.iterami/texteditor`.

---

### Updating

1. Close `TextEditor.gtk`.
2. `git pull` the `common` and `TextEditor.gtk` repositories that you cloned.
3. Use your terminal to navigate to the `TextEditor.gtk` directory and `make` it.
4. Run the compiled `~/.iterami/texteditor`.

---

### Uninstallation

1. Use your terminal to navigate to the `TextEditor.gtk` directory.
2. `make clean`
3. Delete the cloned `TextEditor.gtk` directory.
4. Optionally remove `common` and optionally `sudo apt-get remove libgtk-3-dev`.
5. If you have no other iterami GTK repositories installed, you can delete the `~/.iterami/` directory.
