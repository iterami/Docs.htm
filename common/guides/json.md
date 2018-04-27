[iterami/common](https://github.com/iterami/common) JSON Documentation
----------------------------------------------------------------------

Table of Contents:
* [3D JSON Level Format](#3d-json-level-format)

---

### 3D JSON Level Format

* Must be valid JSON.
* Optional properties can be removed.

```json
{
  "clearcolor": [
    0,
    0,
    0,
    1
  ],
  "entities": [
    {
      "alpha": 1,
      "billboard": false,
      "draw": true,
      "draw_type": "TRIANGLE_STRIP",
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,
      "translate-x": 0,
      "translate-y": -1,
      "translate-z": 0,
      "vertex_colors": [
        1, 0, 0, 1,
        0, 1, 0, 1,
        0, 0, 1, 1,
        1, 1, 1, 1
      ],
      "vertices": [
        10, 0, -10, 1,
        -10, 0, -10, 1,
        10, 0, 10, 1,
        -10, 0, 10, 1
      ]
    }
  ]
}
```
Version with JSON-invalidating comments:
```
{
  // Optional array of numbers between 0 and 1 indicting the clear color.
  // Ordering is: red, green, blue, alpha
  "clearcolor": [
    0,
    0,
    0,
    1
  ],

  // Required array of any number of entities.
  "entities": [
    {
       // Optional global alpha value for all vertices.
      "alpha": 1,

       // Optional. If rotate-y will change to make entity face camera.
      "billboard": false,

      // Optional. If the entity should be drawn or not.
      "draw": true,

      // Optional. How the vertices should be drawn.
      "draw_type": "TRIANGLE_STRIP",

      // Optional rotation of entity.
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,

      // Optional position of entity relative to `0, 0, 0`.
      "translate-x": 0,
      "translate-y": 0,
      "translate-z": 0,

      // Required array of numbers between 0 and 1 indicating the color of each vertex.
      // Each row is: red, green, blue, alpha
      "vertex_colors": [
        1, 0, 0, 1,
        0, 1, 0, 1,
        0, 0, 1, 1,
        1, 1, 1, 1
      ],

      // Required array of numbers indicating the position of each vertex,
      // relative to the position of the entity.
      "vertices": [
        10, 0, -10, 1,
        -10, 0, -10, 1,
        10, 0, 10, 1,
        -10, 0, 10, 1
      ]
    }
  ]
}
```
