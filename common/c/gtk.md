[iterami/common](https://github.com/iterami/Docs.htm/blob/gh-pages/common/README.md)/c/gtk.c
--------------------------------------------------------------------------------------------

### Includes
* `<gtk/gtk.h>`

---

* [`GtkWidget * gtk_add_menuitem(GtkWidget *menu, const gchar *label, GtkAccelGroup *accelgroup, const guint key, GdkModifierType modifier)`](#gtkwidget--gtk_add_menuitemgtkwidget-menu-const-gchar-label-gtkaccelgroup-accelgroup-const-guint-key-gdkmodifiertype-modifier)
* [`void gtk_begin_frameclock(GtkWidget *_glarea)`](#void-gtk_begin_frameclockgtkwidget-_glarea)
* [`void gtk_init_gtk(GtkApplication* app, const gchar *title)`](#void-gtk_init_gtkgtkapplication-app-const-gchar-title)

---

### `GtkWidget * gtk_add_menuitem(GtkWidget *menu, const gchar *label, GtkAccelGroup *accelgroup, const guint key, GdkModifierType modifier)`
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

### `void gtk_init_gtk(GtkApplication* app, const gchar *title)`
* Handles generic init code for all GTK projects.

Arg   | Type            | Notes
------|-----------------|--------------------------------------------------
app   | GtkApplication* |
title | gchar*          | The title of the created window.
