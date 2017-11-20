[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/js/time.js
--------------------------------------------------------------------------------------------------------

* [`time_date_to_timestamp(args)`](#time_date_to_timestampargs)
* [`time_diff(args)`](#time_diffargs)
* [`time_format_date(args)`](#time_format_dateargs)
* [`time_from_inputs()`](#time_from_inputs)
* [`time_timestamp_to_date(args)`](#time_timestamp_to_dateargs)
* [`time_two_digits(args)`](#time_two_digitsargs)

---

### `time_date_to_timestamp(args)`
* Converts a date object into a timestamp.

Arg  | Required? | Notes
-----|-----------|------
date | NO        |

---

### `time_diff(args)`
* Calculates the difference between two times.

Arg    | Required? | Notes
-------|-----------|------
now    | NO        |
target | YES       |

---

### `time_format_date(args)`
* Returns a date object formatted as a string.

Arg  | Required? | Notes
-----|-----------|------
date | NO        |
diff | NO        |

---

### `time_from_inputs()`
* Collects date information from specific HTML elements and returns a timestamp.

---

### `time_timestamp_to_date(args)`
* Converts a timestamp to a date object.

Arg       | Required? | Notes
----------|-----------|------
timestamp | NO        |

---

### `time_two_digits(args)`
* Handles display date information in a minimum of two digits.

Arg    | Required? | Notes
-------|-----------|------
number | YES       |
