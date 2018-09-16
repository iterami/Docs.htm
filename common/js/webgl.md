[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/js/webgl.js
---------------------------------------------------------------------------------------------------------

* [`webgl_attach(args)`](#webgl_attachargs)
* [`webgl_billboard(args)`](#webgl_billboardargs)
* [`webgl_buffer_set(args)`](#webgl_buffer_setargs)
* [`webgl_buffer_set_type(args)`](#webgl_buffer_set_typeargs)
* [`webgl_camera_handle()`](#webgl_camera_handle)
* [`webgl_camera_rotate(args)`](#webgl_camera_rotateargs)
* [`webgl_camera_zoom()`](#webgl_camera_zoom)
* [`webgl_character_damage(args)`](#webgl_character_damageargs)
* [`webgl_character_home()`](#webgl_character_home)
* [`webgl_character_jump(args)`](#webgl_character_jumpargs)
* [`webgl_character_level(args)`](#webgl_character_levelargs)
* [`webgl_character_origin(args)`](#webgl_character_originargs)
* [`webgl_character_spawn(args)`](#webgl_character_spawnargs)
* [`webgl_character_trade(args)`](#webgl_character_tradeargs)
* [`webgl_clearcolor_set(args)`](#webgl_clearcolor_setargs)
* [`webgl_collision(args)`](#webgl_collisionargs)
* [`webgl_cuboid(args)`](#webgl_cuboidargs)
* [`webgl_cuboid_tree(args)`](#webgl_cuboid_treeargs)
* [`webgl_draw()`](#webgl_draw)
* [`webgl_draw_entity(entity)`](#webgl_draw_entityentity)
* [`webgl_drawloop()`](#webgl_drawloop)
* [`webgl_entity_create(args)`](#webgl_entity_createargs)
* [`webgl_entity_move(args)`](#webgl_entity_moveargs)
* [`webgl_entity_move_to(args)`](#webgl_entity_move_toargs)
* [`webgl_entity_radians(args)`](#webgl_entity_radiansargs)
* [`webgl_entity_todo(entity)`](#webgl_entity_todoentity)
* [`webgl_init(args)`](#webgl_initargs)
* [`webgl_init_character(args)`](#webgl_init_characterargs)
* [`webgl_item_equip(args)`](#webgl_item_equipargs)
* [`webgl_item_reset(args)`](#webgl_item_resetargs)
* [`webgl_json_export(args)`](#webgl_json_exportargs)
* [`webgl_level_init(args)`](#webgl_level_initargs)
* [`webgl_level_load(args)`](#webgl_level_loadargs)
* [`webgl_level_unload()`](#webgl_level_unload)
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
* [`webgl_vertexattribarray_set(args)`](#webgl_vertexattribarray_setargs)
* [`webgl_vertexcolorarray(args)`](#webgl_vertexcolorarrayargs)

---

### `webgl_attach(args)`
* Used to attach 1 entity to another entity and share a position with optional offset.

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

### `webgl_character_damage(args)`
* Damages or fully kills a character, or optionally fully kills them. Removes attached entities, then either sets `health-current` to 0 or deletes entirely.

Arg       | Required? | Notes
----------|-----------|------
character | false     |
damage    | false     |
delete    | false     |
kill      | false     |

---

### `webgl_character_home()`
* If the `webgl_character_id` character has a home, current level is unloaded and replaced with home.

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

### `webgl_character_trade(args)`
* Attempts to trade any amount of one item from one character for any amount of one item from another character.

Arg           | Required? | Notes
--------------|-----------|------
character-0   | true      |
character-1   | true      |
item-0-amount | true      |
item-0-id     | true      |
item-1-amount | true      |
item-1-id     | true      |

---

### `webgl_clearcolor_set(args)`
* Stores and sets the clear color.

Arg   | Required? | Notes
------|-----------|------
blue  | false     |
green | false     |
red   | false     |

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

### `webgl_cuboid(args)`
* Creates a cuboid with specified properties.
* Translation is the center of the cuboid.

Arg                  | Required? | Notes
---------------------|-----------|------
all-alpha            | false     |
all-collision        | false     |
all-vertex-colors    | false     |
back-alpha           | false     |
back-collision       | false     |
back-vertex-colors   | false     |
bottom-alpha         | false     |
bottom-collision     | false     |
bottom-vertex-colors | false     |
exclude              | false     |
front-alpha          | false     |
front-collision      | false     |
front-vertex-colors  | false     |
height               | false     |
left-alpha           | false     |
left-collision       | false     |
left-vertex-colors   | false     |
length               | false     |
prefix               | false     |
right-alpha          | false     |
right-collision      | false     |
right-vertex-colors  | false     |
top-alpha            | false     |
top-collision        | false     |
top-vertex-colors    | false     |
translate-x          | false     |
translate-y          | false     |
translate-z          | false     |
width                | false     |

---

### `webgl_cuboid_tree(args)`
* Creates a cuboid tree with the specified properties.
* Translation is the center of the bottom face of the trunk.

Arg                  | Required? | Notes
---------------------|-----------|------
collision-leaves     | false     |
collision-trunk      | false     |
height-leaves        | false     |
height-trunk         | false     |
length-leaves        | false     |
length-trunk         | false     |
prefix               | false     |
translate-x          | false     |
translate-y          | false     |
translate-z          | false     |
vertex-colors-leaves | false     |
vertex-colors-trunk  | false     |
width-leaves         | false     |
width-trunk          | false     |

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

### `webgl_entity_create(args)`
* Creates all entities from `entities` arg, then creates all character entities.

Arg      | Required? | Notes
---------|-----------|------
entities | false     |

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

Arg       | Required? | Notes
----------|-----------|------
character | true      |
entity    | true      |

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
ambient-state        | false     |
clearcolor-blue      | false     |
clearcolor-green     | false     |
clearcolor-red       | false     |
directional-blue     | false     |
directional-green    | false     |
directional-red      | false     |
directional-state    | false     |
directional-vector   | false     |
fog-density          | false     |
fog-state            | false     |
gravity-acceleration | false     |
gravity-axis         | false     |
gravity-max          | false     |
jump-movement        | false     |
multiplier-jump      | false     |
multiplier-speed     | false     |
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
rotate-x            | false     |
rotate-z            | false     |
rotate-z            | false     |
speed               | false     |
talk                | false     |
trade               | false     |
translate-x         | false     |
translate-z         | false     |
translate-z         | false     |

---

### `webgl_item_equip(args)`
* Equips or unequips an item.

Arg       | Required? | Notes
----------|-----------|------
character | false     |
equip     | false     |
item      | true      |

---

### `webgl_item_reset(args)`
* Resets an item in a characters inventory.

Arg       | Required? | Notes
----------|-----------|------
character | false     |
item      | true      |

---

### `webgl_json_export(args)`
* Outputs JSON for level and character to target element.

Arg       | Required? | Notes
----------|-----------|------
character | false     |
target    | false     |

---

### `webgl_level_init(args)`
* Creates a level from a parsed (https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/json.md#3d-json-level-format)[3D JSON Level Format] file.

Arg       | Required? | Notes
----------|-----------|------
character | true      |
json      | false     |

---

### `webgl_level_load(args)`
* Parses a (https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/json.md#3d-json-level-format)[3D JSON Level Format] file.

Arg       | Required? | Notes
----------|-----------|------
character | false     |
json      | false     |

---

### `webgl_level_unload()`
* Removes all characters that aren't `webgl_character_id` and all entities.

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

Arg     | Required? | Notes
--------|-----------|------
shaders | true      |

---

### `webgl_resize()`
* Handles resizing the canvas to current window proportions.
* Resets canvas and WebGL properties that are lost upon resize, including resetting the perspective matrix.

---

### `webgl_shader_create(args)`
* Creates and compiles a shader to be used in a program.

Arg    | Required? | Notes
-------|-----------|------
source | true      |
type   | true      |

---

### `webgl_shader_update()`
* Recreate the shaders with updated customization values.

---

### `webgl_texture_set(args)`
* Creates a texture based on an image or URI.

Arg     | Required? | Notes
--------|-----------|------
entity  | true      |
texture | false     |

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
