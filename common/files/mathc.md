[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/c/math.c
------------------------------------------------------------------------------------------------------

* [`float math_degrees_to_radians(const float degrees)`](#float-math_degrees_to_radiansconst-float-degrees)
* [`void math_matrix_copy(float *from, float *to)`](#void-math_matrix_copyfloat-from-float-to)
* [`void math_matrix_identity(float *matrix)`](#void-math_matrix_identityfloat-matrix)
* [`void math_matrix_perspective(float *matrix, const int width, const int height)`](#void-math_matrix_perspectivefloat-matrix-const-int-width-const-int-height)
* [`void math_matrix_rotate(float *matrix, const float x, const float y, const float z)`](#void-math_matrix_rotatefloat-matrix-const-float-x-const-float-y-const-float-z)
* [`void math_matrix_translate(float *matrix, const float x, const float y, const float z)`](#void-math_matrix_translatefloat-matrix-const-float-x-const-float-y-const-float-z)
* [`float math_radians_to_degrees(const float radians)`](#float-math_radians_to_degreesconst-float-radians)

---

### `float math_degrees_to_radians(const float degrees)`
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

### `void math_matrix_perspective(float *matrix, const int width, const int height)`
* Set up a perspective matrix based on window height and width.

Arg    | Type   | Notes
-------|--------|------
matrix | float* |
width  | int    |
height | int    |

---

### `void math_matrix_rotate(float *matrix, const float x, const float y, const float z)`
* Rotate a matrix by a specific amount of degrees.

Arg    | Type   | Notes
-------|--------|------
matrix | float* |
x      | float  |
y      | float  |
z      | float  |

---

### `void math_matrix_translate(float *matrix, const float x, const float y, const float z)`
* Translate a matrix by a specific amount.

Arg    | Type   | Notes
-------|--------|------
matrix | float* |
x      | float  |
y      | float  |
z      | float  |

---

### `float math_radians_to_degrees(const float radians)`
* Converts radians to degrees.

Arg     | Type  | Notes
--------|-------|------
radians | float |
