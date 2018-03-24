[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/c/gtk.c
-----------------------------------------------------------------------------------------------------

* [`GtkWidget * gtk_add_menuitem(GtkWidget *menu, gchar *label, GtkAccelGroup *accelgroup, guint key, GdkModifierType modifier)`](#)
* [`void gtk_begin_frameclock(GtkWidget *_glarea)`](#)
* [`struct nextvalue gtk_get_next_value(GtkTextBuffer *buffer, int line, int offset)`](#)
* [`void gtk_init_gtk(GtkApplication* app, gchar *title)`](#)

---

### `GtkWidget * gtk_add_menuitem(GtkWidget *menu, gchar *label, GtkAccelGroup *accelgroup, guint key, GdkModifierType modifier)`
* Adds a menuitem to a menu.

Arg        | Type            | Notes
-----------|-----------------|--------------------------------
menu       | GtkWidget*      | Menu to add menuitem to.
label      | gchar*          | Menuitem label.
accelgroup | GtkAccelGroup*  | All should use same accelgroup.
key        | guint           | Shortcut key.
modifier   | GdkModifierType | Shortcut modifier.

---

### `void gtk_begin_frameclock(GtkWidget *_glarea)`
* Beings a frameclock for a GtkGlArea.

Arg     | Type       | Notes
--------|------------|-------------------------------------
_glarea | GtkWidget* | The GtkGlArea the frameclock is for.

---

### `struct nextvalue gtk_get_next_value(GtkTextBuffer *buffer, int line, int offset)`
* Get the next value in a comma and `|` separated line in a GtkTextBuffer.

Arg    | Type           | Notes
-------|----------------|--------------------------------------------------
buffer | GtkTextBuffer* | The GtkTextBuffer that contains the line of text.
line   | int            | The line within the GtkTextBuffer.
offset | int            | The current offset within the line.

---

### `void gtk_init_gtk(GtkApplication* app, gchar *title)`
* Handles generic init code for all GTK projects.

Arg   | Type            | Notes
------|-----------------|--------------------------------------------------
app   | GtkApplication* |
title | gchar*          | The title of the created window.
