[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/c/core.c
------------------------------------------------------------------------------------------------------

* ['int core_is_hexadecimal(const char character)`](#int-core_is_hexadecimalconst-char-character)
* [`int core_get_int_length(int integer)`](#int-core_get_int_lengthint-integer)
* [`gchar* core_iterami_path(gchar *file)`](#gchar-core_iterami_pathgchar-file)

---

### `int core_is_hexadecimal(const char character)`
* Checks if a character is hexadecimal. Returns 1 if yes, 0 if no.

Arg       | Type | Notes
----------|------|----------------------------
character | char | The character to check.

---

### `int core_get_int_length(int integer)`
* Returns the length of an integer converted into a string.

Arg     | Type | Notes
--------|------|----------------------------
integer | int  | The integer value to check.

---

### `gchar* core_iterami_path(gchar *file)`
* Returns the absolute file path for iterami files within the `~/.iterami/` directory.

Arg  | Type   | Notes
-----|--------|-------------------------------------------------------
file | gchar* | Path of the requested file, relative to `~/.iterami/`.
