[iterami/common](https://github.com/iterami/Docs.htm/blob/gh-pages/common/README.md)/js/canvas.js
-------------------------------------------------------------------------------------------------

* https://github.com/iterami/common/blob/gh-pages/js/canvas.js
* https://github.com/iterami/Docs.htm/blob/gh-pages/common/js/prefabs/canvas.md

---

* [Globals](#globals)
* [`canvas_attach(args)`](#canvas_attachargs)
* [`canvas_draw()`](#canvas_draw)
* [`canvas_drawloop()`](#canvas_drawloop)
* [`canvas_draw_path(args)`](#canvas_draw_pathargs)
* [`canvas_gradient(args)`](#canvas_gradientargs)
* [`canvas_init(args)`](#canvas_initargs)
* [`canvas_logicloop()`](#canvas_logicloop)
* [`canvas_logicloop_handle_entity(entity)`](#canvas_logicloop_handle_entityentity)
* [`canvas_resize()`](#canvas_resize)
* [`canvas_setmode(args)`](#canvas_setmodeargs)
* [`canvas_setproperties(args)`](#canvas_setpropertiesargs)

---

### Globals

Global            | Default | Type
------------------|---------|--------------------------------------
canvas_buffer     | 0       | placeholder, CanvasRenderingContext2D
canvas_canvas     | 0       | placeholder, CanvasRenderingContext2D
canvas_properties | {}      | object

---

### `canvas_attach(args)`
* Used to attach an entity to another entity and share a position with optional offset.

Arg      | Default | Type
---------|---------|----------
base     |         | string ID
entity   |         | string ID
offset-x | 0       | number
offset-y | 0       | number

---

### `canvas_draw()`
* Handles canvas clearing and drawing the `buffer` onto the `canvas`.
* Main drawing code is handled via repository-specific `draw_logic()` code.

---

### `canvas_drawloop()`
* Calls `canvas_draw()` if the menu isn't open.
* Handles animation frames via `core_interval_animationFrame()` usage.

---

### `canvas_draw_path(args)`
* Draws interesting things with various properties, such as polygons and spheres.

Arg        | Default                    | Type
-----------|----------------------------|--------
properties | {}                         | object
style      | canvas_properties['style'] | string
translate  | false                      | boolean
type       | 'lineTo'                   | string
vertices   |                            | array
x          | 0                          | number
y          | 0                          | number

---

### `canvas_gradient(args)`
* Returns a gradient that can be used as a `fillStyle`.

Arg    | Default | Type
-------|---------|-------
height | 0       | number
stops  |         | array
width  | 0       | number
x      | 0       | number
y      | 0       | number

---

### `canvas_init(args)`
* Sets up various aspects of projects that use full screen canvases.

Arg         | Default | Type
------------|---------|--------
contextmenu | true    | boolean

---

### `canvas_logicloop()`
* Calls repository-specific `logic()`.
* Updates attached entities.

---

### `canvas_logicloop_handle_entity(entity)`
* Function called by `canvas_logicloop()` for optimization purposes.

---

### `canvas_resize()`
* Handles resizing the canvas to current window proportions.
* Resets canvas properties that may have been lost upon resize.

---

### `canvas_setmode(args)`
* Mode reset and mode content loading function.

Arg     | Default | Type
--------|---------|--------
mode    | 0       | number
newgame | false   | boolean

---

### `canvas_setproperties(args)`
* Sets and stores canvas properties in `window.canvas_properties`.

Arg        | Default | Type
-----------|---------|-------
properties |         | object
