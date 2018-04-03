[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/c/math.c
------------------------------------------------------------------------------------------------------

* [`float math_degrees_to_radians(float degrees)`](#float-math_degrees_to_radiansfloat-degrees)
* [`void math_matrix_copy(float *from, float *to)`](#void-math_matrix_copyfloat-from-float-to)
* [`void math_matrix_identity(float *matrix)`](#void-math_matrix_identityfloat-matrix)
* [`void math_matrix_perspective(float *matrix, gint width, gint height)`](#void-math_matrix_perspectivefloat-matrix-gint-width-gint-height)
* [`void math_matrix_rotate(float *matrix, float x, float y, float z)`](#void-math_matrix_rotatefloat-matrix-float-x-float-y-float-z)
* [`void math_matrix_translate(float *matrix, float x, float y, float z)`](#void-math_matrix_translatefloat-matrix-float-x-float-y-float-z)
* [`float math_radians_to_degrees(float radians)`](#float-math_radians_to_degreesfloat-radians)

---

### `float math_degrees_to_radians(float degrees)`
* Converts degrees to radians.

Arg     | Type  | Notes
--------|-------|------
degrees | float |

---

### `void math_matrix_copy(float *from, float *to)`
* Copy the values in a matrix into another matrix.

Arg  | Type   | Notes
-----|--------|------
from | float* |
to   | float* |

---

### `void math_matrix_identity(float *matrix)`
* Reset values in a matrix to those of an identity matrix.

Arg    | Type   | Notes
-------|--------|------
matrix | float* |

---

### `void math_matrix_perspective(float *matrix, gint width, gint height)`
* Set up a perspective matrix based on window height and width.

Arg    | Type   | Notes
-------|--------|------
matrix | float* |
width  | gint   |
height | gint   |

---

### `void math_matrix_rotate(float *matrix, float x, float y, float z)`
* Rotate a matrix by a specific amount of degrees.

Arg    | Type   | Notes
-------|--------|------
matrix | float* |
x      | float  |
y      | float  |
z      | float  |

---

### `void math_matrix_translate(float *matrix, float x, float y, float z)`
* Translate a matrix by a specific amount.

Arg    | Type   | Notes
-------|--------|------
matrix | float* |
x      | float  |
y      | float  |
z      | float  |

---

### `float math_radians_to_degrees(float radians)`
* Converts radians to degrees.

Arg     | Type  | Notes
--------|-------|------
radians | float |
