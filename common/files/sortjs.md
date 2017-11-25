[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/js/sort.js
--------------------------------------------------------------------------------------------------------

* [`core_sort_custom(args)`](#core_sort_customargs)
* [`core_sort_numbers(args)`](#core_sort_numbersargs)
* [`core_sort_random(args)`](#core_sort_randomargs)
* [`core_sort_property(args)`](#core_sort_propertyargs)
* [`core_sort_strings(args)`](#core_sort_stringsargs)

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
