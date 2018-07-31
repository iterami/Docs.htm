[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/js/webgl.js
---------------------------------------------------------------------------------------------------------

* [`webgl_attach(args)`](#webgl_attachargs)
* [`webgl_billboard(args)`](#webgl_billboardargs)
* [`webgl_buffer_set(args)`](#webgl_buffer_setargs)
* [`webgl_buffer_set_type(args)`](#webgl_buffer_set_typeargs)
* [`webgl_camera_handle()`](#webgl_camera_handle)
* [`webgl_camera_rotate(args)`](#webgl_camera_rotateargs)
* [`webgl_camera_zoom()`](#webgl_camera_zoom)
* [`webgl_character_jump(args)`](#webgl_character_jumpargs)
* [`webgl_character_level(args)`](#webgl_character_levelargs)
* [`webgl_character_origin(args)`](#webgl_character_originargs)
* [`webgl_character_spawn(args)`](#webgl_character_spawnargs)
* [`webgl_clearcolor_set(args)`](#webgl_clearcolor_setargs)
* [`webgl_collision(args)`](#webgl_collisionargs)
* [`webgl_draw()`](#webgl_draw)
* [`webgl_draw_entity(entity)`](#webgl_draw_entityentity)
* [`webgl_drawloop()`](#webgl_drawloop)
* [`webgl_entity_move(args)`](#webgl_entity_moveargs)
* [`webgl_entity_move_to(args)`](#webgl_entity_move_toargs)
* [`webgl_entity_radians(args)`](#webgl_entity_radiansargs)
* [`webgl_entity_todo(entity)`](#webgl_entity_todoentity)
* [`webgl_init(args)`](#webgl_initargs)
* [`webgl_init_character(args)`](#webgl_init_characterargs)
* [`webgl_json_export(args)`](#webgl_json_exportargs)
* [`webgl_load_level(args)`](#webgl_load_levelargs)
* [`webgl_load_level_init(args)`](#webgl_load_level_initargs)
* [`webgl_logicloop()`](#webgl_logicloop)
* [`webgl_logicloop_handle_entity(entity)`](#webgl_logicloop_handle_entityentity)
* [`webgl_normals(args)`](#webgl_normalsargs)
* [`webgl_particles_create(args)`](#webgl_particles_createargs)
* [`webgl_perspective()`](#webgl_perspective)
* [`webgl_pick_color(args)`](#webgl_pick_colorargs)
* [`webgl_program_create(args)`](#webgl_program_createargs)
* [`webgl_resize()`](#webgl_resize)
* [`webgl_shader_create(args)`](#webgl_shader_createargs)
* [`webgl_shader_update()`](#webgl_shader_update)
* [`webgl_texture_set(args)`](#webgl_texture_setargs)
* [`webgl_texture_set_todo(args)`](#webgl_texture_set_todoargs)
* [`webgl_vertexattribarray_set(args)`](#webgl_vertexattribarray_setargs)
* [`webgl_vertexcolorarray(args)`](#webgl_vertexcolorarrayargs)

---

### `webgl_attach(args)`
* Used to attach one entity to another entity and share a position with optional offset.

Arg      | Required? | Notes
---------|-----------|-----------------------------------------
entity   | true      | ID of the entity that is being attached.
offset-x | false     | Number of pixels of x-axis offset.
offset-y | false     | Number of pixels of y-axis offset.
offset-z | false     | Number of pixels of z-axis offset.
to       | true      | ID of the entity being attached to.
type     | false     |

---

### `webgl_billboard(args)`
* Changes the rotation of an entity based on the rotation of the camera.

Arg       | Required? | Notes
----------|-----------|------
axes      | false     |
character | false     |
entity    | true      |

---

### `webgl_buffer_set(args)`
* Returns the created buffers for a specific entity.

Arg         | Required? | Notes
------------|-----------|------
colorData   | true      |
normalData  | true      |
textureData | true      |
vertexData  | true      |

---

### `webgl_buffer_set_type(args)`
* Creates, binds, and returns a buffer.

Arg  | Required? | Notes
-----|-----------|------
data | true      |
type | false     |

---

### `webgl_camera_handle()`
* Functon used as `mousemove` event by 3D projects.
* Handle first and third person cameras via the `camera-zoom-current` character property.

---

### `webgl_camera_rotate(args)`
* Handles rotating the camera and character.

Arg          | Required? | Notes
-------------|-----------|------
camera       | false     |
character    | false     |
character-id | false     |
x            | false     |
xlock        | false     |
y            | false     |
z            | false     |

---

### `webgl_camera_zoom()`
* Functon called by bound `mousewheel` event within `mousebinds`.

---

### `webgl_character_jump(args)`
* Attempts to make a character jump.

Arg       | Required? | Notes
----------|-----------|------
character | false     |

---

### `webgl_character_level(args)`
* If character doesn't exist yet, returns `-2`.
* If character exists, returns level. `-1` means character is just a camera.

Arg       | Required? | Notes
----------|-----------|------
character | false     |

---

### `webgl_character_origin(args)`
* Resets the rotation and translation of a character back to the origin.

Arg       | Required? | Notes
----------|-----------|------
character | false     |

---

### `webgl_character_spawn(args)`
* Resets the rotation and translation of a character back to current level spawn coordinates.

Arg       | Required? | Notes
----------|-----------|------
character | false     |

---

### `webgl_clearcolor_set(args)`
* Stores and sets the clear color.

Arg   | Required? | Notes
------|-----------|------
alpha | true      |
blue  | true      |
green | true      |
red   | true      |

---

### `webgl_collision(args)`
* Checks for collisions based on entity normals.

Arg          | Required? | Notes
-------------|-----------|------
character    | false     |
character-id | false     |
entity       | false     |
target       | true      |

---

### `webgl_draw()`
* Handles canvas clearing and drawing the `buffer` onto the `canvas`.
* Sets up matricies, sets up the camera, and draws all created entities in specific order.
* Draws text, pointer, and other 2D canvas UI elements.

---

### `webgl_draw_entity(entity)`
* Positions and draws an entity.

---

### `webgl_drawloop()`
* Calls `webgl_draw()` if the menu isn't open.
* Handles animation frames via `core_interval_animationFrame()` usage.

---

### `webgl_entity_move(args)`
* Handles moving a character or entity within 3D space.
* Maintains y position unless specifically changed.

Arg        | Required? | Notes
-----------|-----------|------
character  | false     |
entity     | false     |
multiplier | false     |
strafe     | false     |
y          | false     |

---

### `webgl_entity_move_to(args)`
* Moves a character or entity to a specific point.

Arg       | Required? | Notes
----------|-----------|------
character | false     |
entity    | false     |
x         | false     |
y         | false     |
z         | false     |

---

### `webgl_entity_radians(args)`
* Updates entity rotation radian values based on current degree rotation.

Arg         | Required? | Notes
------------|-----------|------
entity      | true      |

---

### `webgl_entity_todo(entity)`
* Function called upon entity creation for optimization purposes.

---

### `webgl_init(args)`
* Sets up WebGL.

Arg                  | Required? | Notes
---------------------|-----------|------
ambient-blue         | false     |
ambient-green        | false     |
ambient-red          | false     |
clearcolor-alpha     | false     |
clearcolor-blue      | false     |
clearcolor-green     | false     |
clearcolor-red       | false     |
directional-blue     | false     |
directional-green    | false     |
directional-red      | false     |
directional-vector   | false     |
fog-density          | false     |
fog-state            | false     |
gravity-acceleration | false     |
gravity-max          | false     |
jump-multiplier      | false     |
spawn-rotate-x       | false     |
spawn-rotate-y       | false     |
spawn-rotate-z       | false     |
spawn-translate-x    | false     |
spawn-translate-y    | false     |
spawn-translate-z    | false     |

---

### `webgl_init_character(args)`
* Sets up the character and camera.

Arg                 | Required? | Notes
--------------------|-----------|------
camera-type         | false     |
camera-zoom-current | false     |
camera-zoom-max     | false     |
collide-range       | false     |
collides            | false     |
dx                  | false     |
dy                  | false     |
dz                  | false     |
entities            | false     |
experience          | false     |
health-current      | false     |
health-max          | false     |
id                  | false     |
jump-height         | false     |
level               | false     |
speed               | false     |

---

### `webgl_json_export(args)`
* Outputs JSON for level and character to target element.

Arg       | Required? | Notes
----------|-----------|------
character | false     |
target    | false     |

---

### `webgl_load_level(args)`
* Figures out how to parses a (https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/json.md#3d-json-level-format)[3D JSON Level Format] file.

Arg       | Required? | Notes
----------|-----------|------
character | false     |
json      | false     |

---

### `webgl_load_level_init(args)`
* Loads a parsed (https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/json.md#3d-json-level-format)[3D JSON Level Format] file.

Arg       | Required? | Notes
----------|-----------|------
character | true      |
json      | false     |

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
* Returns calculated normals based on rotation.

Arg            | Required? | Notes
---------------|-----------|------
rotate-x       | false     |
rotate-y       | false     |
rotate-z       | false     |
vertices-count | false     |

---

### `webgl_particles_create(args)`
* Creates particle entities in the `particles` group.

Arg           | Required? | Notes
--------------|-----------|------
collide-range | false     |
collides      | false     |
color         | false     |
count         | false     |
gravity       | false     |
lifespan      | false     |
rotate-x      | false     |
rotate-y      | false     |
rotate-z      | false     |
speed         | false     |
translate-x   | false     |
translate-y   | false     |
translate-z   | false     |

---

### `webgl_perspective()`
* Sets up the perspective matrix.

---

### `webgl_pick_color(args)`
* Returns the RGBA value of the specified pixel.

Arg | Required? | Notes
----|-----------|------
x   | true      |
y   | true      |

---

### `webgl_program_create(args)`
* Creates, links, and uses a WebGL shader program.

Arg        | Required? | Notes
-----------|-----------|------
id         | true      |
shaderlist | true      |

---

### `webgl_resize()`
* Handles resizing the canvas to current window proportions.
* Resets canvas and WebGL properties that are lost upon resize, including resetting the perspective matrix.

---

### `webgl_shader_create(args)`
* Creates and compiles a shader to be used in a program.

Arg    | Required? | Notes
-------|-----------|------
id     | true      |
source | true      |
type   | true      |

---

### `webgl_shader_update()`
* Recreate the shaders with updated customization values.

---

### `webgl_texture_set(args)`
* Creates a texture based on an image or URI.

Arg      | Required? | Notes
---------|-----------|------
entityid | true      |
image    | false     |

---

### `webgl_texture_set_todo(args)`
* Used by `webgl_texture_set(args)` and not called directly.
* Binds a texture once the image `src` is finished loading.

---

### `webgl_vertexattribarray_set(args)`

Arg        | Required? | Notes
-----------|-----------|------
attributes | true      |
program    | true      |

---

### `webgl_vertexcolorarray(args)`
* Converts RGB values to an array of values between 0 and 1 of the correct length based on vertex count.

Arg         | Required? | Notes
------------|-----------|------
rgbarray    | false     |
vertexcount | false     |
