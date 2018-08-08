[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/js/core.js
--------------------------------------------------------------------------------------------------------

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
* [`core_fixed_length_line(args)`](#core_fixed_length_lineargs)
* [`core_group_add(args)`](#core_group_addargs)
* [`core_group_create(args)`](#core_group_createargs)
* [`core_group_modify(args)`](#core_group_modifyargs)
* [`core_group_move(args)`](#core_group_moveargs)
* [`core_group_remove_all(args)`](#core_group_remove_allargs)
* [`core_group_remove(args)`](#core_group_removeargs)
* [`core_handle_beforeunload(event)`](#core_handle_beforeunloadevent)
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
* [`core_storage_type_convert(args)`](#core_storage_type_convertargs)
* [`core_storage_update()`](#core_storage_update)
* [`core_tab_create(args)`](#core_tab_createargs)
* [`core_tab_switch(args)`](#core_tab_switchargs)
* [`core_time_diff(args)`](#core_time_diffargs)
* [`core_time_format(args)`](#core_time_formatargs)
* [`core_time_from_inputs()`](#core_time_from_inputs)
* [`core_time_timestamp_to_date(args)`](#core_timestamp_to_dateargs)
* [`core_time_two_digits(args)`](#core_two_digitsargs)
* [`core_type(args)`](#core_typeargs)
* [`core_ui_update(args)`](#core_ui_updateargs)
* [`core_uid_create()`](#core_uid_create)
* [`core_uid()`](#core_uid)
* [`core_uri(args)`](#core_uriargs)
* [`core_vendor_prefix(args)`](#core_vendor_prefixargs)

---

### `core_ajax(args)`
* Initiates and handles AJAX requests.

Arg  | Required? | Notes
-----|-----------|------
data | false     |
todo | true      |
type | false     |
url  | true      |

---

### `core_args(args)`
* Utility function for handling usage and default values of the 1 arguments object.

Arg      | Required? | Notes
---------|-----------|------
args     | true      |
defaults | true      |

---

### `core_audio_create(args)`

Arg    | Required? | Notes
-------|-----------|------
audios | true      |

---

### `core_audio_node_create(args)`

Arg        | Required? | Notes
-----------|-----------|------
id         | false     |
properties | false     |

---

### `core_audio_onended(args)`

Arg | Required? | Notes
----|-----------|------
id  | true      |

---

### `core_audio_source_create(args)`

Arg               | Required? | Notes
------------------|-----------|------
id                | true      |
volume-multiplier | false     |

---

### `core_audio_start(args)`

Arg               | Required? | Notes
------------------|-----------|------
id                | true      |
volume-multiplier | false     |

---

### `core_audio_stop(args)`

Arg  | Required? | Notes
-----|-----------|------
id   | true      |
when | false     |

---

### `core_audio_stop_all(args)`

Arg  | Required? | Notes
-----|-----------|------
when | false     |

---

### `core_call(args)`
* Calls a function if it exists. Used to prevent errors caused by undefined functions.

Arg  | Required? | Notes
-----|-----------|------
args | false     |
todo | true      |

---

### `core_clamp(args)`
* Clamps a number between two values.
* If out of bounds, either sets it to closest bound or loops to opposite bound as many times as needed.

Arg      | Required? | Notes
---------|-----------|------
decimals | false     |
max      | true      |
min      | true      |
value    | true      |
wrap     | false     |

---

### `core_date_to_timestamp(args)`
* Converts a date object into a timestamp.

Arg  | Required? | Notes
-----|-----------|------
date | false     |

---

### `core_degrees_to_radians(args)`
* Converts a number of degrees to radians.

Arg      | Required? | Notes
---------|-----------|------
decimals | false     |
degrees  | true      |

---

### `core_distance(args)`
* Returns the distance between 2 points that can be 3D, 2D, or 1D.

Arg      | Required? | Notes
---------|-----------|------
decimals | false     |
x0       | false     |
x1       | false     |
y0       | false     |
y1       | false     |
z0       | false     |
z1       | false     |

---

### `core_entity_create(args)`
* Creates an entity and provides it with additional properties based on entity defaults and functions.

Arg        | Required? | Notes
-----------|-----------|------
id         | false     |
properties | false     |
types      | false     |

---

### `core_entity_handle_default(args)`
* Makes sure entity property defaults and groups are handled properly.

Arg  | Required? | Notes
-----|-----------|------
id   | true      |
type | true      |

---

### `core_entity_remove(args)`
* Deletes an entity and removes it from groups.

Arg          | Required? | Notes
-------------|-----------|------
delete-empty | false     |
entities     | true      |

---

### `core_entity_remove_all(args)`
* Deletes all entities within a specific group.

Arg          | Required? | Notes
-------------|-----------|------
delete-empty | false     |
group        | false     |

---

### `core_entity_set(args)`
* Creates a new entity type that can then be created.

Arg        | Required? | Notes
-----------|-----------|------
default    | false     |
groups     | false     |
properties | false     |
todo       | false     |
type       | true      |

---

### `core_escape()`
* Pressing escape opens or closes the menu.
* Pauses or resumes intervals depending on state.
* Calls optional repository-specific [`repo_escape()`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/js/main.md#repo_escape) function.

---

### `core_events_bind(args)`
* Updates bindings to various events, including optional clearing.

Arg          | Required? | Notes
-------------|-----------|------
beforeunload | false     |
clearkeys    | false     |
clearmouse   | false     |
elements     | false     |
keybinds     | false     |
mousebinds   | false     |

---

### `core_events_keyinfo(event)`
* Returns keycode and character of fired keyboard event.

---

### `core_events_rebind(args)`

---

### `core_events_todoloop()`
* Function that runs looping keyboard and mouse event todos.

---

### `core_fixed_length_line(args)`
* Returns the endpoint of a line between 2 3D, 2D, or 1D points, where the line has a fixed length.

Arg      | Required? | Notes
---------|-----------|------
decimals | false     |
length   | false     |
x0       | false     |
x1       | false     |
y0       | false     |
y1       | false     |
z0       | false     |
z1       | false     |

---

### `core_group_add(args)`
* Adds entities to a group and calls `core_group_create()` if it does not exist.

Arg      | Required? | Notes
---------|-----------|------
entities | true      |
group    | true      |

---

### `core_group_create(args)`
* Creates empty groups and sets up length handling.

Arg | Required? | Notes
----|-----------|------
ids | true      |

---

### `core_group_modify(args)`
* Runs code that affects every entity within a group.

Arg     | Required? | Notes
--------|-----------|------
pretodo | false     |
group   | true      |
todo    | true      |

---

### `core_group_move(args)`
* Removes an entity from a group and adds it to a different group.

Arg      | Required? | Notes
---------|-----------|------
entities | true      |
from     | true      |
to       | true      |

---

### `core_group_remove(args)`
* Remove entities from 1 specific group.

Arg          | Required? | Notes
-------------|-----------|------
delete-empty | false     |
entities     | true      |
group        | true      |

---

### `core_group_remove_all(args)`
* Removes entities fromm all groups.

Arg          | Required? | Notes
-------------|-----------|------
delete-empty | false     |
entities     | true      |

---

### `core_handle_beforeunload(event)`

---

### `core_handle_contextmenu(event)`

---

### `core_handle_defaults(args)`

Arg     | Required? | Notes
--------|-----------|------
default | false     |
var     | false     |

---

### `core_handle_event(args)`

Arg    | Required? | Notes
-------|-----------|------
event  | true      |
key    | true      |
object | true      |
state  | false     |
todo   | false     |

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
* Converts a hexadecimal string of length 6 to red, green, and blue.

Arg | Required? | Notes
----|-----------|------
hex | true      |

---

### `core_html(args)`
* Returns an HTML element and optionally adds it to a parent.

Arg        | Required? | Notes
-----------|-----------|------
parent     | false     |
properties | false     |
type       | false     |

---

### `core_html_format(args)`
* Replaces characters in a string that may cause HTML errors.

Arg    | Required? | Notes
-------|-----------|------
string | true      |

---

### `core_html_modify(args)`
* Assigns properties to an HTML element if it exists.

Arg        | Required? | Notes
-----------|-----------|------
id         | true      |
properties | false     |

---

### `core_image(args)`
* Creates and loads an image.

Arg  | Required? | Notes
-----|-----------|------
id   | true      |
src  | true      |
todo | false     |

---

### `core_init()`
* Sets up universal project components, such as the core menu and events.

---

### `core_interval_animationFrame(args)`
* Continues running animation frames.

Arg | Required? | Notes
----|-----------|------
id  | true      |

---

### `core_interval_modify(args)`
* Creates or modifies an animation frame, interval, or timeout.

Arg            | Required? | Notes
---------------|-----------|------
todo           | true      |
animationFrame | false     |
clear          | false     |
id             | false     |
interval       | false     |
paused         | false     |
set            | false     |

---

### `core_interval_pause(args)`
* Pauses an animation frame, interval, or timeout.

Arg | Required? | Notes
----|-----------|------
id  | true      |

---

### `core_interval_pause_all()`
* Pauses all animation frames, intervals, and timeouts.

---

### `core_interval_remove(args)`
* Pauses and removes an animation frame, interval, or timeout.

Arg | Required? | Notes
----|-----------|------
id  | true      |

---

### `core_interval_remove_all()`
* Pauses and removes all animation frames, intervals, and timeouts.

---

### `core_interval_resume(args)`
* Resumes an animation frame, interval, or timeout.

Arg | Required? | Notes
----|-----------|------
id  | true      |

---

### `core_interval_resume_all()`
* Reumes all animation frames, intervals, and timeouts.

---

### `core_keys_updatebinds(args)`

Arg      | Required? | Notes
---------|-----------|------
clear    | false     |
keybinds | true      |

---

### `core_matrix_clone(args)`
* Creates a new matrix and copies the values of an existing matrix onto it.

Arg | Required? | Notes
----|-----------|------
id  | true      |
to  | true      |

---

### `core_matrix_copy(args)`
* Copies all values of a matrix onto another matrix.

Arg | Required? | Notes
----|-----------|------
id  | true      |
to  | true      |

---

### `core_matrix_create()`
* Creates a new blank Float32Array of length 16.

---

### `core_matrix_delete(args)`
* Deletes various matricies.

Arg | Required? | Notes
----|-----------|------
ids | true      |

---

### `core_matrix_identity(args)`
* Resets a matrix to an identity matrix.

Arg | Required? | Notes
----|-----------|------
id  | true      |

---

### `core_matrix_rotate(args)`
* Rotates a 3D matrix.

Arg        | Required? | Notes
-----------|-----------|------
dimensions | true      |
id         | true      |

---

### `core_matrix_round(args)`
* Rounds the values of a matrix to the nearest integer.

Arg      | Required? | Notes
---------|-----------|------
decimals | false     |
id       | true      |

---

### `core_matrix_translate(args)`
* Translates a 3D matrix.

Arg        | Required? | Notes
-----------|-----------|------
dimensions | true      |
id         | true      |

---

### `core_mouse_updatebinds(args)`

Arg        | Required? | Notes
-----------|-----------|------
clear      | false     |
mousebinds | true      |

---

### `core_move_2d(args)`
* Calculates movement in 2 dimensions.

Arg        | Required? | Notes
-----------|-----------|------
decimals   | false     |
multiplier | false     |
x0         | true      |
x1         | true      |
y0         | true      |
y1         | true      |

---

### `core_move_2d_diagonal(args)`
* Handles reduction of movement speed when moving diagonally.

Arg   | Required? | Notes
------|-----------|------
dx    | true      |
dy    | true      |
speed | true      |

---

### `core_move_3d(args)`
* Calculates movement in 3 dimensions.

Arg        | Required? | Notes
-----------|-----------|------
angle      | true      |
decimals   | false     |
multiplier | false     |
speed      | false     |
strafe     | false     |

---

### `core_point_angle(args)`
* Returns the angle between 2 points relative to the grid.

Arg | Required? | Notes
----|-----------|------
x0  | true      |
x1  | true      |
y0  | true      |
y1  | true      |

---

### `core_radians_to_degrees(args)`
* Converts a number of radians to degrees.

Arg      | Required? | Notes
---------|-----------|------
decimals | false     |
radians  | true      |

---

### `core_random_boolean(args)`
* Generates a random boolean with optional probability manipulation.

Arg     | Required? | Notes
--------|-----------|------
chance  | false     |

---

### `core_random_hex(args)`
* Generates a random hexadecimal string of length 6.

---

### `core_random_integer(args)`
* Generates a random integer in a range.

Arg  | Required? | Notes
-----|-----------|------
max  | false     |
todo | false     |

---

### `core_random_key(args)`
* Returns a random object key.

Arg    | Required? | Notes
-------|-----------|------
object | true      |

---

### `core_random_number(args)`
* Generates a random number in a range.

Arg        | Required? | Notes
-----------|-----------|------
multiplier | false     |

---

### `core_random_rgb()`
* Generates random red, green, and blue as an integer between 0 and 256.

---

### `core_random_string(args)`
* Generates a random string from a string of available characters.

Arg        | Required? | Notes
-----------|-----------|------
characters | false     |
length     | false     |

---

### `core_rectangle_overlap(args)`
* Checks if 2 rectangles are overlapping.

Arg | Required? | Notes
----|-----------|------
h0  | true      |
h1  | true      |
w0  | true      |
w1  | true      |
x0  | true      |
x1  | true      |
y0  | true      |
y1  | true      |

---

### `core_replace_multiple(args)`
* Improvement of general string `replace()` that allows multiple replacements.

Arg      | Required? | Notes
---------|-----------|------
patterns | true      |
string   | true      |

---

### `core_repo_init(args)`
* Called by repository-specific [`repo_init()`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/js/main.md#repo_init) function.
* Sets up various repository-specific things needed for project function.

Arg          | Required? | Notes
-------------|-----------|------
title        | true      |
audios       | false     |
beforeunload | false     |
entities     | false     |
github       | false     |
globals      | false     |
images       | false     |
info         | false     |
keybinds     | false     |
menu         | false     |
mousebinds   | false     |
storage      | false     |
storage-menu | false     |
ui           | false     |

---

### `core_requestpointerlock(args)`

Arg | Required? | Notes
----|-----------|------
id  | false     |

---

### `core_round(args)`
* Rounds a number to a specific number of decimal places.

Arg      | Required? | Notes
---------|-----------|------
decimals | false     |
number   | true      |

---

### `core_sort_custom(args)`
* Sorts an array according to custom sorting rules.
* Optionally reverses the array after sorting.

Arg     | Required? | Notes
--------|-----------|------
array   | true      |
reverse | false     |
todo    | true      |

---

### `core_sort_numbers(args)`
* Sorts numbers from smallest to biggest.

Arg     | Required? | Notes
--------|-----------|------
array   | true      |
reverse | false     |

---

### `core_sort_random(args)`
* Sorts an array randomly. Cannot be reversed.

Arg     | Required? | Notes
--------|-----------|------
array   | true      |

---

### `core_sort_property(args)`
* Sort an array based on some property.

Arg      | Required? | Notes
---------|-----------|------
array    | true      |
reverse  | false     |
property | true      |

---

### `core_sort_strings(args)`
* Sort strings based on `localeCompare()`.

Arg     | Required? | Notes
--------|-----------|------
array   | true      |
reverse | false     |

---

### `core_storage_add(args)`
* Adds information and defaults of a variable that should be stored in `window.localStorage`.

Arg     | Required? | Notes
--------|-----------|------
prefix  | false     |
storage | true      |

---

### `core_storage_element_property(args)`
* Figures out what type of HTML element a storage value uses and how to modify it.

Arg     | Required? | Notes
--------|-----------|------
element | true      |
key     | true      |

---

### `core_storage_reset()`
* Resets storage values to their original defaults.

---

### `core_storage_save()`
* Saves current storage input values as new storage values.

---

### `core_storage_type_convert(args)`
* Converts variable types depending on storage value type.

Arg   | Required? | Notes
------|-----------|------
key   | true      |
value | true      |

---

### `core_storage_update()`
* Updates settings inputs with current storage values.

---

### `core_tab_create(args)`
* Creates an HTML tab div and button for selecting the tab.

Arg     | Required? | Notes
--------|-----------|------
content | false     |
default | false     |
group   | true      |
id      | true      |
label   | false     |

---

### `core_tab_switch(args)`
* Switches to a created tab.

Arg | Required? | Notes
----|-----------|------
id  | true      |

---

### `core_time_format(args)`
* Returns a date object formatted as a string.

Arg  | Required? | Notes
-----|-----------|------
date | false     |
diff | false     |

---

### `core_time_from_inputs()`
* Collects date information from specific HTML elements and returns a timestamp.

---

### `core_timestamp_to_date(args)`
* Converts a timestamp to a date object.

Arg       | Required? | Notes
----------|-----------|------
timestamp | false     |

---

### `core_two_digits(args)`
* Adds a zero before a number of it only has 1 digit.

Arg    | Required? | Notes
-------|-----------|------
number | true      |

---

### `core_type(args)`
* Returns the type of a variable.

Arg  | Required? | Notes
-----|-----------|------
type | false     |
var  | true      |

---

### `core_uid()`
* Returns a unique ID and adds it to a list of created UIDs.

---

### `core_uid_create()`
* Creates a UID string that may not be unqiue.

---

### `core_ui_update(args)`
* Updates HTML element values depending on type, but only if the value is new.

Arg | Required? | Notes
----|-----------|------
ids | true      |

---

### `core_uri(args)`
* Returns an element converted to a data URI.

Arg     | Required? | Notes
--------|-----------|------
id      | false     |
quality | false     |
type    | false     |

---

### `core_vendor_prefix(args)`
* Handles vendor prefixing for experimental features.

Arg      | Required? | Notes
---------|-----------|------
property | true      |
var      | true      |
