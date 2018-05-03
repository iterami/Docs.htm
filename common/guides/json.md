[iterami/common](https://github.com/iterami/common) JSON Documentation
----------------------------------------------------------------------

Table of Contents:
* [3D JSON Level Format](#3d-json-level-format)

---

### 3D JSON Level Format

* Must be valid JSON.
* Must follow the order of the example below.
* Optional properties can be removed.

```json
{
  "clearcolor-alpha": 1,
  "clearcolor-blue": 0,
  "clearcolor-green": 0,
  "clearcolor-red": 0,
  "groups": [
    "first-group",
    "second-group"
  ],
  "entities": [
    {
      "alpha": 1,
      "billboard": false,
      "draw": true,
      "draw-type": "TRIANGLE_STRIP",
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,
      "translate-x": 0,
      "translate-y": -1,
      "translate-z": 0,
      "vertex-colors": [
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
      ],
      "groups": [
        "first-group",
        "second-group"
      ]
    }
  ]
}
```
Version with JSON-invalidating comments:
```
{
  // Optional clear color alpha value, between 0 and 1 inclusive.
  "clearcolor-alpha": 1,

  // Optional clear color blue value, between 0 and 1 inclusive.
  "clearcolor-blue": 0,

  // Optional clear color green value, between 0 and 1 inclusive.
  "clearcolor-green": 0,

  // Optional clear color red value, between 0 and 1 inclusive.
  "clearcolor-red": 0,

  // Optional array of groups to create.
  // Do not include automatically created groups, such as "_depthfalse".
  "groups": [
    "first-group",
    "second-group"
  ],

  // Required array of entities to create.
  "entities": [
    {
      // Optional global vertex alpha value, between 0 and 1 inclusive.
      "alpha": 1,

      // Optional. If rotate-y will change to make entity face the camera.
      "billboard": false,

      // Optional. If the entity should be drawn or not.
      "draw": true,

      // Optional. How the vertices should be drawn.
      "draw-type": "TRIANGLE_STRIP",

      // Optional rotation of entity in degrees between 0 inclusive and 360 exclusive.
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,

      // Optional translation of entity relative to `0, 0, 0`.
      "translate-x": 0,
      "translate-y": 0,
      "translate-z": 0,

      // Required array of numbers between 0 and 1 inclusive, indicating the color of each vertex.
      // Each row is: red, green, blue, alpha
      "vertex-colors": [
        1, 0, 0, 1,
        0, 1, 0, 1,
        0, 0, 1, 1,
        1, 1, 1, 1
      ],

      // Required array of numbers indicating the translation of each vertex,
      //   relative to the entity translation.
      // Each row is: x, y, z, w
      "vertices": [
        10, 0, -10, 1,
        -10, 0, -10, 1,
        10, 0, 10, 1,
        -10, 0, 10, 1
      ],

      // Optional. Array of groups this entity will be added to. Groups must exist.
      "groups": [
        "first-group",
        "second-group"
      ]
    }
  ]
}
```
