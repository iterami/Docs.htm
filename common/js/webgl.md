[iterami/common](https://github.com/iterami/Docs.htm/blob/gh-pages/common/README.md)/js/webgl.js
------------------------------------------------------------------------------------------------

* [Globals](#globals)
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
* [`webgl_character_set(args)`](#webgl_character_setargs)
* [`webgl_character_spawn(args)`](#webgl_character_spawnargs)
* [`webgl_clearcolor_set(args)`](#webgl_clearcolor_setargs)
* [`webgl_collision(args)`](#webgl_collisionargs)
* [`webgl_draw()`](#webgl_draw)
* [`webgl_draw_entity(entity)`](#webgl_draw_entityentity)
* [`webgl_drawloop()`](#webgl_drawloop)
* [`webgl_entity_create(args)`](#webgl_entity_createargs)
* [`webgl_entity_move(args)`](#webgl_entity_moveargs)
* [`webgl_entity_move_to(args)`](#webgl_entity_move_toargs)
* [`webgl_entity_radians(args)`](#webgl_entity_radiansargs)
* [`webgl_entity_todo(entity)`](#webgl_entity_todoentity)
* [`webgl_extension(args)`](#webgl_extensionargs)
* [`webgl_init(args)`](#webgl_initargs)
* [`webgl_init_character(args)`](#webgl_init_characterargs)
* [`webgl_item_equip(args)`](#webgl_item_equipargs)
* [`webgl_item_reset(args)`](#webgl_item_resetargs)
* [`webgl_item_trade(args)`](#webgl_item_tradeargs)
* [`webgl_json_export(args)`](#webgl_json_exportargs)
* [`webgl_level_init(args)`](#webgl_level_initargs)
* [`webgl_level_load(args)`](#webgl_level_loadargs)
* [`webgl_level_unload()`](#webgl_level_unload)
* [`webgl_logicloop()`](#webgl_logicloop)
* [`webgl_logicloop_handle_entity(entity)`](#webgl_logicloop_handle_entityentity)
* [`webgl_normals(args)`](#webgl_normalsargs)
* [`webgl_particles_create(args)`](#webgl_particles_createargs)
* [`webgl_path_move(args)`](#webgl_path_moveargs)
* [`webgl_path_use(args)`](#webgl_path_useargs)
* [`webgl_perspective()`](#webgl_perspective)
* [`webgl_pick_color(args)`](#webgl_pick_colorargs)
* [`webgl_prefab_cuboid(args)`](#webgl_prefab_cuboidargs)
* [`webgl_prefab_cuboid_tree(args)`](#webgl_prefab_cuboid_treeargs)
* [`webgl_prefab_lines_tree(args)`](#webgl_prefab_lines_treeargs)
* [`webgl_prefab_skybox(args)`](#webgl_prefab_skyboxargs)
* [`webgl_program_create(args)`](#webgl_program_createargs)
* [`webgl_resize()`](#webgl_resize)
* [`webgl_settings_init()`](#webgl_settings_init)
* [`webgl_shader_create(args)`](#webgl_shader_createargs)
* [`webgl_shader_recreate()`](#webgl_shader_recreate)
* [`webgl_shader_update()`](#webgl_shader_update)
* [`webgl_texture_set(args)`](#webgl_texture_setargs)
* [`webgl_vertexattribarray_set(args)`](#webgl_vertexattribarray_setargs)
* [`webgl_vertexcolorarray(args)`](#webgl_vertexcolorarrayargs)

---

### Globals

Global                   | Default | Type
-------------------------|---------|--------------------------------------
webgl_buffer             | 0       | placeholder, WebGL2RenderingContext
webgl_canvas             | 0       | placeholder, CanvasRenderingContext2D
webgl_character_count    | 0       | number
webgl_character_homebase | {}      | object
webgl_character_id       | '_me'   | string ID
webgl_character_trading  | ''      | string ID
webgl_characters         | {}      | object
webgl_diagonal           | 0       | number
webgl_extensions         | {}      | object
webgl_paths              | {}      | object
webgl_properties         | {}      | object
webgl_text               | {}      | object

---

### `webgl_attach(args)`
* Used to attach 1 entity to another entity and share a position with optional offset.

Arg      | Default  | Type
---------|----------|----------
entity   |          | string ID
offset-x | 0        | number
offset-y | 0        | number
offset-z | 0        | number
to       |          | string ID
type     | 'entity' | string

---

### `webgl_billboard(args)`
* Changes the rotation of an entity based on the rotation of the camera.

Arg       | Default            | Type
----------|--------------------|-----------------
axes      | ['y']              | array of strings
character | webgl_character_id | string ID
entity    |                    | string ID

---

### `webgl_buffer_set(args)`
* Returns the created buffers for a specific entity.

Arg         | Default | Type
------------|---------|-----------------
colorData   |         | array of numbers
normalData  |         | array of numbers
textureData |         | array of numbers
vertexData  |         | array of numbers

---

### `webgl_buffer_set_type(args)`
* Creates, binds, and returns a buffer.

Arg  | Default        | Type
-----|----------------|-------
data |                | array
type | 'Float32Array' | string

---

### `webgl_camera_handle()`
* Functon used as `mousemove` event by 3D projects.
* Handle first and third person cameras via the `camera-zoom-current` character property.

---

### `webgl_camera_rotate(args)`
* Handles rotating the camera and character.

Arg       | Default | Type
----------|---------|--------
camera    | true    | boolean
character | true    | boolean
set       | false   | boolean
x         | 0       | number
xlock     | true    | boolean
y         | 0       | number
z         | 0       | number

---

### `webgl_camera_zoom()`
* Functon called by bound `mousewheel` event within `mousebinds`.

---

### `webgl_character_damage(args)`
* Damages or fully kills a character, or optionally fully kills them. Removes attached entities, then either sets `health-current` to 0 or deletes entirely.

Arg       | Default            | Type
----------|--------------------|----------
character | webgl_character_id | string ID
damage    | 100                | number
delete    | false              | boolean
kill      | false              | boolean

---

### `webgl_character_home()`
* If the `webgl_character_id` character has a home, current level is unloaded and replaced with home.

---

### `webgl_character_jump(args)`
* Attempts to make a character jump.

Arg       | Default            | Type
----------|--------------------|----------
character | webgl_character_id | string ID

---

### `webgl_character_level(args)`
* If character doesn't exist yet, returns `-2`.
* If character exists, returns level. `-1` means character is just a camera.

Arg       | Default            | Type
----------|--------------------|----------
character | webgl_character_id | string ID

---

### `webgl_character_origin(args)`
* Resets the rotation and translation of a character back to the origin.

Arg       | Default            | Type
----------|--------------------|----------
character | webgl_character_id | string ID

---

### `webgl_character_set(args)`
* Changes the character controlled by the player.
* Makes sure character zoom is less than or equal to `webgl_properties['camera-zoom-max']`.
* Attaches skybox entities to the new character.

Arg | Default | Type
----|---------|----------
id  |         | string ID

---

### `webgl_character_spawn(args)`
* Resets the rotation and translation of a character back to current level spawn coordinates.

Arg       | Default            | Type
----------|--------------------|----------
character | webgl_character_id | string ID

---

### `webgl_clearcolor_set(args)`
* Stores and sets the clear color.

Arg   | Default | Type
------|---------|-------
blue  | 0       | number
green | 0       | number
red   | 0       | number

---

### `webgl_collision(args)`
* Checks for collisions based on entity normals and returns a boolean.

Arg       | Default            | Type
----------|--------------------|---------------------------
character | webgl_character_id | string ID
entity    | false              | boolean false or string ID
target    |                    | string ID

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

Arg      | Default | Type
---------|---------|--------------------
entities | []      | array of string IDs

---

### `webgl_entity_move(args)`
* Handles moving a character or entity within 3D space.
* Maintains y position unless specifically changed.

Arg        | Default            | Type
-----------|--------------------|---------------------------
character  | webgl_character_id | string ID
entity     | false              | boolean false or string ID
multiplier | 1                  | number
strafe     | false              | boolean
y          | false              | boolean false or number

---

### `webgl_entity_move_to(args)`
* Moves a character or entity to a specific point.

Arg       | Default            | Type
----------|--------------------|---------------------------
character | webgl_character_id | string ID
entity    | false              | boolean false or string ID
x         | 0                  | number
y         | 0                  | number
z         | 0                  | number

---

### `webgl_entity_radians(args)`
* Updates entity rotation radian values based on current degree rotation.

Arg       | Default | Type
----------|---------|---------------------------
character | false   | boolean false or string ID
entity    |         | string ID

---

### `webgl_entity_todo(entity)`
* Function called upon entity creation for optimization purposes.

---

### `webgl_extension(args)`
* Attempts to get a WebGL extension based on the supplied `id` arg.
* If the extension is available, it gets added to `window.webgl_extensions` using the `label` arg.
* Returns a boolean indicating if the extension is available or not.

Arg   | Default    | Type
------|------------|----------
id    |            | string ID
label | args['id'] | string ID

---

### `webgl_init(args)`
* Sets up WebGL.

Arg                  | Default   | Type
---------------------|-----------|--------
ambient-blue         | 1         | number
ambient-green        | 1         | number
ambient-red          | 1         | number
camera-zoom-max      | 50        | number
clearcolor-blue      | 0         | number
clearcolor-green     | 0         | number
clearcolor-red       | 0         | number
directional-blue     | 1         | number
directional-green    | 1         | number
directional-red      | 1         | number
directional-state    | true      | boolean
directional-vector   | '0, 1, 0' | string
fog-density          | .0001     | number
fog-state            | false     | boolean
gravity-acceleration | -.05      | number
gravity-axis         | 'y'       | string
gravity-max          | -2        | number
jump-movement        | 0         | number
multiplier-jump      | 1         | number
multiplier-speed     | 1         | number
paths                | {}        | object
spawn-rotate-x       | 0         | number
spawn-rotate-y       | 0         | number
spawn-rotate-z       | 0         | number
spawn-translate-x    | 0         | number
spawn-translate-y    | 0         | number
spawn-translate-z    | 0         | number

---

### `webgl_init_character(args)`
* Sets up the character and camera.

Arg                      | Default            | Type
-------------------------|--------------------|------------------------
camera-zoom              | 0                  | number
change                   | {}                 | object
collide-range-horizontal | 2                  | number
collide-range-vertical   | 3                  | number
collides                 | true               | boolean
entities                 | []                 | array of objects
experience               | 0                  | number
health-current           | 100                | number
health-max               | 100                | number
id                       | webgl_character_id | string ID
jump-height              | .6                 | number
level                    | -1                 | number >= -1
rotate-x                 | 0                  | number
rotate-y                 | 0                  | number
rotate-z                 | 0                  | number
speed                    | .2                 | number
talk                     | false              | boolean false or string
talk-range               | 15                 | number
trade                    | []                 | array
translate-x              | 0                  | number
translate-y              | 0                  | number
translate-z              | 0                  | number

---

### `webgl_item_equip(args)`
* Equips or unequips an item.

Arg       | Default            | Type
----------|--------------------|----------
character | webgl_character_id | string ID
equip     | true               | boolean
item      |                    | object

---

### `webgl_item_reset(args)`
* Resets an item in a characters inventory.

Arg             | Default            | Type
----------------|--------------------|----------
character       | webgl_character_id | string ID
entities        | []                 | array
item            |                    | object
spell           | false              | boolean
spellproperties | {}                 | object
stats           | {}                 | object

---

### `webgl_item_trade(args)`
* Attempts to trade any amount of one item from one character for any amount of one item from another character.

Arg           | Default | Type
--------------|---------|----------
character-0   |         | string ID
character-1   |         | string ID
item-0-amount |         | number
item-0-id     |         | number
item-1-amount |         | number
item-1-id     |         | number

---

### `webgl_json_export(args)`
* Outputs JSON for level and character to target element.

Arg       | Default    | Type
----------|------------|----------
character | true       | boolean
target    | 'exported' | string ID

---

### `webgl_level_init(args)`
* Creates a level from a parsed (https://github.com/iterami/Docs.htm/blob/gh-pages/common/guides/json.md#3d-json-level-format)[3D JSON Level Format] file.

Arg       | Default | Type
----------|---------|------------------------
character |         | number
json      | false   | boolean false or object

---

### `webgl_level_load(args)`
* Parses a (https://github.com/iterami/Docs.htm/blob/gh-pages/common/guides/json.md#3d-json-level-format)[3D JSON Level Format] file.

Arg       | Default | Type
----------|---------|---------------------------
cache     | false   | boolean false or string ID
character | 0       | number
json      | false   | boolean false or object


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
* Returns an array of calculated normals. Contains x, y, and z normals for each vertex.

Arg            | Default | Type
---------------|---------|-------
rotate-x       | 0       | number
rotate-y       | 0       | number
rotate-z       | 0       | number
vertices-count | 1       | number

---

### `webgl_particles_create(args)`
* Creates particle entities in the `particles` group.

Arg           | Default                                             | Type
--------------|-----------------------------------------------------|-----------------
collide-range | 1                                                   | number
collides      | true                                                | boolean
color         | [1, 1, 1, 1]                                        | array of numbers
count         | 1                                                   | number
gravity       | true                                                | boolean
lifespan      | 100                                                 | number
parent        | webgl_character_id                                  | string ID
rotate-x      | webgl_characters[webgl_character_id]['rotate-x']    | number
rotate-y      | webgl_characters[webgl_character_id]['rotate-y']    | number
rotate-z      | webgl_characters[webgl_character_id]['rotate-z']    | number
speed         | 1                                                   | number
translate-x   | webgl_characters[webgl_character_id]['translate-x'] | number
translate-y   | webgl_characters[webgl_character_id]['translate-y'] | number
translate-z   | webgl_characters[webgl_character_id]['translate-z'] | number

---

### `webgl_path_move(args)`
* Move an entity or a character along it's path, if it has one.

Arg    | Default | Type
-------|---------|--------------
entity |         | entity object

---

### `webgl_path_use(args)`
* Makes target entity use specific path.
* Disables entity path if no path specified.

Arg            | Default | Type
---------------|---------|---------------------------
entity         |         | entity object
path-direction | 1       | 1 or -1
path-end       | false   | boolean false or integer
path-id        | false   | boolean false or string ID
path-point     | 0       | integer

---

### `webgl_perspective()`
* Sets up the perspective matrix.

---

### `webgl_pick_color(args)`
* Returns a `Uint8Array(4)` containing the RGBA value of the specified pixel.

Arg | Default | Type
----|---------|-------
x   |         | number
y   |         | number

---

### `webgl_prefab_cuboid(args)`
* Creates a cuboid prefab with specified properties.
* Translation is the center of the cuboid.

Arg                  | Default       | Type
---------------------|---------------|----------------------------------
all-alpha            | false         | boolean false or number
all-collision        | true          | boolean
all-vertex-colors    | false         | boolean false or array of numbers
back-alpha           | 1             | number
back-collision       | false         | boolean
back-vertex-colors   | false         | boolean false or array of numbers
bottom-alpha         | 1             | number
bottom-collision     | false         | boolean
bottom-vertex-colors | false         | boolean false or array of numbers
exclude              | {}            | object of side booleans
front-alpha          | 1             | number
front-collision      | false         | boolean
front-vertex-colors  | false         | boolean false or array of numbers
groups               | []            | array of string IDs
left-alpha           | 1             | number
left-collision       | false         | boolean
left-vertex-colors   | false         | boolean false or array of numbers
prefix               | core_id_count | number or string
properties           | {}            | object
random-colors        | false         | boolean
right-alpha          | 1             | number
right-collision      | false         | boolean
right-vertex-colors  | false         | boolean false or array of numbers
size-x               | 1             | number
size-y               | 1             | number
size-z               | 1             | number
top-alpha            | 1             | number
top-collision        | false         | boolean
top-vertex-colors    | false         | boolean false or array of numbers
translate-x          | 0             | number
translate-y          | 0             | number
translate-z          | 0             | number

---

### `webgl_prefab_cuboid_tree(args)`
* Creates a cuboid tree prefab with the specified properties.
* Translation is the center of the bottom face of the trunk.

Arg                  | Default | Type
---------------------|---------|-----------------
collision-leaves     | true    | boolean
collision-trunk      | true    | boolean
leaves-size-x        | 10      | number
leaves-size-y        | 10      | number
leaves-size-z        | 10      | number
prefix               |         | number or string
translate-x          | 0       | number
translate-y          | 0       | number
translate-z          | 0       | number
trunk-size-x         | 2       | number
trunk-size-y         | 10      | number
trunk-size-z         | 2       | number
vertex-colors-leaves | array[] | array of numbers
vertex-colors-trunk  | array[] | array of numbers

---

### `webgl_prefab_lines_tree(args)`
* Creates a lines tree prefab with the specified properties.
* Translation is the center of the bottom of the trunk.

Arg                  | Default | Type
---------------------|---------|-----------------
prefix               |         | string
translate-x          | 0       | number
translate-y          | 0       | number
translate-z          | 0       | number
trunk-branch-max     | 4       | number
trunk-branch-min     | 0       | number
trunk-count-max      | 10      | number
trunk-count-min      | 1       | number
trunk-length         | 10      | number
trunk-width-max      | 2       | number
trunk-width-min      | 1       | number
vertex-colors-leaves | array[] | array of numbers
vertex-colors-trunk  | array[] | array of numbers

---

### `webgl_prefab_skybox(args)`
* Creates a skybox prefab around the `webgl_player_id` camera.

Arg                 | Default | Type
--------------------|---------|----------------------------------
bottom-color-bottom | false   | boolean false or array of numbers
bottom-color-top    | false   | boolean false or array of numbers
prefix              |         | string ID
random-colors       | false   | boolean
rotate-x            | 0       | number
rotate-y            | 0       | number
rotate-z            | 0       | number
sides               | 3       | number
size                | 99      | number
top-color-bottom    | false   | boolean false or array of numbers
top-color-top       | false   | boolean false or array of numbers

---

### `webgl_program_create(args)`
* Creates, links, uses, and returns a WebGL shader program.

Arg     | Default | Type
--------|---------|-------
shaders |         | object

---

### `webgl_resize()`
* Handles resizing the canvas to current window proportions.
* Resets canvas and WebGL properties that may have been lost upon resize, including resetting the perspective matrix.

---

### `webgl_settings_init()`
* Adds a `WebGL` settings tab to the `core-menu` group.
* Must be called directly after `core_repo_init()`.

---

### `webgl_shader_create(args)`
* Creates and compiles a shader to be used in a program, then returns it.

Arg    | Default | Type
-------|---------|-----------------------------------------------------------
source |         | string
type   |         | webgl_buffer.FRAGMENT_SHADER or webgl_buffer.VERTEX_SHADER

---

### `webgl_shader_recreate()`
* Deletes the current shader program, if one exists.
* Creates the fragment and vertex shaders.
* Sets up the shader program and uniform locations.

---

### `webgl_shader_update()`
* Updates the shader uniform values.

---

### `webgl_texture_set(args)`
* Creates a texture based on an image or URI.

Arg     | Default            | Type
--------|--------------------|----------
entity  |                    | string ID
texture | '_texture-default' | string ID

---

### `webgl_vertexattribarray_set(args)`

Arg        | Default | Type
-----------|---------|--------------
attributes |         | array
program    |         | WebGL program

---

### `webgl_vertexcolorarray(args)`
* Returns an array containing RGBA values normalized to between 0 and 1 for each vertex.

Arg           | Default | Type
--------------|---------|-----------------
random-colors | false   | boolean
rgbarray      | []      | array of numbers
vertexcount   | 4       | number
