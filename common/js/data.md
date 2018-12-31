[iterami/common](https://github.com/iterami/Docs.htm/blob/gh-pages/common/README.md)/js/data.js
-----------------------------------------------------------------------------------------------

* [`data_canvas_fence_2d(args)`](#data_canvas_fence_2dargs)
* [`data_canvas_tree_2d(args)`](#data_canvas_tree_2dargs)
* [`data_webgl_tree_2d(args)`](#data_webgl_tree_2dargs)

---

### `data_canvas_fence_2d(args)`

Arg         | Default | Type
------------|---------|----------
color       | '#777'  | string
frequency   | 60      | number
id          |         | string ID
length-half | 25      | number
x           | 0       | number
y           | 0       | number

---

### `data_canvas_tree_2d(args)`

Arg         | Default                 | Type
------------|-------------------------|----------
color-base  | '#be6400'               | string
color-leaf  | '#' + core_random_hex() | string
height-base | 25                      | number
height-leaf | 75                      | number
id          |                         | string ID
width-base  | 25                      | number
width-leaf  | 75                      | number
x           | 0                       | number
y           | 0                       | number

---

### `data_webgl_tree_2d(args)`

Arg        | Default                                       | Type
-----------|-----------------------------------------------|------------------------
billboard  | false                                         | boolean false or string
color-base | [.4, .2, 0, 1, .4, .2, 0, 1, .4, .2, 0, 1]    | array of numbers
color-leaf | [.1, .3, .1, 1, .1, .3, .1, 1, .1, .3, .1, 1] | array of numbers
dx         | 0                                             | number
dy         | 0                                             | number
dz         | 0                                             | number
id         |                                               | string
x          | 0                                             | number
y          | 0                                             | number
z          | 0                                             | number
