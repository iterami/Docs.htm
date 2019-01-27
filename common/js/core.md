[iterami/common](https://github.com/iterami/Docs.htm/blob/gh-pages/common/README.md)/js/core.js
-----------------------------------------------------------------------------------------------

* [Globals](#globals)
* [`core_ajax(args)`](#core_ajaxargs)
* [`core_args(args)`](#core_argsargs)
* [`core_audio_create(args)`](#core_audio_createargs)
* [`core_audio_node_create(args)`](#core_audio_node_createargs)
* [`core_audio_onended(args)`](#core_audio_onendedargs)
* [`core_audio_source_create(args)`](#core_audio_source_createargs)
* [`core_audio_start(args)`](#core_audio_startargs)
* [`core_audio_stop_all(args)`](#core_audio_stop_allargs)
* [`core_audio_stop(args)`](#core_audio_stopargs)
* [`core_call(args)`](#core_callargs)
* [`core_clamp(args)`](#core_clampargs)
* [`core_date_to_timestamp(args)`](#core_date_to_timestampargs)
* [`core_degrees_to_radians(args)`](#core_degrees_to_radiansargs)
* [`core_distance(args)`](#core_distanceargs)
* [`core_entity_create(args)`](#core_entity_createargs)
* [`core_entity_handle_default(args)`](#core_entity_handle_defaultargs)
* [`core_entity_remove_all(args)`](#core_entity_remove_allargs)
* [`core_entity_remove(args)`](#core_entity_removeargs)
* [`core_entity_set(args)`](#core_entity_setargs)
* [`core_escape()`](#core_escape)
* [`core_events_bind(args)`](#core_events_bindargs)
* [`core_events_keyinfo(event)`](#core_events_keyinfoevent)
* [`core_events_rebind(args)`](#core_events_rebindargs)
* [`core_events_todoloop()`](#core_events_todoloop)
* [`core_file(args)`](#core_fileargs)
* [`core_fixed_length_line(args)`](#core_fixed_length_lineargs)
* [`core_group_add(args)`](#core_group_addargs)
* [`core_group_create(args)`](#core_group_createargs)
* [`core_group_modify(args)`](#core_group_modifyargs)
* [`core_group_move(args)`](#core_group_moveargs)
* [`core_group_remove_all(args)`](#core_group_remove_allargs)
* [`core_group_remove(args)`](#core_group_removeargs)
* [`core_handle_beforeunload(event)`](#core_handle_beforeunloadevent)
* [`core_handle_blur(event)`](#core_handle_blurevent)
* [`core_handle_contextmenu(event)`](#core_handle_contextmenuevent)
* [`core_handle_defaults(args)`](#core_handle_defaultsargs)
* [`core_handle_event(args)`](#core_handle_eventargs)
* [`core_handle_gamepadconnected(event)`](#core_handle_gamepadconnectedevent)
* [`core_handle_gamepaddisconnected(event)`](#core_handle_gamepaddisconnectedevent)
* [`core_handle_keydown(event)`](#core_handle_keydownevent)
* [`core_handle_keyup(event)`](#core_handle_keyupevent)
* [`core_handle_mousedown(event)`](#core_handle_mousedownevent)
* [`core_handle_mousemove(event)`](#core_handle_mousemoveevent)
* [`core_handle_mouseup(event)`](#core_handle_mouseupevent)
* [`core_handle_mousewheel(event)`](#core_handle_mousewheelevent)
* [`core_handle_pointerlockchange(event)`](#core_handle_pointerlockchangeevent)
* [`core_hex_to_rgb(args)`](#core_hex_to_rgbargs)
* [`core_html_format(args)`](#core_html_formatargs)
* [`core_html_modify(args)`](#core_html_modifyargs)
* [`core_html(args)`](#core_htmlargs)
* [`core_image(args)`](#core_imageargs)
* [`core_init()`](#core_init)
* [`core_interval_animationFrame(args)`](#core_interval_animationframeargs)
* [`core_interval_modify(args)`](#core_interval_modifyargs)
* [`core_interval_pause_all()`](#core_interval_pause_all)
* [`core_interval_pause(args)`](#core_interval_pauseargs)
* [`core_interval_remove_all()`](#core_interval_remove_all)
* [`core_interval_remove(args)`](#core_interval_removeargs)
* [`core_interval_resume_all()`](#core_interval_resume_all)
* [`core_interval_resume(args)`](#core_interval_resumeargs)
* [`core_keys_updatebinds(args)`](#core_keys_updatebindsargs)
* [`core_matrix_clone(args)`](#core_matrix_cloneargs)
* [`core_matrix_copy(args)`](#core_matrix_copyargs)
* [`core_matrix_create()`](#core_matrix_create)
* [`core_matrix_delete(args)`](#core_matrix_deleteargs)
* [`core_matrix_identity(args)`](#core_matrix_identityargs)
* [`core_matrix_rotate(args)`](#core_matrix_rotateargs)
* [`core_matrix_round(args)`](#core_matrix_roundargs)
* [`core_matrix_translate(args)`](#core_matrix_translateargs)
* [`core_mouse_updatebinds(args)`](#core_mouse_updatebindsargs)
* [`core_move_2d_diagonal(args)`](#core_move_2d_diagonalargs)
* [`core_move_2d(args)`](#core_move_2dargs)
* [`core_move_3d(args)`](#core_move_3dargs)
* [`core_number_format(args)`](#core_number_formatargs)
* [`core_point_angle(args)`](#core_point_angleargs)
* [`core_radians_to_degrees(args)`](#core_radians_to_degreesargs)
* [`core_random_boolean(args)`](#core_random_booleanargs)
* [`core_random_hex(args)`](#core_random_hexargs)
* [`core_random_integer(args)`](#core_random_integerargs)
* [`core_random_key(args)`](#core_random_keyargs)
* [`core_random_number(args)`](#core_random_numberargs)
* [`core_random_rgb()`](#core_random_rgb)
* [`core_random_string(args)`](#core_random_stringargs)
* [`core_rectangle_overlap(args)`](#core_rectangle_overlapargs)
* [`core_replace_multiple`](#core_replace_multipleargs)
* [`core_repo_init(args)`](#core_repo_initargs)
* [`core_requestpointerlock(args)`](#core_requestpointerlockargs)
* [`core_round(args)`](#core_roundargs)
* [`core_sort_custom(args)`](#core_sort_customargs)
* [`core_sort_numbers(args)`](#core_sort_numbersargs)
* [`core_sort_property(args)`](#core_sort_propertyargs)
* [`core_sort_random(args)`](#core_sort_randomargs)
* [`core_sort_strings(args)`](#core_sort_stringsargs)
* [`core_storage_add(args)`](#core_storage_addargs)
* [`core_storage_element_property(args)`](#core_storage_element_propertyargs)
* [`core_storage_reset()`](#core_storage_reset)
* [`core_storage_save()`](#core_storage_save)
* [`core_storage_update()`](#core_storage_update)
* [`core_tab_create(args)`](#core_tab_createargs)
* [`core_tab_switch(args)`](#core_tab_switchargs)
* [`core_test_function(args)`](#core_test_functionargs)
* [`core_time_diff(args)`](#core_time_diffargs)
* [`core_time_format(args)`](#core_time_formatargs)
* [`core_time_from_inputs()`](#core_time_from_inputs)
* [`core_time_timestamp_to_date(args)`](#core_timestamp_to_dateargs)
* [`core_time_two_digits(args)`](#core_two_digitsargs)
* [`core_type(args)`](#core_typeargs)
* [`core_type_convert(args)`](#core_type_convertargs)
* [`core_ui_update(args)`](#core_ui_updateargs)
* [`core_uri(args)`](#core_uriargs)

---

### Globals

Global                    | Default         | Type
--------------------------|-----------------|----------------------
core_audio                | {}              | object
core_audio_context        | false           | boolean, AudioContext
core_audio_sources        | {}              | object
core_degree               | Math.PI / 180   | number
core_entities             | {}              | object
core_entity_info          | {}              | object
core_entity_types_defualt | []              | array
core_events               | {}              | object
core_gamepads             | {}              | object
core_groups               | {'_length': {}} | object
core_id_count             | 0               | number
core_images               | {}              | object
core_intervals            | {}              | object
core_key_rebinds          | {}              | object
core_keys                 | {}              | object
core_matrices             | {}              | object
core_menu_block_events    | true            | boolean
core_menu_open            | false           | boolean
core_mode                 | 0               | number
core_mouse                | {}              | object
core_radian               | 180 / Math.PI   | number
core_repo_title           | ''              | string
core_storage_data         | {}              | object
core_storage_info         | {}              | object
core_tabs                 | {}              | object
core_tau                  | Math.PI * 2     | number
core_ui_values            | {}              | object

---

### `core_ajax(args)`
* Initiates and handles AJAX requests.

Arg        | Default | Type
-----------|---------|---------
data       | null    |
readyState | 4       | number
status     | 200     | number
todo       |         | function
type       | 'GET'   | string
url        |         | string

---

### `core_args(args)`
* Creates an `args` object with provided properties, populates it with additional optional default properties, and returns it.

Arg      | Default | Type
---------|---------|-------
args     | {}      | object
defaults | {}      | object

---

### `core_audio_create(args)`

Arg    | Default | Type
-------|---------|-------
audios |         | object

---

### `core_audio_node_create(args)`

Arg        | Default                 | Type
-----------|-------------------------|---------------------------
id         | false                   | boolean false or string ID
properties | {'label': 'Oscillator'} | object

---

### `core_audio_onended(args)`

Arg | Default | Type
----|---------|----------
id  |         | string ID

---

### `core_audio_source_create(args)`

Arg | Default | Type
----|---------|----------
id  |         | string ID

---

### `core_audio_start(args)`

Arg | Default | Type
----|---------|----------
id  |         | string ID

---

### `core_audio_stop(args)`

Arg  | Default | Type
-----|---------|-----------------
id   |         | string ID
when | void 0  | void 0 or number

---

### `core_audio_stop_all(args)`

Arg  | Default | Type
-----|---------|-----------------
when | void 0  | void 0 or number

---

### `core_call(args)`
* Calls a function if it exists. Used to prevent errors caused by undefined functions.

Arg  | Default | Type
-----|---------|-----------------
args | void 0  | void 0 or object
todo |         | function

---

### `core_clamp(args)`
* Clamps a number between two values and returns it.
* If out of bounds, either sets it to closest bound or loops to opposite bound as many times as needed.

Arg      | Default                       | Type
---------|-------------------------------|--------
decimals | core_storage_data['decimals'] | number
max      |                               | number
min      |                               | number
value    |                               | number
wrap     | false                         | boolean

---

### `core_date_to_timestamp(args)`
* Converts a date object into a timestamp and returns it.

Arg  | Default | Type
-----|---------|------------------------
date | false   | boolean false or object

---

### `core_degrees_to_radians(args)`
* Converts a number of degrees to radians and returns it.

Arg      | Default                       | Type
---------|-------------------------------|-------
decimals | core_storage_data['decimals'] | number
degrees  |                               | number

---

### `core_distance(args)`
* Returns the distance between 2 points that can be 3D, 2D, or 1D.

Arg      | Default                       | Type
---------|-------------------------------|-------
decimals | core_storage_data['decimals'] | number
x0       | 0                             | number
x1       | 0                             | number
y0       | 0                             | number
y1       | 0                             | number
z0       | 0                             | number
z1       | 0                             | number

---

### `core_entity_create(args)`
* Creates an entity, provides it with additional properties based on entity defaults and functions, and returns its ID.
* Not including `id` makes entity use `core_id_count` which starts at 0 and goes up by 1 every time an entity is created.

Arg        | Default       | Type
-----------|---------------|-----------------
id         | core_id_count | string ID
properties | {}            | object
types      | []            | array of strings

---

### `core_entity_handle_default(args)`
* Makes sure entity property defaults and groups are handled properly.

Arg  | Default | Type
-----|---------|----------
id   |         | string ID
type |         | string ID

---

### `core_entity_remove(args)`
* Deletes an entity and removes it from groups.

Arg          | Default | Type
-------------|---------|--------------------
delete-empty | false   | boolean
entities     |         | array of string IDs

---

### `core_entity_remove_all(args)`
* Deletes all entities within a specific group.

Arg          | Default | Type
-------------|---------|---------------------------
delete-empty | false   | boolean
group        | false   | boolean false or string ID

---

### `core_entity_set(args)`
* Creates a new entity type that can then be created.

Arg        | Default      | Type
-----------|--------------|--------------------
default    | false        | boolean
groups     | []           | array of string IDs
properties | {}           | object
todo       | function(){} | function
type       |              | string ID

---

### `core_escape()`
* Pressing escape opens or closes the menu.
* Pauses or resumes intervals depending on state.
* Calls optional repository-specific [`repo_escape()`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/js/main.md#repo_escape) function.

---

### `core_events_bind(args)`
* Updates bindings to various events, including optional clearing.

Arg          | Default | Type
-------------|---------|--------------------------
beforeunload | false   | boolean false or function
clearkeys    | false   | boolean
clearmouse   | false   | boolean
elements     | false   | boolean false or object
keybinds     | false   | boolean false or object
mousebinds   | false   | boolean false or object

---

### `core_events_keyinfo(event)`
* Returns keycode and character of fired keyboard event.

---

### `core_events_rebind(args)`

---

### `core_events_todoloop()`
* Function that runs looping keyboard and mouse event todos.

---

### `core_file(args)`
* Uses `FileReader` to read a file of any type, then passes the event to `todo()`.

Arg  | Default         | Type
-----|-----------------|---------
file |                 | string
todo |                 | function
type | 'readAsDataURL' | string

---

### `core_fixed_length_line(args)`
* Returns the endpoint of a line between 2 3D, 2D, or 1D points, where the line has a fixed length.

Arg      | Default                       | Type
---------|-------------------------------|-------
decimals | core_storage_data['decimals'] | number
length   | 1                             | number
x0       | 0                             | number
x1       | 0                             | number
y0       | 0                             | number
y1       | 0                             | number
z0       | 0                             | number
z1       | 0                             | number

---

### `core_group_add(args)`
* Adds entities to a group and calls `core_group_create()` if it does not exist.

Arg      | Default | Type
---------|---------|--------------------
entities |         | array of string IDs
group    |         | string

---

### `core_group_create(args)`
* Creates empty groups and sets up length handling.

Arg | Default | Type
----|---------|-----------------
ids |         | array of strings

---

### `core_group_modify(args)`
* Runs code that affects every entity within a group.

Arg     | Default | Type
--------|---------|--------------------------
groups  |         | array of string IDs
pretodo | false   | boolean false or function
todo    |         | function

---

### `core_group_move(args)`
* Removes an entity from a group and adds it to a different group.

Arg      | Default | Type
---------|---------|--------------------
entities |         | array of string IDs
from     |         | string ID
to       |         | string ID

---

### `core_group_remove(args)`
* Remove entities from 1 specific group.

Arg          | Default | Type
-------------|---------|--------------------
delete-empty | false   | boolean
entities     |         | array of string IDs
group        |         | string

---

### `core_group_remove_all(args)`
* Removes entities fromm all groups.

Arg          | Default | Type
-------------|---------|--------------------
delete-empty | false   | boolean
entities     |         | array of string IDs

---

### `core_handle_beforeunload(event)`
* If the result of the `beforeunload` event returns a string, this function returns it.

---

### `core_handle_blur(event)`

---

### `core_handle_contextmenu(event)`
* If the result of the `contextmenu` event doesn't return anything, this function returns `false`.

---

### `core_handle_defaults(args)`
* Recursively applies default values to `var` properties and subproperties.
* If `var` isn't an object, then this function returns `var`.

Arg     | Default | Type
--------|---------|-------
default | {}      | object
var     | {}      | any

---

### `core_handle_event(args)`

Arg    | Default | Type
-------|---------|-------------------
event  |         | event
key    |         | string
object |         | object
state  | void 0  |
todo   | void 0  | void 0 or function

---

### `core_handle_gamepadconnected(event)`

---

### `core_handle_gamepaddisconnected(event)`

---

### `core_handle_keydown(event)`

---

### `core_handle_keyup(event)`

---

### `core_handle_mousedown(event)`

---

### `core_handle_mousemove(event)`

---

### `core_handle_mouseup(event)`

---

### `core_handle_mousewheel(event)`

---

### `core_handle_pointerlockchange(event)`

---

### `core_hex_to_rgb(args)`
* Converts a hexadecimal string of length 6 to red, green, and blue, and returns it.

Arg | Default | Type
----|---------|-------
hex |         | string

---

### `core_html(args)`
* Returns an HTML element and optionally adds it to a parent.

Arg        | Default | Type
-----------|---------|---------------------------
parent     | false   | boolean false or string ID
properties | {}      | object
type       | 'div'   | string

---

### `core_html_format(args)`
* Replaces characters in a string that may cause HTML errors and returns it.

Arg    | Default | Type
-------|---------|-------
string |         | string

---

### `core_html_modify(args)`
* Assigns properties to an HTML element if it exists.

Arg        | Default | Type
-----------|---------|-------
id         |         | string
properties |         | object

---

### `core_image(args)`
* Creates an image, begins asynchronous loading, and returns it.

Arg  | Default      | Type
-----|--------------|---------
id   |              | string
src  |              | string
todo | function(){} | function

---

### `core_init()`
* Sets up universal project components, such as the core menu and events.

---

### `core_interval_animationFrame(args)`
* Continues running animation frames.

Arg | Default | Type
----|---------|-------
id  |         | string

---

### `core_interval_modify(args)`
* Creates or modifies an animation frame, interval, or timeout.

Arg            | Default         | Type
---------------|-----------------|--------
animationFrame | false           | boolean
clear          | 'clearInterval' | string
id             |                 | string
interval       | 25              | number
paused         | false           | boolean
set            | 'setInterval'   | string

---

### `core_interval_pause(args)`
* Pauses an animation frame, interval, or timeout.

Arg | Default | Type
----|---------|-------
id  |         | string

---

### `core_interval_pause_all()`
* Pauses all animation frames, intervals, and timeouts.

---

### `core_interval_remove(args)`
* Pauses and removes an animation frame, interval, or timeout.

Arg | Default | Type
----|---------|-------
id  |         | string

---

### `core_interval_remove_all()`
* Pauses and removes all animation frames, intervals, and timeouts.

---

### `core_interval_resume(args)`
* Resumes an animation frame, interval, or timeout.

Arg | Default | Type
----|---------|-------
id  |         | string

---

### `core_interval_resume_all()`
* Reumes all animation frames, intervals, and timeouts.

---

### `core_keys_updatebinds(args)`

Arg      | Default | Type
---------|---------|--------
clear    | false   | boolean
keybinds |         | object

---

### `core_matrix_clone(args)`
* Creates a new matrix and copies the values of an existing matrix onto it.

Arg | Default | Type
----|---------|-------
id  |         | string
to  |         | string

---

### `core_matrix_copy(args)`
* Copies all values of a matrix onto another matrix.

Arg | Default | Type
----|---------|-------
id  |         | string
to  |         | string

---

### `core_matrix_create()`
* Creates a new blank Float32Array of length 16 and returns it.

---

### `core_matrix_delete(args)`
* Deletes various matricies.

Arg | Default | Type
----|---------|-----------------
ids |         | array of strings

---

### `core_matrix_identity(args)`
* Resets a matrix to an identity matrix.

Arg | Default | Type
----|---------|-------
id  |         | string

---

### `core_matrix_rotate(args)`
* Rotates a 3D matrix.

Arg        | Default | Type
-----------|---------|-----------------
dimensions |         | array of numbers
id         |         | string

---

### `core_matrix_round(args)`
* Rounds the values of a matrix to the nearest integer.

Arg      | Default                       | Type
---------|-------------------------------|-------
decimals | core_storage_data['decimals'] | number
id       |                               | string

---

### `core_matrix_translate(args)`
* Translates a 3D matrix.

Arg        | Default | Type
-----------|---------|-----------------
dimensions |         | array of numbers
id         |         | string

---

### `core_mouse_updatebinds(args)`

Arg        | Default | Type
-----------|---------|--------
clear      | false   | boolean
mousebinds |         | object

---

### `core_move_2d(args)`
* Calculates movement in 2 dimensions and returns an object containing `angle`, `x`, and `y`.

Arg        | Default                       | Type
-----------|-------------------------------|-------
decimals   | core_storage_data['decimals'] | number
multiplier | 1                             | number
x0         |                               | number
x1         |                               | number
y0         |                               | number
y1         |                               | number

---

### `core_move_2d_diagonal(args)`
* Handles reduction of movement speed when moving diagonally amd returns an object containing `x` and `y`.

Arg   | Default | Type
------|---------|-------
dx    |         | number
dy    |         | number
speed |         | number

---

### `core_move_3d(args)`
* Calculates movement in 3 dimensions and returns an object containing `x` and `z`.

Arg        | Default                       | Type
-----------|-------------------------------|--------
angle      |                               | number
decimals   | core_storage_data['decimals'] | number
multiplier | 1                             | number
speed      | 1                             | number
strafe     | false                         | boolean

---

### `core_number_format(args)`
* Formats a number based on `new Intl.NumberFormat()` and returns it.

Arg        | Default                       | Type
-----------|-------------------------------|--------
decimals   | core_storage_data['decimals'] | number
number     |                               | number

---

### `core_point_angle(args)`
* Returns the angle between 2 points relative to the grid.

Arg        | Default                       | Type
-----------|-------------------------------|--------
decimals   | core_storage_data['decimals'] | number
x0         |                               | number
x1         |                               | number
y0         |                               | number
y1         |                               | number

---

### `core_radians_to_degrees(args)`
* Converts a number of radians to degrees and returns it.

Arg        | Default                       | Type
-----------|-------------------------------|-------
decimals   | core_storage_data['decimals'] | number
radians    |                               | number

---

### `core_random_boolean(args)`
* Returns a random boolean with optional probability manipulation.

Arg     | Default | Type
--------|---------|--------
chance  | .5      | boolean

---

### `core_random_hex(args)`
* Returns a random hexadecimal string of length 6.

---

### `core_random_integer(args)`
* Generates a random integer in a range.

Arg  | Default | Type
-----|---------|--------
max  | 100     | boolean
todo | 'floor' | string

---

### `core_random_key(args)`
* Returns a random object key.

Arg    | Default | Type
-------|---------|-------
object |         | object

---

### `core_random_number(args)`
* Returns a random number in a range.

Arg        | Default | Type
-----------|---------|-------
multiplier | 1       | number

---

### `core_random_rgb()`
* Returns an object containing random `blue`, `green`, and `red`, as numbers between 0 and 255.

---

### `core_random_string(args)`
* Returns a random string from a string of available characters.

Arg        | Default                                                          | Type
-----------|------------------------------------------------------------------|-------
characters | '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' | string
length     | 100                                                              | number

---

### `core_rectangle_overlap(args)`
* Checks if 2 rectangles are overlapping and returns a boolean.

Arg | Default | Type
----|---------|-------
h0  |         | number
h1  |         | number
w0  |         | number
w1  |         | number
x0  |         | number
x1  |         | number
y0  |         | number
y1  |         | number

---

### `core_replace_multiple(args)`
* Improvement of general string `replace()` that allows multiple replacements.

Arg      | Default | Type
---------|---------|-------
patterns |         | object
string   |         | string

---

### `core_repo_init(args)`
* Called by repository-specific [`repo_init()`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/js/main.md#repo_init) function.
* Sets up various repository-specific things needed for project function.

Arg               | Default   | Type
------------------|-----------|--------------------------
audios            | {}        | object
beforeunload      | false     | boolean false or function
entities          | {}        | object
github            | 'iterami' | string
globals           | {}        | object
images            | {}        | object
info              | ''        | string
keybinds          | false     | boolean false or object
menu              | false     | boolean
menu-block-events | true      | boolean
mousebinds        | false     | boolean false or object
storage           | {}        | object
storage-menu      | ''        | string
tabs              | {}        | object
textures          | false     | boolean false or object
title             |           | string
ui                | ''        | string

---

### `core_requestpointerlock(args)`

Arg | Default  | Type
----|----------|-------
id  | 'canvas' | string

---

### `core_round(args)`
* Rounds a number to a specific number of decimal places and returns it.

Arg        | Default                       | Type
-----------|-------------------------------|-------
decimals   | core_storage_data['decimals'] | number
number     |                               | number

---

### `core_sort_custom(args)`
* Sorts an array according to custom sorting rules and returns it.
* Optionally reverses the array after sorting.

Arg     | Default | Type
--------|---------|---------
array   |         | array
reverse | false   | boolean
todo    |         | function

---

### `core_sort_numbers(args)`
* Sorts an array numbers from smallest to biggest and returns it.

Arg     | Default | Type
--------|---------|--------
array   |         | array
reverse | false   | boolean

---

### `core_sort_random(args)`
* Sorts an array randomly and returns it.
* Cannot be reversed.

Arg     | Default | Type
--------|---------|------
array   |         | array

---

### `core_sort_property(args)`
* Sort an array based on some property and return it.

Arg      | Default | Type
---------|---------|--------
array    |         | array
property |         } string
reverse  | false   | boolean

---

### `core_sort_strings(args)`
* Sort an array of strings based on `localeCompare()` and return it.

Arg     | Default | Type
--------|---------|--------
array   |         | array
reverse | false   | boolean

---

### `core_storage_add(args)`
* Adds information and defaults of a variable that should be stored in `window.localStorage`.

Arg     | Default               | Type
--------|-----------------------|-------
prefix  | core_repo_title + '-' | string
storage |                       | object

---

### `core_storage_element_property(args)`
* Returns `checked` when modifying checkboxes.
* Returns `innerHTML` when modifying `div` or `span`.
* Returns `value` when modifying everything else.

Arg     | Default | Type
--------|---------|--------
element |         | element
key     |         | string

---

### `core_storage_reset()`
* Optionally resets storage values to their original defaults.

---

### `core_storage_save()`
* Saves current storage input values as new storage values.

---

### `core_storage_update()`
* Updates settings inputs with current storage values.

---

### `core_tab_create(args)`
* Creates an HTML tab div and button for selecting the tab.

Arg     | Default | Type
--------|---------|-------
content |         | string
group   |         | string
id      |         | string
label   |         | string

---

### `core_tab_switch(args)`
* Switches to a created tab.

Arg | Default | Type
----|---------|-------
id  |         | string

---

### `core_test_function(args)`
* Passes args to a function, compares its return value to an expected value of any type, and returns the test result and returned valuez.

Arg      | Default | Type
---------|---------|---------
args     | {}      | object
expect   |         | any
function |         | function

---

### `core_time_diff(args)`
* Returns the formatted difference between two dates and returns it.

Arg    | Default | Type
-------|---------|---------------------------
now    | false   | boolean false or timestamp
target |         | timestamp

---

### `core_time_format(args)`
* Returns a date object formatted as a string.

Arg  | Default | Type
-----|---------|------------------------
date | false   | boolean false or object
diff | false   | boolean false or object

---

### `core_time_from_inputs()`
* Collects date information from specific HTML elements and returns a timestamp.

---

### `core_timestamp_to_date(args)`
* Converts a timestamp to a date object and returns it.

Arg       | Default | Type
----------|---------|---------------------------
timestamp | false   | boolean false or timestamp

---

### `core_two_digits(args)`
* Adds `0` before a number of it only has 1 digit and returns it.

Arg    | Default | Type
-------|---------|-------
number |         | number

---

### `core_type(args)`
* Returns the type of `var`.

Arg  | Default    | Type
-----|------------|-------
type | 'function' | string
var  |            | any

---

### `core_type_convert(args)`
* Converts variable depending on template variable type.

Arg      | Default | Type
---------|---------|-----
template |         | any
value    |         | any

---

### `core_ui_update(args)`
* Updates HTML element values depending on type, but only if the value is new.

Arg | Default | Type
----|---------|-------
ids | {}      | object

---

### `core_uri(args)`
* Returns an element converted to a data URI.

Arg     | Default     | Type
--------|-------------|-------
id      | 'buffer'    | string
quality | 1           | number
type    | 'image/png' | string
