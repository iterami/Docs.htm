[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/js/math.js
--------------------------------------------------------------------------------------------------------

* [`math_clamp(args)`](#math_clampargs)
* [`math_degrees_to_radians(args)`](#math_degrees_to_radiansargs)
* [`math_distance(args)`](#math_distanceargs)
* [`math_fixed_length_line(args)`](#math_fixed_length_lineargs)
* [`math_matrix_clone(args)`](#math_matrix_cloneargs)
* [`math_matrix_copy(args)`](#math_matrix_copyargs)
* [`math_matrix_create()`](#math_matrix_create)
* [`math_matrix_delete(args)`](#math_matrix_deleteargs)
* [`math_matrix_identity(args)`](#math_matrix_identityargs)
* [`math_matrix_rotate(args)`](#math_matrix_rotateargs)
* [`math_matrix_round(args)`](#math_matrix_roundargs)
* [`math_matrix_translate(args)`](#math_matrix_translateargs)
* [`math_move_2d(args)`](#math_move_2dargs)
* [`math_move_3d(args)`](#math_move_3dargs)
* [`math_point_angle(args)`](#math_point_angleargs)
* [`math_radians_to_degrees(args)`](#math_radians_to_degreesargs)
* [`math_rectangle_overlap(args)`](#math_rectangle_overlapargs)
* [`math_round(args)`](#math_roundargs)

---

### `math_clamp(args)`
* Clamps a number between two values.
* If out of bounds, either sets it to closest bound or loops to opposite bound as many times as needed.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
max      | YES       |
min      | YES       |
value    | YES       |
wrap     | NO        |

---

### `math_degrees_to_radians(args)`
* Converts a number of degrees to radians.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
degrees  | YES       |

---

### `math_distance(args)`
* Returns the distance between two two-dimensional points.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
x0       | YES       |
x1       | YES       |
y0       | YES       |
y1       | YES       |

---

### `math_fixed_length_line(args)`
* Returns the endpoint of a line between two points, where the line has a fixed length.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
length   | YES       |
x0       | YES       |
x1       | YES       |
y0       | YES       |
y1       | YES       |

---

### `math_matrix_clone(args)`
* Creates a new matrix and copies the values of an existing matrix onto it.

Arg | Required? | Notes
----|-----------|------
id  | YES       |
to  | YES       |

---

### `math_matrix_copy(args)`
* Copies all values of a matrix onto another matrix.

Arg | Required? | Notes
----|-----------|------
id  | YES       |
to  | YES       |

---

### `math_matrix_create()`
* Creates a new blank Float32Array of length 16.

---

### `math_matrix_delete(args)`
* Deletes various matricies.

Arg | Required? | Notes
----|-----------|------
ids | YES       |

---

### `math_matrix_identity(args)`
* Resets a matrix to an identity matrix.

Arg | Required? | Notes
----|-----------|------
id  | YES       |

---

### `math_matrix_rotate(args)`
* Rotates a 3D matrix.

Arg        | Required? | Notes
-----------|-----------|------
dimensions | YES       |
id         | YES       |

---

### `math_matrix_round(args)`
* Rounds the values of a matrix to the nearest integer.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
id       | YES       |

---

### `math_matrix_translate(args)`
* Translates a 3D matrix.

Arg        | Required? | Notes
-----------|-----------|------
dimensions | YES       |
id         | YES       |

---

### `math_move_2d(args)`
* Calculates movement in two dimensions.

Arg        | Required? | Notes
-----------|-----------|------
decimals   | NO        |
multiplier | NO        |
x0         | YES       |
x1         | YES       |
y0         | YES       |
y1         | YES       |

---

### `math_move_3d(args)`
* Calculates movement in three dimensions.

Arg        | Required? | Notes
-----------|-----------|------
angle      | YES       |
decimals   | NO        |
multiplier | NO        |
speed      | NO        |
strafe     | NO        |

---

### `math_point_angle(args)`
* Returns the angle between two points relative to the grid.

Arg | Required? | Notes
----|-----------|------
x0  | YES       |
x1  | YES       |
y0  | YES       |
y1  | YES       |

---

### `math_radians_to_degrees(args)`
* Converts a number of radians to degrees.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
radians  | YES       |

---

### `math_rectangle_overlap(args)`
* Checks if two rectangles are overlapping.

Arg | Required? | Notes
----|-----------|------
h0  | YES       |
h1  | YES       |
w0  | YES       |
w1  | YES       |
x0  | YES       |
x1  | YES       |
y0  | YES       |
y1  | YES       |

---

### `math_round(args)`
* Rounds a number to a specific number of decimal places.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
number   | YES       |
