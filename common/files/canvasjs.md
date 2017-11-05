[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/js/canvas.js
----------------------------------------------------------------------------------------------------------

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
* [`canvas_uri(args)`](#canvas_uriargs)

---

### `canvas_attach(args)`
* Used to attach one entity to another entity and share a position with optional offset.

Arg      | Required? | Notes
---------|-----------|-----------------------------------------
base     | YES       | ID of the entity being attached to.
entity   | YES       | ID of the entity that is being attached.
offset-x | NO        | Number of pixels of x-axis offset.
offset-y | NO        | Number of pixels of y-axis offset.

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

---

### `canvas_gradient(args)`
* Returns a gradient that can be used as a `fillStyle`.

---

### `canvas_init(args)`
* Sets up various aspects of projects that use full screen canvases.

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
* Resets canvas properties that are lost upon resize.

---

### `canvas_setmode(args)`
* Mode reset and mode content loading function.

---

### `canvas_setproperties(args)`
* Sets and stores canvas properties that can be found in `canvas_init()`.

---

### `canvas_uri(args)`
* Returns the buffer converted to a data URI.
