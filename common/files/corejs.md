[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/js/core.js
--------------------------------------------------------------------------------------------------------

* [`core_args(args)`](#core_argsargs)
* [`core_audio_create(args)`](#core_audio_createargs)
* [`core_audio_node_create(args)`](#core_audio_node_createargs)
* [`core_audio_onended(args)`](#core_audio_onendedargs)
* [`core_audio_source_create(args)`](#core_audio_source_createargs)
* [`core_audio_start(args)`](#core_audio_startargs)
* [`core_audio_stop(args)`](#core_audio_stopargs)
* [`core_audio_stop_all(args)`](#core_audio_stop_allargs)
* [`core_call(args)`](#core_callargs)
* [`core_entity_create(args)`](#core_entity_createargs)
* [`core_entity_handle_default(args)`](#core_entity_handle_defaultargs)
* [`core_entity_remove(args)`](#core_entity_removeargs)
* [`core_entity_remove_all(args)`](#core_entity_remove_allargs)
* [`core_entity_set(args)`](#core_entity_setargs)
* [`core_escape()`](#core_escape)
* [`core_events_bind(args)`](#core_events_bindargs)
* [`core_events_keyinfo(event)`](#core_events_keyinfoevent)
* [`core_events_rebind(args)`](#core_events_rebindargs)
* [`core_events_todoloop()`](#core_events_todoloop)
* [`core_group_add(args)`](#core_group_addargs)
* [`core_group_modify(args)`](#core_group_modifyargs)
* [`core_group_move(args)`](#core_group_moveargs)
* [`core_group_remove(args)`](#core_group_removeargs)
* [`core_group_remove_all(args)`](#core_group_remove_allargs)
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
* [`core_html(args)`](#core_htmlargs)
* [`core_html_modify(args)`](#core_html_modifyargs)
* [`core_image(args)`](#core_imageargs)
* [`core_init()`](#core_init)
* [`core_interval_animationFrame(args)`](#core_interval_animationframeargs)
* [`core_interval_modify(args)`](#core_interval_modifyargs)
* [`core_interval_pause(args)`](#core_interval_pauseargs)
* [`core_interval_pause_all()`](#core_interval_pause_all)
* [`core_interval_remove(args)`](#core_interval_removeargs)
* [`core_interval_remove_all()`](#core_interval_remove_all)
* [`core_interval_resume(args)`](#core_interval_resumeargs)
* [`core_interval_resume_all()`](#core_interval_resume_all)
* [`core_keys_updatebinds(args)`](#core_keys_updatebindsargs)
* [`core_mouse_updatebinds(args)`](#core_mouse_updatebindsargs)
* [`core_random_boolean(args)`](#core_random_booleanargs)
* [`core_random_hex(args)`](#core_random_hexargs)
* [`core_random_integer(args)`](#core_random_integerargs)
* [`core_random_key(args)`](#core_random_keyargs)
* [`core_random_number(args)`](#core_random_numberargs)
* [`core_random_rgb()`](#core_random_rgb)
* [`core_random_string(args)`](#core_random_stringargs)
* [`core_repo_init(args)`](#core_repo_initargs)
* [`core_requestpointerlock(args)`](#core_requestpointerlockargs)
* [`core_storage_add(args)`](#core_storage_addargs)
* [`core_storage_element_property(args)`](#core_storage_element_propertyargs)
* [`core_storage_reset(args)`](#core_storage_resetargs)
* [`core_storage_save(args)`](#core_storage_saveargs)
* [`core_storage_type_convert(args)`](#core_storage_type_convertargs)
* [`core_storage_update(args)`](#core_storage_updateargs)
* [`core_tab_create(args)`](#core_tab_createargs)
* [`core_tab_switch(args)`](#core_tab_switchargs)
* [`core_type(args)`](#core_typeargs)
* [`core_uid()`](#core_uid)
* [`core_uid_create()`](#core_uid_create)
* [`core_ui_update(args)`](#core_ui_updateargs)
* [`core_vendor_prefix(args)`](#core_vendor_prefixargs)

---

### `core_args(args)`
* Utility function for handling usage and default values of the one arguments object.

---

### `core_audio_create(args)`

---

### `core_audio_node_create(args)`

---

### `core_audio_onended(args)`

---

### `core_audio_source_create(args)`

---

### `core_audio_start(args)`

---

### `core_audio_stop(args)`

---

### `core_audio_stop_all(args)`

---

### `core_call(args)`
* Calls a function if it exists. Used to prevent errors caused by undefined functions.

---

### `core_entity_create(args)`
* Creates an entity and provides it with additional properties based on entity defaults and functions.

---

### `core_entity_handle_default(args)`
* Makes sure entity property defaults and groups are handled properly.

---

### `core_entity_remove(args)`
* Deletes an entity and removes it from groups.

---

### `core_entity_remove_all(args)`
* Deletes all entities within a specific group.

---

### `core_entity_set(args)`
* Creates a new entity type that can then be created.

---

### `core_escape()`
* Pressing escape opens or closes the menu.
* Pauses or resumes intervals depending on state.
* Calls optional repository-specific `repo_escape()` function.

---

### `core_events_bind(args)`
* Updates bindings to various events, including optional clearing.

---

### `core_events_keyinfo(event)`
* Returns keycode and character of fired keyboard event.

---

### `core_events_rebind(args)`

---

### `core_events_todoloop()`
* Function that runs looping keyboard and mouse event todos.

---

### `core_group_add(args)`
* Adds entities to a group and creates the group if it does not exist.

---

### `core_group_modify(args)`
* Runs code that affects every entity within a group.

---

### `core_group_move(args)`
* Removes an entity from a group and adds it to a different group.

---

### `core_group_remove(args)`
* Remove entities from one specific group.

---

### `core_group_remove_all(args)`
* Removes entities fromm all groups.

---

### `core_handle_beforeunload(event)`

---

### `core_handle_contextmenu(event)`

---

### `core_handle_defaults(args)`

---

### `core_handle_event(args)`

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

---

### `core_html(args)`
* Returns an HTML element and optionally adds it to a parent.

---

### `core_html_modify(args)`
* Assigns properties to an HTML element if it exists.

---

### `core_image(args)`
* Creates and loads an image.

---

### `core_init()`
* Sets up universal project components, such as the core menu and events.

---

### `core_interval_animationFrame(args)`
* Continues running animation frames.

---

### `core_interval_modify(args)`
* Creates or modifies an animation frame, interval, or timeout.

---

### `core_interval_pause(args)`
* Pauses an animation frame, interval, or timeout.

---

### `core_interval_pause_all()`
* Pauses all animation frames, intervals, and timeouts.

---

### `core_interval_remove(args)`
* Pauses and removes an animation frame, interval, or timeout.

---

### `core_interval_remove_all()`
* Pauses and removes all animation frames, intervals, and timeouts.

---

### `core_interval_resume(args)`
* Resumes an animation frame, interval, or timeout.

---

### `core_interval_resume_all()`
* Reumes all animation frames, intervals, and timeouts.

---

### `core_keys_updatebinds(args)`

---

### `core_mouse_updatebinds(args)`

---

### `core_random_boolean(args)`
* Generates a random boolean with optional probability manipulation.

---

### `core_random_hex(args)`
* Generates a random hexadecimal string of length six.

---

### `core_random_integer(args)`
* Generates a random integer in a range.

---

### `core_random_key(args)`
* Returns a random object key.

---

### `core_random_number(args)`
* Generates a random number in a range.

---

### `core_random_rgb()`
* Generates random red, green, and blue as an integer between 0 and 256.

---

### `core_random_string(args)`
* Generates a random string from a string of available characters.

---

### `core_repo_init(args)`
* Called by repository-specific `repo_init()` function.
* Sets up various repository-specific things needed for project function.

---

### `core_requestpointerlock(args)`

---

### `core_storage_add(args)`
* Adds information and defaults of a variable that should be stored in `window.localStorage`.

---

### `core_storage_element_property(args)`
* Figures out what type of HTML element a storage value uses and how to modify it.

---

### `core_storage_reset(args)`
* Resets certain types of storage values to their original defaults.

---

### `core_storage_save(args)`
* Saves current settings input values as new storage values.

---

### `core_storage_type_convert(args)`
* Converts variable types depending on storage value type.

---

### `core_storage_update(args)`
* Updates settings inputs with current storage values.

---

### `core_tab_create(args)`
* Creates an HTML tab div and button for selecting the tab.

---

### `core_tab_switch(args)`
* Switches to a created tab.

---

### `core_type(args)`
* Returns the type of a variable.

---

### `core_uid()`
* Returns a unique ID and adds it to a list of created UIDs.

---

### `core_uid_create()`
* Creates a UID string that may not be unqiue.

---

### `core_ui_update(args)`
* Updates HTML element values depending on type, but only if the value is new.

---

### `core_vendor_prefix(args)`
* Handles vendor prefixing for experimental features.
