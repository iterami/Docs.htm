[iterami/common](https://github.com/iterami/Docs.htm/blob/gh-pages/common/README.md)/js/prefabs/canvas.js
---------------------------------------------------------------------------------------------------------

* https://github.com/iterami/common/blob/gh-pages/js/prefabs/canvas.js
* https://github.com/iterami/Docs.htm/blob/gh-pages/common/js/canvas.md

---

* No globals.
* [`prefabs_canvas_fence_2d(args)`](#prefabs_canvas_fence_2dargs)
* [`prefabs_canvas_tree_2d(args)`](#prefabs_canvas_tree_2dargs)

---

### `prefabs_canvas_fence_2d(args)`

Arg         | Default | Type
------------|---------|----------
color       | '#777'  | string
frequency   | 60      | number
id          |         | string ID
length-half | 25      | number
x           | 0       | number
y           | 0       | number

---

### `prefabs_canvas_tree_2d(args)`

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
