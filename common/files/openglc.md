[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/c/opengl.c
--------------------------------------------------------------------------------------------------------

### Includes
* [`"json.c"`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/jsonc.md)
* [`"math.c"`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/mathc.md)

---

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
* [`void opengl_entity_create(GLfloat colors[], gboolean draw, char *draw_type, int id, float rotate_x, float rotate_y, float rotate_z, float translate_x, float translate_y, float translate_z, int vertex_count, int vertices_size, GLfloat vertices[])`](#void-opengl_entity_createglfloat-colors-gboolean-draw-char-draw_type-int-id-float-rotate_x-float-rotate_y-float-rotate_z-float-translate_x-float-translate_y-float-translate_z-int-vertex_count-int-vertices_size-glfloat-vertices)
* [`void opengl_entity_draw(const int id)`](#void-opengl_entity_drawconst-int-id)
* [`void opengl_generate_all(void)`](#void-opengl_generate_allvoid)
* [`void opengl_load_level(const char *filename)`](#void-opengl_load_levelconst-char-filename)
* [`int opengl_string_to_primitive(char *string)`](#int-opengl_string_to_primitivechar-string)
* [`void realize(GtkGLArea *area)`](#void-realizegtkglarea-area)
* [`gboolean render(GtkGLArea *area, GdkGLContext *context)`](#gboolean-rendergtkglarea-area-gdkglcontext-context)

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

### `void opengl_entity_create(GLfloat colors[], gboolean draw, char *draw_type, int id, float rotate_x, float rotate_y, float rotate_z, float translate_x, float translate_y, float translate_z, int vertex_count, int vertices_size, GLfloat vertices[])`
* Creates an entity.

Arg           | Type     | Notes
--------------|----------|------
colors        | GLfloat  |
draw          | gboolean |
draw_type     | char*    |
id            | int      |
rotate_x      | float    |
rotate_y      | float    |
rotate_z      | float    |
translate_x   | float    |
translate_y   | float    |
translate_z   | float    |
vertex_count  | int      |
vertices_size | int      |
vertices      | GLfloat  |

---

### `void opengl_entity_draw(const int id)`
* Draw an entity that has already been created.

Arg | Type | Notes
----|------|------
id  | int  |

---

### `void opengl_generate_all(void)`
* Generates required arrays and buffers.

---

### `void opengl_load_level(const char *filename)`
* Load a level from a custom level format file.

Arg  | Type  | Notes
-----|-------|------
char | char* |

---

### `int opengl_string_to_primitive(char *string)`
* Return a defined constant for OpenGL primitive types based on the contents of a string.

Arg    | Type  | Notes
-------|-------|------
string | char* |

---

### `void realize(GtkGLArea *area)`
* Function called when a GtkGLArea is created.

Arg  | Type       | Notes
-----|------------|------
area | GtkGLArea* |

---

### `gboolean render(GtkGLArea *area, GdkGLContext *context)`
* Function called when a GtkGLArea is drawn.

Arg     | Type          | Notes
--------|---------------|------
area    | GtkGLArea*    |
context | GdkGLContext* |
