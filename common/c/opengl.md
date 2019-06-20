[iterami/common](https://github.com/iterami/Docs.htm/blob/gh-pages/common/README.md)/c/opengl.c
-----------------------------------------------------------------------------------------------

* https://github.com/iterami/common/blob/gh-pages/c/opengl.c
* https://github.com/iterami/common/blob/gh-pages/c/opengl.h

---

### Includes
* [`"gtk.c"`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/c/gtk.md)
* [`"json.c"`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/c/json.md)
* [`"math.c"`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/c/math.md)

---

* [`void opengl_billboard(const int id, gboolean x, gboolean y, gboolean z)`](#void-opengl_billboardconst-int-id-gboolean-x-gboolean-y-gboolean-z)
* [`gboolean opengl_camera_free_keypress(GtkWidget *widget, GdkEventKey *event, gpointer data)`](#gboolean-opengl_camera_free_keypressgtkwidget-widget-gdkeventkey-event-gpointer-data)
* [`gboolean opengl_camera_free_keyrelease(GtkWidget *widget, GdkEventKey *event, gpointer data)`](#gboolean-opengl_camera_free_keyreleasegtkwidget-widget-gdkeventkey-event-gpointer-data)
* [`gboolean opengl_camera_free_mousemove(GtkWidget *widget, GdkEventMotion *event, gpointer data)`](#gboolean-opengl_camera_free_mousemovegtkwidget-widget-gdkeventmotion-event-gpointer-data)
* [`gboolean opengl_camera_free_mousepress(GtkWidget *widget, GdkEventButton *event, gpointer data)`](#gboolean-opengl_camera_free_mousepressgtkwidget-widget-gdkeventbutton-event-gpointer-data)
* [`gboolean opengl_camera_free_mouserelease(GtkWidget *widget, GdkEventButton *event, gpointer data)`](#gboolean-opengl_camera_free_mousereleasegtkwidget-widget-gdkeventbutton-event-gpointer-data)
* [`void opengl_camera_init_free(void)`](#void-opengl_camera_init_freevoid)
* [`void opengl_camera_move(const float speed, const gboolean strafe)`](#void-opengl_camera_moveconst-float-speed-const-gboolean-strafe)
* [`void opengl_camera_origin(void)`](#void-opengl_camera_originvoid)
* [`void opengl_camera_rotate(const float x, const float y, const float z)`](#void-opengl_camera_rotateconst-float-x-const-float-y-const-float-z)
* [`void opengl_camera_rotation_clamp(void)`](#void-opengl_camera_rotation_clampvoid)
* [`void opengl_camera_set_rotation(const float x, const float y, const float z)`](#void-opengl_camera_set_rotationconst-float-x-const-float-y-const-float-z)
* [`void opengl_camera_set_translation(const float x, const float y, const float z)`](#void-opengl_camera_set_translationconst-float-x-const-float-y-const-float-z)
* [`void opengl_camera_translate(const float x, const float y, const float z)`](#void-opengl_camera_translateconst-float-x-const-float-y-const-float-z)
* [`void opengl_clearcolor_set(const float red, const float green, const float blue, const float alpha)`](#void-opengl_clearcolor_setconst-float-red-const-float-green-const-float-blue-const-float-alpha)
* [`void opengl_entity_bind(const int id)`](#void-opengl_entity_bindconst-int-id)
* [`void opengl_entity_draw(const int id)`](#void-opengl_entity_drawconst-int-id)
* [`void opengl_events_init(GtkWidget *_glarea)`](#void-opengl_events_initgtkwidget-_glarea)
* [`void opengl_generate_all(void)`](#void-opengl_generate_allvoid)
* [`void opengl_load_level(const gchar *filename)`](#void-opengl_load_levelconst-char-filename)
* [`void opengl_group_add(groupstruct *group, entitystruct *entity)`](#void-opengl_group_addgroupstruct-group-entitystruct-entity)
* [`void opengl_group_modify(groupstruct *group)`](#void-opengl_group_modifygroupstruct-group)
* [`void opengl_group_move(groupstruct *oldgroup, entitystruct *entity, groupstruct *newgroup)`](#void-opengl_group_movegroupstruct-oldgroup-entitystruct-entity-groupstruct-newgroup)
* [`void opengl_group_remove(groupstruct *group, entitystruct *entity)`](#void-opengl_group_removegroupstruct-group-entitystruct-entity)
* [`void opengl_group_remove_all(groupstruct *group)`](#void-opengl_group_remove_allgroupstruct-group)
* [`void opengl_groups_create(const gchar *new_groups[], const int count)`](#void-opengl_groups_createconst-gchar-new_groups-const-int-count)
* [`void opengl_logicloop(void)`](#void-opengl_logicloopvoid)
* [`void opengl_realize(GtkGLArea *area)`](#void-opengl_realizegtkglarea-area)
* [`gboolean opengl_render(GtkGLArea *area, GdkGLContext *context)`](#gboolean-opengl_rendergtkglarea-area-gdkglcontext-context)
* [`void opengl_resize(GtkGLArea *_glarea, gint width, gint height, gpointer data)`](void-opengl_resizegtkglarea-_glarea-gint-width-gint-height-gpointer-data)
* [`int opengl_string_to_primitive(const gchar *string)`](#int-opengl_string_to_primitiveconst-gchar-string)

---

### `void opengl_billboard(const int id, gboolean x, gboolean y, gboolean z)`
* Billboards an entity by making it face towards the camera on any of the 3 axes.

Arg | Type     | Notes
----|----------|------
id  | int      |
x   | gboolean |
y   | gboolean |
z   | gboolean |

---

### `gboolean opengl_camera_free_keypress(GtkWidget *widget, GdkEventKey *event, gpointer data)`
* Handles free movement camera keypress events.

Arg    | Type         | Notes
-------|--------------|------
widget | GtkWidget*   |
event  | GdkEventKey* |
data   | gpointer     |

---

### `gboolean opengl_camera_free_keyrelease(GtkWidget *widget, GdkEventKey *event, gpointer data)`
* Handles free movement camera keyrelease events.

Arg    | Type         | Notes
-------|--------------|------
widget | GtkWidget*   |
event  | GdkEventKey* |
data   | gpointer     |

---

### `gboolean opengl_camera_free_mousemove(GtkWidget *widget, GdkEventMotion *event, gpointer data)`
* Handles free movement camera mousemove events.

Arg    | Type            | Notes
-------|-----------------|------
widget | GtkWidget*      |
event  | GdkEventMotion* |
data   | gpointer        |

---

### `gboolean opengl_camera_free_mousepress(GtkWidget *widget, GdkEventButton *event, gpointer data)`
* Handles free movement camera mousepress events.

Arg    | Type            | Notes
-------|-----------------|------
widget | GtkWidget*      |
event  | GdkEventButton* |
data   | gpointer        |

---

### `gboolean opengl_camera_free_mouserelease(GtkWidget *widget, GdkEventButton *event, gpointer data)`
* Handles free movement camera mouserelease events.

Arg    | Type            | Notes
-------|-----------------|------
widget | GtkWidget*      |
event  | GdkEventButton* |
data   | gpointer        |

---

### `void opengl_camera_init_free(void)`
* Inits the free movement camera.

---

### `void opengl_camera_move(const float speed, const gboolean strafe)`
* Moves the camera forward at speed, optionally strafing.

Arg    | Type     | Notes
-------|----------|------
speed  | float    |
strafe | gboolean |

---

### `void opengl_camera_origin(void)`
* Returns the camera to the origin and resets its rotation.

---

### `void opengl_camera_rotate(const float x, const float y, const float z)`
* Rotates the camera by a specific amount of degrees.

Arg | Type  | Notes
----|-------|------
x   | float |
y   | float |
z   | float |

---

### `void opengl_camera_rotation_clamp(void)`
* Makes sure camera rotation is never less than 0 degrees or greater than 360 degrees.

---

### `void opengl_camera_set_rotation(const float x, const float y, const float z)`
* Sets the camera rotation to a specific amount of degrees.

Arg | Type  | Notes
----|-------|------
x   | float |
y   | float |
z   | float |

---

### `void opengl_camera_set_translation(const float x, const float y, const float z)`
* Sets the camera translation to a specific location.

Arg | Type  | Notes
----|-------|------
x   | float |
y   | float |
z   | float |

---

### `void opengl_camera_translate(const float x, const float y, const float z)`
* Translates the camera by a specific amount.

Arg | Type  | Notes
----|-------|------
x   | float |
y   | float |
z   | float |

---

### `void opengl_clearcolor_set(const float red, const float green, const float blue, const float alpha)`
* Sets the current clear color.

Arg   | Type  | Notes
------|-------|------
red   | float |
green | float |
blue  | float |
alpha | float |

---

### `void opengl_entity_bind(const int id)`
* Bind various OpenGL buffers for an entity.

Arg | Type | Notes
----|------|------
id  | int  |

---

### `void opengl_entity_draw(const int id)`
* Draw an entity that has already been created.

Arg | Type | Notes
----|------|------
id  | int  |

---

### `void opengl_events_init(GtkWidget *_glarea)`
* Sets up signals and events for the `_glarea`.

Arg     | Type       | Notes
--------|------------|------
_glarea | GtkWidget* |

---

### `void opengl_generate_all(void)`
* Generates required arrays and buffers.

---

### `void opengl_group_add(groupstruct *group, entitystruct *entity)`
* Adds an entity to a group.

Arg    | Type          | Notes
-------|---------------|------
group  | groupstruct*  |
entity | entitystruct* |

---

### `void opengl_group_modify(groupstruct *group)`
* Not yet functional.

Arg   | Type         | Notes
------|--------------|------
group | groupstruct* |

---

### `void opengl_group_move(groupstruct *oldgroup, entitystruct *entity, groupstruct *newgroup)`
* Moves an entity from 1 group to another group.

Arg      | Type         | Notes
---------|--------------|------
oldgroup | groupstruct* |
newgroup | groupstruct* |

---

### `void opengl_group_remove(groupstruct *group, entitystruct *entity)`
* Removes an entity from a group.

Arg    | Type          | Notes
-------|---------------|------
group  | groupstruct*  |
entity | entitystruct* |

---

### `void opengl_group_remove_all(groupstruct *group)`
* Removes all entities from a group.

Arg   | Type         | Notes
------|--------------|------
group | groupstruct* |

---

### `void opengl_groups_create(const gchar *new_groups[], const int count)`
* Mallocs and populates an array of empty `groupstruct` structs.

Arg        | Type   | Notes
-----------|--------|------
new_groups | gchar* |
count      | int    |

---

### `void opengl_load_level(const gchar *filename)`
* Load a level from a custom level format file.

Arg  | Type   | Notes
-----|--------|------
char | gchar* |

---

### `void opengl_logicloop(void)`
* Called by a `g_timeout_add()` within `realize()`.

---

### `void opengl_realize(GtkGLArea *area)`
* Function called when a GtkGLArea is created.

Arg  | Type       | Notes
-----|------------|------
area | GtkGLArea* |

---

### `gboolean opengl_render(GtkGLArea *area, GdkGLContext *context)`
* Function called when a GtkGLArea is drawn.

Arg     | Type          | Notes
--------|---------------|------
area    | GtkGLArea*    |
context | GdkGLContext* |

---

### `void opengl_resize(GtkGLArea *_glarea, gint width, gint height, gpointer data)`
* Function called when a GtkGLArea is resized.

Arg     | Type       | Notes
--------|------------|------
_glarea | GtkGLArea* |
width   | gint       |
height  | gint       |
data    | gpointer   |

---

### `int opengl_string_to_primitive(const gchar *string)`
* Return a defined constant for OpenGL primitive types based on the contents of a string.

Arg    | Type   | Notes
-------|--------|------
string | gchar* |
