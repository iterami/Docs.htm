[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/c/core.c
------------------------------------------------------------------------------------------------------

* [`int core_get_int_length(gint integer)`](#)
* [`gchar* core_iterami_path(gchar *file)`](#)

---

### `int core_get_int_length(gint integer)`
* Returns the length of an integer converted into a string.

Arg     | Type | Notes
--------|------|----------------------------
integer | gint | The integer value to check.

---

### `gchar* core_iterami_path(gchar *file)`
* Returns the absolute file path for iterami files within the `~/.iterami/` directory.

Arg  | Type   | Notes
-----|--------|-------------------------------------------------------
file | gchar* | Path of the requested file, relative to `~/.iterami/`.
