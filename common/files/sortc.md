[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/c/sort.c
------------------------------------------------------------------------------------------------------

* ['int sort_compare_strings(const void* a, const void* b)`](#int-sort_compare_stringsconst-void-a-const-void-b)

---

### `int sort_compare_strings(const void* a, const void* b)`
* Used in `qsort()` rather than directly called.
* Compares two strings.
* Returns a value: 0 = strings equal, < 0 = a is earlier than b, and > 0 = a is later than b.

Arg | Type  | Notes
----|-------|----------------------------
a   | void* |
b   | void* |
