[iterami/common](https://github.com/iterami/Docs.htm/blob/gh-pages/common/README.md)/c/core.c
---------------------------------------------------------------------------------------------

### Includes
* `<stdlib.h>`

---

* ['float core_clamp_float(const float value, const float min, const float max, const int wrap)'](#float-core_clamp_floatconst-float-value-const-float-min-const-float-max-const-int-wrap)
* ['int core_is_hexadecimal(const char character)`](#int-core_is_hexadecimalconst-char-character)
* [`int core_get_int_length(const int integer)`](#int-core_get_int_lengthconst-int-integer)
* [`char* core_iterami_path(const char *filename)`](#char-core_iterami_pathconst-char-filename)

---

### `float core_clamp_float(const float value, const float min, const float max, const int wrap)`
* Clamps a numerical value between min and max, with optional wrapping.

Arg   | Type  | Notes
------|-------|----------------------------------------------------------------------------------------
value | float | The value to clamp.
min   | float | The minimum possible value.
max   | float | The maximum possible value.
wrap  | int   | If the value should wrap. Example: 450 clamped between 0 and 360 with wrap would be 90.

---

### `int core_is_hexadecimal(const char character)`
* Checks if a character is hexadecimal. Returns 1 if yes, 0 if no.

Arg       | Type | Notes
----------|------|----------------------------
character | char | The character to check.

---

### `int core_get_int_length(const int integer)`
* Returns the length of an integer converted into a string.

Arg     | Type | Notes
--------|------|----------------------------
integer | int  | The integer value to check.

---

### `char* core_iterami_path(const char *filename)`
* Returns the absolute file path for iterami files within the `~/.iterami/` directory.

Arg      | Type  | Notes
---------|-------|-------------------------------------------------------
filename | char* | Path of the requested file, relative to `~/.iterami/`.
