[iterami/common](https://github.com/iterami/Docs.htm/blob/gh-pages/common/README.md)/js/prefabs/webgl.js
--------------------------------------------------------------------------------------------------------

* https://github.com/iterami/common/blob/gh-pages/js/prefabs/webgl.js
* https://github.com/iterami/Docs.htm/blob/gh-pages/common/js/webgl.md

---

* No globals.
* [`prefabs_webgl_cuboid(args)`](#prefabs_webgl_cuboidargs)
* [`prefabs_webgl_cuboid_tree(args)`](#prefabs_webgl_cuboid_treeargs)
* [`prefabs_webgl_lines_tree(args)`](#prefabs_webgl_lines_treeargs)
* [`prefabs_webgl_skybox(args)`](#prefabs_webgl_skyboxargs)
* [`prefabs_webgl_tree_2d(args)`](#prefabs_webgl_tree_2dargs)

---

### `prefabs_webgl_cuboid(args)`
* Creates a cuboid prefab with specified properties.
* Translation is the center of the cuboid.

Arg           | Default            | Type
--------------|--------------------|--------------------
all           | {}                 | object
back          | {}                 | object
bottom        | {}                 | object
character     | webgl_character_id | string ID
front         | {}                 | object
groups        | []                 | array of string IDs
left          | {}                 | object
prefix        | core_id_count      | number or string
properties    | {}                 | object
random-colors | false              | boolean
right         | {}                 | object
size-x        | 1                  | number
size-y        | 1                  | number
size-z        | 1                  | number
tp[           | {}                 | object
translate-x   | 0                  | number
translate-y   | 0                  | number
translate-z   | 0                  | number

---

### `prefabs_webgl_cuboid_tree(args)`
* Creates a cuboid tree prefab with the specified properties.
* Translation is the center of the bottom face of the trunk.

Arg                  | Default            | Type
---------------------|--------------------|-----------------
character            | webgl_character_id | string ID
collision-leaves     | true               | boolean
collision-trunk      | true               | boolean
leaves-size-x        | 10                 | number
leaves-size-y        | 10                 | number
leaves-size-z        | 10                 | number
prefix               | core_id_count      | number or string
translate-x          | 0                  | number
translate-y          | 0                  | number
translate-z          | 0                  | number
trunk-size-x         | 2                  | number
trunk-size-y         | 10                 | number
trunk-size-z         | 2                  | number
vertex-colors-leaves | array[]            | array of numbers
vertex-colors-trunk  | array[]            | array of numbers

---

### `prefabs_webgl_lines_tree(args)`
* Creates a lines tree prefab with the specified properties.
* Translation is the center of the bottom of the trunk.

Arg                  | Default            | Type
---------------------|--------------------|-----------------
character            | webgl_character_id | string ID
prefix               | core_id_count      | number or string
translate-x          | 0                  | number
translate-y          | 0                  | number
translate-z          | 0                  | number
trunk-branch-max     | 4                  | number
trunk-branch-min     | 0                  | number
trunk-count-max      | 10                 | number
trunk-count-min      | 1                  | number
trunk-length         | 10                 | number
trunk-width-max      | 2                  | number
trunk-width-min      | 1                  | number
vertex-colors-leaves | array[]            | array of numbers
vertex-colors-trunk  | array[]            | array of numbers

---

### `prefabs_webgl_skybox(args)`
* Creates a skybox prefab around the `webgl_player_id` camera.

Arg                 | Default            | Type
--------------------|--------------------|----------------------------------
bottom-color-bottom | false              | boolean false or array of numbers
bottom-color-top    | false              | boolean false or array of numbers
character           | webgl_character_id | string ID
prefix              | core_id_count      | number or string
random-colors       | false              | boolean
rotate-x            | 0                  | number
rotate-y            | 0                  | number
rotate-z            | 0                  | number
sides               | 3                  | number
size                | 99                 | number
top-color-bottom    | false              | boolean false or array of numbers
top-color-top       | false              | boolean false or array of numbers

---

### `prefabs_webgl_tiles(args)`
* Creates a randomized assortment of tile prefabs.

Arg         | Default       | Type
------------|---------------|----------------------
prefix      | core_id_count | number or string
rotate-x    | 0             | number
rotate-y    | 0             | number
rotate-z    | 0             | number
tiles       |               | array of tile objects
tiles-max   | 5             | number
tiles-min   | 1             | number
translate-x | 0             | number
translate-y | 0             | number
translate-z | 0             | number

---

### `prefabs_webgl_tree_2d(args)`

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
