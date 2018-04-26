[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/js/webgl.js
---------------------------------------------------------------------------------------------------------

* [`webgl_attach(args)`](#webgl_attachargs)
* [`webgl_billboard(args)`](#webgl_billboardargs)
* [`webgl_buffer_set(args)`](#webgl_buffer_setargs)
* [`webgl_buffer_set_type(args)`](#webgl_buffer_set_typeargs)
* [`webgl_camera_first()`](#webgl_camera_first)
* [`webgl_camera_move(args)`](#webgl_camera_moveargs)
* [`webgl_camera_rotate(args)`](#webgl_camera_rotateargs)
* [`webgl_clearcolor_set(args)`](#webgl_clearcolor_setargs)
* [`webgl_draw()`](#webgl_draw)
* [`webgl_drawloop()`](#webgl_drawloop)
* [`webgl_draw_entity(entity)`](#webgl_draw_entityentity)
* [`webgl_entity_todo(entity)`](#webgl_entity_todoentity)
* [`webgl_init(args)`](#webgl_initargs)
* [`webgl_logicloop()`](#webgl_logicloop)
* [`webgl_logicloop_handle_entity(entity)`](#webgl_logicloop_handle_entityentity)
* [`webgl_normals(args)`](#webgl_normalsargs)
* [`webgl_normals_collision(args)`](#webgl_normals_collisionargs)
* [`webgl_perspective()`](#webgl_perspective)
* [`webgl_program_create(args)`](#webgl_program_createargs)
* [`webgl_resize()`](#webgl_resize)
* [`webgl_setmode(args)`](#webgl_setmodeargs)
* [`webgl_setcanvasproperties(args)`](#webgl_setcanvaspropertiesargs)
* [`webgl_shader_create(args)`](#webgl_shader_createargs)
* [`webgl_shader_update()`](#webgl_shader_update)
* [`webgl_skybox(args)`](#webgl_skyboxargs)
* [`webgl_texture_set(args)`](#webgl_texture_setargs)
* [`webgl_texture_set_todo(args)`](#webgl_texture_set_todoargs)
* [`webgl_uri(args)`](#webgl_uriargs)
* [`webgl_vertexattribarray_set(args)`](#webgl_vertexattribarray_setargs)
* [`webgl_vertexcolorarray(args)`](#webgl_vertexcolorarrayargs)

---

### `webgl_attach(args)`
* Used to attach one entity to another entity and share a position with optional offset.
* Default entity is the camera.

Arg      | Required? | Notes
---------|-----------|-----------------------------------------
base     | YES       | ID of the entity being attached to.
entity   | NO        | ID of the entity that is being attached.
offset-x | NO        | Number of pixels of x-axis offset.
offset-y | NO        | Number of pixels of y-axis offset.
offset-z | NO        | Number of pixels of z-axis offset.

---

### `webgl_billboard(args)`
* Changes the rotation of an entity based on the rotation of the camera.

Arg    | Required? | Notes
-------|-----------|------
axes   | NO        |
entity | YES       |

---

### `webgl_buffer_set(args)`
* Returns the created buffers for a specific entity.

Arg         | Required? | Notes
------------|-----------|------
colorData   | YES       |
indexData   | YES       |
normalData  | YES       |
textureData | YES       |
vertexData  | YES       |

---

### `webgl_buffer_set_type(args)`
* Creates, binds, and returns a buffer.

Arg  | Required? | Notes
-----|-----------|------
data | YES       |
type | NO        |

---

### `webgl_camera_first()`
* Functon used as `mousemove` event by 3D projects that utilize a first-person camera.

---

### `webgl_camera_move(args)`
* Handles moving the camera in 3D space.

Arg    | Required? | Notes
-------|-----------|------
speed  | NO        |
strafe | NO        |
y      | NO        |

---

### `webgl_camera_rotate(args)`
* Handles rotating the camera.

Arg   | Required? | Notes
------|-----------|------
x     | NO        |
xlock | NO        |
y     | NO        |
z     | NO        |

---

### `webgl_clearcolor_set(args)`
* Stores and sets the clear color.

Arg   | Required? | Notes
------|-----------|------
color | YES       |

---

### `webgl_draw()`
* Handles canvas clearing and drawing the `buffer` onto the `canvas`.
* Sets up matricies, sets up the camera, and draws all created entities in specific order.
* Draws text, pointer, and other 2D canvas UI elements.

---

### `webgl_drawloop()`
* Calls `webgl_draw()` if the menu isn't open.
* Handles animation frames via `core_interval_animationFrame()` usage.

---

### `webgl_draw_entity(entity)`
* Positions and draws an entity.

---

### `webgl_entity_todo(entity)`
* Function called upon entity creation for optimization purposes.

---

### `webgl_init(args)`
* Sets up various aspects of projects that use full screen WebGL.

Arg                  | Required? | Notes
---------------------|-----------|------
ambient-blue         | NO        |
ambient-green        | NO        |
ambient-red          | NO        |
camera               | NO        |
clear-alpha          | NO        |
clear-blue           | NO        |
clear-green          | NO        |
clear_red            | NO        |
contextmenu          | NO        |
fog                  | NO        |
gravity-acceleration | NO        |
gravity-max          | NO        |
speed                | NO        |

---

### `webgl_logicloop()`
* Handles camera movement of various different styles.
* Calls repository-specific `logic()`.
* Updates attached entities.

---

### `webgl_logicloop_handle_entity(entity)`
* Function called by `webgl_logicloop()` to maintain various entity properties and interactions.

---

### `webgl_normals(args)`
* Returns calculated entity normals.

Arg        | Required? | Notes
-----------|-----------|------
x-rotation | NO        |
y-rotation | NO        |
z-rotation | NO        |

---

### `webgl_normals_collision(args)`
* Checks for collisions based on entity normals.

Arg       | Required? | Notes
----------|-----------|------
entity0id | YES       |
entity1id | YES       |

---

### `webgl_perspective()`
* Sets up the perspective matrix.

---

### `webgl_program_create(args)`
* Creates, links, and uses a WebGL shader program.

Arg        | Required? | Notes
-----------|-----------|------
id         | YES       |
shaderlist | YES       |

---

### `webgl_resize()`
* Handles resizing the canvas to current window proportions.
* Resets canvas and WebGL properties that are lost upon resize, including resetting the perspective matrix.

---

### `webgl_setmode(args)`
* Mode reset and mode content loading function.

Arg     | Required? | Notes
--------|-----------|------
mode    | NO        |
newgame | NO        |

---

### `webgl_setcanvasproperties(args)`
* Sets and stores canvas properties that can be found in `webgl_init()`.

Arg        | Required? | Notes
-----------|-----------|------
properties | YES       |

---

### `webgl_shader_create(args)`
* Creates and compiles a shader to be used in a program.

Arg    | Required? | Notes
-------|-----------|------
id     | YES       |
source | YES       |
type   | YES       |

---

### `webgl_shader_update()`
* Recreate the shaders with updated customization values.

---

### `webgl_skybox(args)`
* Creates a cube around the camera that is drawn first to simulate a sky.

Arg   | Required? | Notes
------|-----------|------
color | NO        |

---

### `webgl_texture_set(args)`
* Creates a texture based on an image or URI.

Arg      | Required? | Notes
---------|-----------|------
entityid | YES       |
image    | NO        |

---

### `webgl_texture_set_todo(args)`
* Used by `webgl_texture_set(args)` and not called directly.
* Binds a texture once the image `src` is finished loading.

---

### `webgl_uri(args)`
* Returns the buffer converted to a data URI.

Arg     | Required? | Notes
--------|-----------|------
id      | NO        |
quality | NO        |
type    | NO        |

---

### `webgl_vertexattribarray_set(args)`

Arg       | Required? | Notes
----------|-----------|------
attribute | YES       |
program   | YES       |

---

### `webgl_vertexcolorarray(args)`
* Converts RGB values to an array of values between 0 and 1 of the correct length based on vertex count.

Arg         | Required? | Notes
------------|-----------|------
rgbarray    | NO        |
vertexcount | NO        |
