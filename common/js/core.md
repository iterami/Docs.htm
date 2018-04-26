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
* [`core_vendor_prefix(args)`](#core_vendor_prefixargs)

---

### `core_ajax(args)`
* Initiates and handles AJAX requests.

Arg  | Required? | Notes
-----|-----------|------
data | NO        |
todo | YES       |
type | NO        |
url  | YES       |

---

### `core_args(args)`
* Utility function for handling usage and default values of the one arguments object.

Arg      | Required? | Notes
---------|-----------|------
args     | YES       |
defaults | YES       |

---

### `core_audio_create(args)`

Arg    | Required? | Notes
-------|-----------|------
audios | YES       |

---

### `core_audio_node_create(args)`

Arg        | Required? | Notes
-----------|-----------|------
id         | NO        |
properties | NO        |

---

### `core_audio_onended(args)`

Arg | Required? | Notes
----|-----------|------
id  | YES       |

---

### `core_audio_source_create(args)`

Arg               | Required? | Notes
------------------|-----------|------
id                | YES       |
volume-multiplier | NO        |

---

### `core_audio_start(args)`

Arg               | Required? | Notes
------------------|-----------|------
id                | YES       |
volume-multiplier | NO        |

---

### `core_audio_stop(args)`

Arg  | Required? | Notes
-----|-----------|------
id   | YES       |
when | NO        |

---

### `core_audio_stop_all(args)`

Arg  | Required? | Notes
-----|-----------|------
when | NO        |

---

### `core_call(args)`
* Calls a function if it exists. Used to prevent errors caused by undefined functions.

Arg  | Required? | Notes
-----|-----------|------
args | NO        |
todo | YES       |

---

### `core_clamp(args)`
* Clamps a number between two values.
* If out of bounds, either sets it to closest bound or loops to opposite bound as many times as needed.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
max      | YES       |
min      | YES       |
value    | YES       |
wrap     | NO        |

---

### `core_date_to_timestamp(args)`
* Converts a date object into a timestamp.

Arg  | Required? | Notes
-----|-----------|------
date | NO        |

---

### `core_degrees_to_radians(args)`
* Converts a number of degrees to radians.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
degrees  | YES       |

---

### `core_distance(args)`
* Returns the distance between two two-dimensional points.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
x0       | YES       |
x1       | YES       |
y0       | YES       |
y1       | YES       |

---

### `core_entity_create(args)`
* Creates an entity and provides it with additional properties based on entity defaults and functions.

Arg        | Required? | Notes
-----------|-----------|------
id         | NO        |
properties | NO        |
types      | NO        |

---

### `core_entity_handle_default(args)`
* Makes sure entity property defaults and groups are handled properly.

Arg  | Required? | Notes
-----|-----------|------
id   | YES       |
type | YES       |

---

### `core_entity_remove(args)`
* Deletes an entity and removes it from groups.

Arg          | Required? | Notes
-------------|-----------|------
delete-empty | NO        |
entities     | YES       |

---

### `core_entity_remove_all(args)`
* Deletes all entities within a specific group.

Arg          | Required? | Notes
-------------|-----------|------
delete-empty | NO        |
group        | NO        |

---

### `core_entity_set(args)`
* Creates a new entity type that can then be created.

Arg        | Required? | Notes
-----------|-----------|------
default    | NO        |
groups     | NO        |
properties | NO        |
todo       | NO        |
type       | YES       |

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
beforeunload | NO        |
clearkeys    | NO        |
clearmouse   | NO        |
elements     | NO        |
keybinds     | NO        |
mousebinds   | NO        |

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
* Returns the endpoint of a line between two points, where the line has a fixed length.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
length   | YES       |
x0       | YES       |
x1       | YES       |
y0       | YES       |
y1       | YES       |

---

### `core_group_add(args)`
* Adds entities to a group and creates the group if it does not exist.

Arg      | Required? | Notes
---------|-----------|------
entities | YES       |
group    | YES       |

---

### `core_group_modify(args)`
* Runs code that affects every entity within a group.

Arg     | Required? | Notes
--------|-----------|------
pretodo | NO        |
group   | YES       |
todo    | YES       |

---

### `core_group_move(args)`
* Removes an entity from a group and adds it to a different group.

Arg      | Required? | Notes
---------|-----------|------
entities | YES       |
from     | YES       |
to       | YES       |

---

### `core_group_remove(args)`
* Remove entities from one specific group.

Arg          | Required? | Notes
-------------|-----------|------
delete-empty | NO        |
entities     | YES       |
group        | YES       |

---

### `core_group_remove_all(args)`
* Removes entities fromm all groups.

Arg          | Required? | Notes
-------------|-----------|------
delete-empty | NO        |
entities     | YES       |

---

### `core_handle_beforeunload(event)`

---

### `core_handle_contextmenu(event)`

---

### `core_handle_defaults(args)`

Arg     | Required? | Notes
--------|-----------|------
default | NO        |
var     | NO        |

---

### `core_handle_event(args)`

Arg    | Required? | Notes
-------|-----------|------
block  | NO        |
event  | YES       |
key    | YES       |
object | YES       |
state  | NO        |
todo   | NO        |

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
* Converts a hexadecimal string of length six to red, green, and blue.

Arg | Required? | Notes
----|-----------|------
hex | YES       |

---

### `core_html(args)`
* Returns an HTML element and optionally adds it to a parent.

Arg        | Required? | Notes
-----------|-----------|------
parent     | NO        |
properties | NO        |
type       | NO        |

---

### `core_html_format(args)`
* Replaces characters in a string that may cause HTML errors.

Arg    | Required? | Notes
-------|-----------|------
string | YES       |

---

### `core_html_modify(args)`
* Assigns properties to an HTML element if it exists.

Arg        | Required? | Notes
-----------|-----------|------
id         | YES       |
properties | NO        |

---

### `core_image(args)`
* Creates and loads an image.

Arg  | Required? | Notes
-----|-----------|------
id   | YES       |
src  | YES       |
todo | NO        |

---

### `core_init()`
* Sets up universal project components, such as the core menu and events.

---

### `core_interval_animationFrame(args)`
* Continues running animation frames.

Arg | Required? | Notes
----|-----------|------
id  | YES       |

---

### `core_interval_modify(args)`
* Creates or modifies an animation frame, interval, or timeout.

Arg            | Required? | Notes
---------------|-----------|------
todo           | YES       |
animationFrame | NO        |
clear          | NO        |
id             | NO        |
interval       | NO        |
paused         | NO        |
set            | NO        |

---

### `core_interval_pause(args)`
* Pauses an animation frame, interval, or timeout.

Arg | Required? | Notes
----|-----------|------
id  | YES       |

---

### `core_interval_pause_all()`
* Pauses all animation frames, intervals, and timeouts.

---

### `core_interval_remove(args)`
* Pauses and removes an animation frame, interval, or timeout.

Arg | Required? | Notes
----|-----------|------
id  | YES       |

---

### `core_interval_remove_all()`
* Pauses and removes all animation frames, intervals, and timeouts.

---

### `core_interval_resume(args)`
* Resumes an animation frame, interval, or timeout.

Arg | Required? | Notes
----|-----------|------
id  | YES       |

---

### `core_interval_resume_all()`
* Reumes all animation frames, intervals, and timeouts.

---

### `core_keys_updatebinds(args)`

Arg      | Required? | Notes
---------|-----------|------
clear    | NO        |
keybinds | YES       |

---

### `core_matrix_clone(args)`
* Creates a new matrix and copies the values of an existing matrix onto it.

Arg | Required? | Notes
----|-----------|------
id  | YES       |
to  | YES       |

---

### `core_matrix_copy(args)`
* Copies all values of a matrix onto another matrix.

Arg | Required? | Notes
----|-----------|------
id  | YES       |
to  | YES       |

---

### `core_matrix_create()`
* Creates a new blank Float32Array of length 16.

---

### `core_matrix_delete(args)`
* Deletes various matricies.

Arg | Required? | Notes
----|-----------|------
ids | YES       |

---

### `core_matrix_identity(args)`
* Resets a matrix to an identity matrix.

Arg | Required? | Notes
----|-----------|------
id  | YES       |

---

### `core_matrix_rotate(args)`
* Rotates a 3D matrix.

Arg        | Required? | Notes
-----------|-----------|------
dimensions | YES       |
id         | YES       |

---

### `core_matrix_round(args)`
* Rounds the values of a matrix to the nearest integer.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
id       | YES       |

---

### `core_matrix_translate(args)`
* Translates a 3D matrix.

Arg        | Required? | Notes
-----------|-----------|------
dimensions | YES       |
id         | YES       |

---

### `core_mouse_updatebinds(args)`

Arg        | Required? | Notes
-----------|-----------|------
clear      | NO        |
mousebinds | YES       |

---

### `core_move_2d(args)`
* Calculates movement in two dimensions.

Arg        | Required? | Notes
-----------|-----------|------
decimals   | NO        |
multiplier | NO        |
x0         | YES       |
x1         | YES       |
y0         | YES       |
y1         | YES       |

---

### `core_move_2d_diagonal(args)`
* Handles reduction of movement speed when moving diagonally.

Arg   | Required? | Notes
------|-----------|------
dx    | YES       |
dy    | YES       |
speed | YES       |

---

### `core_move_3d(args)`
* Calculates movement in three dimensions.

Arg        | Required? | Notes
-----------|-----------|------
angle      | YES       |
decimals   | NO        |
multiplier | NO        |
speed      | NO        |
strafe     | NO        |

---

### `core_point_angle(args)`
* Returns the angle between two points relative to the grid.

Arg | Required? | Notes
----|-----------|------
x0  | YES       |
x1  | YES       |
y0  | YES       |
y1  | YES       |

---

### `core_radians_to_degrees(args)`
* Converts a number of radians to degrees.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
radians  | YES       |

---

### `core_random_boolean(args)`
* Generates a random boolean with optional probability manipulation.

Arg     | Required? | Notes
--------|-----------|------
chance  | NO        |

---

### `core_random_hex(args)`
* Generates a random hexadecimal string of length six.

---

### `core_random_integer(args)`
* Generates a random integer in a range.

Arg  | Required? | Notes
-----|-----------|------
max  | NO        |
todo | NO        |

---

### `core_random_key(args)`
* Returns a random object key.

Arg    | Required? | Notes
-------|-----------|------
object | YES       |

---

### `core_random_number(args)`
* Generates a random number in a range.

Arg        | Required? | Notes
-----------|-----------|------
multiplier | NO        |

---

### `core_random_rgb()`
* Generates random red, green, and blue as an integer between 0 and 256.

---

### `core_random_string(args)`
* Generates a random string from a string of available characters.

Arg        | Required? | Notes
-----------|-----------|------
characters | NO        |
length     | NO        |

---

### `core_rectangle_overlap(args)`
* Checks if two rectangles are overlapping.

Arg | Required? | Notes
----|-----------|------
h0  | YES       |
h1  | YES       |
w0  | YES       |
w1  | YES       |
x0  | YES       |
x1  | YES       |
y0  | YES       |
y1  | YES       |

---

### `core_replace_multiple(args)`
* Improvement of general string `replace()` that allows multiple replacements.

Arg      | Required? | Notes
---------|-----------|------
patterns | YES       |
string   | YES       |

---

### `core_repo_init(args)`
* Called by repository-specific [`repo_init()`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/js/main.md#repo_init) function.
* Sets up various repository-specific things needed for project function.

Arg          | Required? | Notes
-------------|-----------|------
title        | YES       |
audios       | NO        |
beforeunload | NO        |
entities     | NO        |
github       | NO        |
globals      | NO        |
images       | NO        |
info         | NO        |
keybinds     | NO        |
menu         | NO        |
mousebinds   | NO        |
storage      | NO        |
storage-menu | NO        |
ui           | NO        |

---

### `core_requestpointerlock(args)`

Arg | Required? | Notes
----|-----------|------
id  | NO        |

---

### `core_round(args)`
* Rounds a number to a specific number of decimal places.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
number   | YES       |

---

### `core_sort_custom(args)`
* Sorts an array according to custom sorting rules.
* Optionally reverses the array after sorting.

Arg     | Required? | Notes
--------|-----------|------
array   | YES       |
reverse | NO        |
todo    | YES       |

---

### `core_sort_numbers(args)`
* Sorts numbers from smallest to biggest.

Arg     | Required? | Notes
--------|-----------|------
array   | YES       |
reverse | NO        |

---

### `core_sort_random(args)`
* Sorts an array randomly. Cannot be reversed.

Arg     | Required? | Notes
--------|-----------|------
array   | YES       |

---

### `core_sort_property(args)`
* Sort an array based on some property.

Arg      | Required? | Notes
---------|-----------|------
array    | YES       |
reverse  | NO        |
property | YES       |

---

### `core_sort_strings(args)`
* Sort strings based on `localeCompare()`.

Arg     | Required? | Notes
--------|-----------|------
array   | YES       |
reverse | NO        |

---

### `core_storage_add(args)`
* Adds information and defaults of a variable that should be stored in `window.localStorage`.

Arg     | Required? | Notes
--------|-----------|------
prefix  | NO        |
storage | YES       |

---

### `core_storage_element_property(args)`
* Figures out what type of HTML element a storage value uses and how to modify it.

Arg     | Required? | Notes
--------|-----------|------
element | YES       |
key     | YES       |

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
key   | YES       |
value | YES       |

---

### `core_storage_update()`
* Updates settings inputs with current storage values.

---

### `core_tab_create(args)`
* Creates an HTML tab div and button for selecting the tab.

Arg     | Required? | Notes
--------|-----------|------
content | NO        |
default | NO        |
group   | YES       |
id      | YES       |
label   | NO        |

---

### `core_tab_switch(args)`
* Switches to a created tab.

Arg | Required? | Notes
----|-----------|------
id  | YES       |

---

### `core_time_format(args)`
* Returns a date object formatted as a string.

Arg  | Required? | Notes
-----|-----------|------
date | NO        |
diff | NO        |

---

### `core_time_from_inputs()`
* Collects date information from specific HTML elements and returns a timestamp.

---

### `core_timestamp_to_date(args)`
* Converts a timestamp to a date object.

Arg       | Required? | Notes
----------|-----------|------
timestamp | NO        |

---

### `core_two_digits(args)`
* Adds a zero before a number of it only has one digit.

Arg    | Required? | Notes
-------|-----------|------
number | YES       |

---

### `core_type(args)`
* Returns the type of a variable.

Arg  | Required? | Notes
-----|-----------|------
type | NO        |
var  | YES       |

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
ids | YES       |

---

### `core_vendor_prefix(args)`
* Handles vendor prefixing for experimental features.

Arg      | Required? | Notes
---------|-----------|------
property | YES       |
var      | YES       |