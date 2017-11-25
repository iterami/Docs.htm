[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/js/math.js
--------------------------------------------------------------------------------------------------------

* [`core_clamp(args)`](#core_clampargs)
* [`core_degrees_to_radians(args)`](#core_degrees_to_radiansargs)
* [`core_distance(args)`](#core_distanceargs)
* [`core_fixed_length_line(args)`](#core_fixed_length_lineargs)
* [`core_matrix_clone(args)`](#core_matrix_cloneargs)
* [`core_matrix_copy(args)`](#core_matrix_copyargs)
* [`core_matrix_create()`](#core_matrix_create)
* [`core_matrix_delete(args)`](#core_matrix_deleteargs)
* [`core_matrix_identity(args)`](#core_matrix_identityargs)
* [`core_matrix_rotate(args)`](#core_matrix_rotateargs)
* [`core_matrix_round(args)`](#core_matrix_roundargs)
* [`core_matrix_translate(args)`](#core_matrix_translateargs)
* [`core_move_2d(args)`](#core_move_2dargs)
* [`core_move_2d_diagonal(args)`](#core_move_2d_diagonalargs)
* [`core_move_3d(args)`](#core_move_3dargs)
* [`core_point_angle(args)`](#core_point_angleargs)
* [`core_radians_to_degrees(args)`](#core_radians_to_degreesargs)
* [`core_rectangle_overlap(args)`](#core_rectangle_overlapargs)
* [`core_round(args)`](#core_roundargs)

---

### `core_clamp(args)`
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

### `core_degrees_to_radians(args)`
* Converts a number of degrees to radians.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
degrees  | YES       |

---

### `core_distance(args)`
* Returns the distance between two two-dimensional points.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
x0       | YES       |
x1       | YES       |
y0       | YES       |
y1       | YES       |

---

### `core_fixed_length_line(args)`
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

### `core_matrix_clone(args)`
* Creates a new matrix and copies the values of an existing matrix onto it.

Arg | Required? | Notes
----|-----------|------
id  | YES       |
to  | YES       |

---

### `core_matrix_copy(args)`
* Copies all values of a matrix onto another matrix.

Arg | Required? | Notes
----|-----------|------
id  | YES       |
to  | YES       |

---

### `core_matrix_create()`
* Creates a new blank Float32Array of length 16.

---

### `core_matrix_delete(args)`
* Deletes various matricies.

Arg | Required? | Notes
----|-----------|------
ids | YES       |

---

### `core_matrix_identity(args)`
* Resets a matrix to an identity matrix.

Arg | Required? | Notes
----|-----------|------
id  | YES       |

---

### `core_matrix_rotate(args)`
* Rotates a 3D matrix.

Arg        | Required? | Notes
-----------|-----------|------
dimensions | YES       |
id         | YES       |

---

### `core_matrix_round(args)`
* Rounds the values of a matrix to the nearest integer.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
id       | YES       |

---

### `core_matrix_translate(args)`
* Translates a 3D matrix.

Arg        | Required? | Notes
-----------|-----------|------
dimensions | YES       |
id         | YES       |

---

### `core_move_2d(args)`
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

### `core_move_2d_diagonal(args)`
* Handles reduction of movement speed when moving diagonally.

Arg   | Required? | Notes
------|-----------|------
dx    | YES       |
dy    | YES       |
speed | YES       |

---

### `core_move_3d(args)`
* Calculates movement in three dimensions.

Arg        | Required? | Notes
-----------|-----------|------
angle      | YES       |
decimals   | NO        |
multiplier | NO        |
speed      | NO        |
strafe     | NO        |

---

### `core_point_angle(args)`
* Returns the angle between two points relative to the grid.

Arg | Required? | Notes
----|-----------|------
x0  | YES       |
x1  | YES       |
y0  | YES       |
y1  | YES       |

---

### `core_radians_to_degrees(args)`
* Converts a number of radians to degrees.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
radians  | YES       |

---

### `core_rectangle_overlap(args)`
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

### `core_round(args)`
* Rounds a number to a specific number of decimal places.

Arg      | Required? | Notes
---------|-----------|------
decimals | NO        |
number   | YES       |
