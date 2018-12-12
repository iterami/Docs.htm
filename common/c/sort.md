[iterami/common](https://github.com/iterami/Docs.htm/blob/gh-pages/common/README.md)/c/sort.c
---------------------------------------------------------------------------------------------

* ['int sort_compare_ints_asc(const void* a, const void* b)`](#int-sort_compare_ints_ascconst-void-a-const-void-b)
* ['int sort_compare_ints_desc(const void* a, const void* b)`](#int-sort_compare_ints_descconst-void-a-const-void-b)
* ['int sort_compare_strings_asc(const void* a, const void* b)`](#int-sort_compare_strings_ascconst-void-a-const-void-b)
* ['int sort_compare_strings_desc(const void* a, const void* b)`](#int-sort_compare_strings_ascconst-void-a-const-void-b)

---w

### `int sort_compare_ints_asc(const void* a, const void* b)`
* Compares two integers.
* Used in `qsort()` rather than directly called.
* Returns a value:
  * 0 = integers are equal
  * less than 0 = a is less than b
  * greater than 0 = a is greater than b

Arg | Type  | Notes
----|-------|----------------------------
a   | void* |
b   | void* |

---

### `int sort_compare_ints_desc(const void* a, const void* b)`
* Compares 2 integers.
* Used in `qsort()` rather than directly called.
* Returns a value:
  * =0 = integers are equal
  * less than 0 = b is less than a
  * greater than 0 = b is greater than a

Arg | Type  | Notes
----|-------|----------------------------
a   | void* |
b   | void* |

---

### `int sort_compare_strings_asc(const void* a, const void* b)`
* Used in `qsort()` rather than directly called.
* Compares 2 strings.
* Returns a value:
  * =0 = strings are equal
  * less than 0 = a is earlier than b
  * greater than 0 = a is later than b

Arg | Type  | Notes
----|-------|----------------------------
a   | void* |
b   | void* |

---

### `int sort_compare_strings_desc(const void* a, const void* b)`
* Used in `qsort()` rather than directly called.
* Compares 2 strings.
* Returns a value:
  * =0 = strings are equal
  * less than 0 = b is earlier than a
  * greater than 0 = b is later than a

Arg | Type  | Notes
----|-------|----------------------------
a   | void* |
b   | void* |
