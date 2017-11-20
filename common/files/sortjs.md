[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/js/sort.js
--------------------------------------------------------------------------------------------------------

* [`sort_custom(args)`](#sort_customargs)
* [`sort_numbers(args)`](#sort_numbersargs)
* [`sort_random(args)`](#sort_randomargs)
* [`sort_property(args)`](#sort_propertyargs)
* [`sort_strings(args)`](#sort_stringsargs)

---

### `sort_custom(args)`
* Sorts an array according to custom sorting rules.
* Optionally reverses the array after sorting.

Arg     | Required? | Notes
--------|-----------|------
array   | YES       |
reverse | NO        |
todo    | YES       |

---

### `sort_numbers(args)`
* Sorts numbers from smallest to biggest.

Arg     | Required? | Notes
--------|-----------|------
array   | YES       |
reverse | NO        |

---

### `sort_random(args)`
* Sorts an array randomly. Cannot be reversed.

Arg     | Required? | Notes
--------|-----------|------
array   | YES       |

---

### `sort_property(args)`
* Sort an array based on some property.

Arg      | Required? | Notes
---------|-----------|------
array    | YES       |
reverse  | NO        |
property | YES       |

---

### `sort_strings(args)`
* Sort strings based on `localeCompare()`.

Arg     | Required? | Notes
--------|-----------|------
array   | YES       |
reverse | NO        |
