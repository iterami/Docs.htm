[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/c/opengl.c
--------------------------------------------------------------------------------------------------------

* [`gboolean opengl_camera_free_keypress(GtkWidget *widget, GdkEventKey *event, gpointer data)`](#gboolean-opengl_camera_free_keypressgtkwidget-widget-gdkeventkey-event-gpointer-data)
* [`gboolean opengl_camera_free_keyrelease(GtkWidget *widget, GdkEventKey *event, gpointer data)`](#gboolean-opengl_camera_free_keyreleasegtkwidget-widget-gdkeventkey-event-gpointer-data)
* [`gboolean opengl_camera_free_mousemove(GtkWidget *widget, GdkEventMotion *event, gpointer data)`](#gboolean-opengl_camera_free_mousemovegtkwidget-widget-gdkeventmotion-event-gpointer-data)
* [`gboolean opengl_camera_free_mousepress(GtkWidget *widget, GdkEventButton *event, gpointer data)`](#gboolean-opengl_camera_free_mousepressgtkwidget-widget-gdkeventbutton-event-gpointer-data)
* [`gboolean opengl_camera_free_mouserelease(GtkWidget *widget, GdkEventButton *event, gpointer data)`](#gboolean-opengl_camera_free_mousereleasegtkwidget-widget-gdkeventbutton-event-gpointer-data)
* [`void opengl_camera_init_free(void)`](#void-opengl_camera_init_freevoid)
* [`void opengl_camera_move(float speed, gboolean strafe)`](#void-opengl_camera_movefloat-speed-gboolean-strafe)
* [`void opengl_camera_origin(void)`](#void-opengl_camera_originvoid)
* [`void opengl_camera_rotate(float x, float y, float z)`](#void-opengl_camera_rotatefloat-x-float-y-float-z)
* [`void opengl_camera_rotation_clamp(void)`](#void-opengl_camera_rotation_clampvoid)
* [`void opengl_camera_set_rotation(float x, float y, float z)`](#void-opengl_camera_set_rotationfloat-x-float-y-float-z)
* [`void opengl_camera_set_translation(float x, float y, float z)`](#void-opengl_camera_set_translationfloat-x-float-y-float-z)
* [`void opengl_camera_translate(float x, float y, float z)`](#void-opengl_camera_translatefloat-x-float-y-float-z)
* [`float opengl_degrees_to_radians(float degrees)`](#float-opengl_degrees_to_radiansfloat-degrees)
* [`void opengl_entity_create(GLfloat colors[], int id, float rotate_x, float rotate_y, float rotate_z, float translate_x, float translate_y, float translate_z, int vertex_count, int vertices_size, GLfloat vertices[])`](#void-opengl_entity_createglfloat-colors-int-id-float-rotate_x-float-rotate_y-float-rotate_z-float-translate_x-float-translate_y-float-translate_z-int-vertex_count-int-vertices_size-glfloat-vertices)
* [`void opengl_entity_draw(int id)`](#void-opengl_entity_drawint-id)
* [`void opengl_generate_all(void)`](#void-opengl_generate_allvoid)
* [`void opengl_load_level(char *filename)`](#void-opengl_load_levelchar-filename)
* [`void opengl_matrix_copy(float *from, float *to)`](#void-opengl_matrix_copyfloat-from-float-to)
* [`void opengl_matrix_identity(float *matrix)`](#void-opengl_matrix_identityfloat-matrix)
* [`void opengl_matrix_perspective(float *matrix, gint width, gint height)`](#void-opengl_matrix_perspectivefloat-matrix-gint-width-gint-height)
* [`void opengl_matrix_rotate(float *matrix, float x, float y, float z)`](#void-opengl_matrix_rotatefloat-matrix-float-x-float-y-float-z)
* [`void opengl_matrix_translate(float *matrix, float x, float y, float z)`](#void-opengl_matrix_translatefloat-matrix-float-x-float-y-float-z)
* [`float opengl_radians_to_degrees(float radians)`](#float-opengl_radians_to_degreesfloat-radians)
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

### `void opengl_camera_move(float speed, gboolean strafe)`
* Moves the camera forward at speed, optionally strafing.

Arg    | Type     | Notes
-------|----------|------
speed  | float    |
strafe | gboolean |

---

### `void opengl_camera_origin(void)`
* Returns the camera to the origin and resets its rotation.

---

### `void opengl_camera_rotate(float x, float y, float z)`
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

### `void opengl_camera_set_rotation(float x, float y, float z)`
* Sets the camera rotation to a specific amount of degrees.

Arg | Type  | Notes
----|-------|------
x   | float |
y   | float |
z   | float |

---

### `void opengl_camera_set_translation(float x, float y, float z)`
* Sets the camera translation to a specific location.

Arg | Type  | Notes
----|-------|------
x   | float |
y   | float |
z   | float |

---

### `void opengl_camera_translate(float x, float y, float z)`
* Translates the camera by a specific amount.

Arg | Type  | Notes
----|-------|------
x   | float |
y   | float |
z   | float |

---

### `float opengl_degrees_to_radians(float degrees)`
* Converts degrees to radians.

Arg     | Type  | Notes
--------|-------|------
degrees | float |

---

### `void opengl_entity_create(GLfloat colors[], int id, float rotate_x, float rotate_y, float rotate_z, float translate_x, float translate_y, float translate_z, int vertex_count, int vertices_size, GLfloat vertices[])`
* Creates an entity.

Arg           | Type    | Notes
--------------|---------|------
colors        | GLfloat |
id            | int     |
rotate_x      | float   |
rotate_y      | float   |
rotate_z      | float   |
translate_x   | float   |
translate_y   | float   |
translate_z   | float   |
vertex_count  | int     |
vertices_size | int     |
vertices      | GLfloat |

---

### `void opengl_entity_draw(int id)`
* Draw an entity that has already been created.

Arg | Type | Notes
----|------|------
id  | int  |

---

### `void opengl_generate_all(void)`
* Generates required arrays and buffers.

---

### `void opengl_load_level(char *filename)`
* Load a level from a custom level format file.

Arg  | Type  | Notes
-----|-------|------
char | char* |

---

### `void opengl_matrix_copy(float *from, float *to)`
* Copy the values in a matrix into another matrix.

Arg  | Type   | Notes
-----|--------|------
from | float* |
to   | float* |

---

### `void opengl_matrix_identity(float *matrix)`
* Reset values in a matrix to those of an identity matrix.

Arg    | Type   | Notes
-------|--------|------
matrix | float* |

---

### `void opengl_matrix_perspective(float *matrix, gint width, gint height)`
* Set up a perspective matrix based on window height and width.

Arg    | Type   | Notes
-------|--------|------
matrix | float* |
width  | gint   |
height | gint   |

---

### `void opengl_matrix_rotate(float *matrix, float x, float y, float z)`
* Rotate a matrix by a specific amount of degrees.

Arg    | Type   | Notes
-------|--------|------
matrix | float* |
x      | float  |
y      | float  |
z      | float  |

---

### `void opengl_matrix_translate(float *matrix, float x, float y, float z)`
* Translate a matrix by a specific amount.

Arg    | Type   | Notes
-------|--------|------
matrix | float* |
x      | float  |
y      | float  |
z      | float  |

---

### `float opengl_radians_to_degrees(float radians)`
* Converts radians to degrees.

Arg     | Type  | Notes
--------|-------|------
radians | float |

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
