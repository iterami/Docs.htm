[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/c/core.c
------------------------------------------------------------------------------------------------------

* [`int core_get_int_length(int integer)`](#int-core_get_int_lengthint-integer)
* [`gchar* core_iterami_path(gchar *file)`](#gchar-core_iterami_pathgchar-file)

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
