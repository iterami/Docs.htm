[iterami/common](https://github.com/iterami/common) JSON Documentation
----------------------------------------------------------------------

* [3D JSON Level Format](#3d-json-level-format):
  * [Example Character Properties](#example-character-properties)
  * [Commented Explanation](#commented-explanation)
  * [Commented Character Properties](#commented-character-properties)

---

### 3D JSON Level Format

* Must be valid JSON. Levels listed below with comments are not valid.
* Must follow the order of the example below.
* Optional properties can be removed.

```json
{
  "ambient-blue": 1,
  "ambient-green": 1,
  "ambient-red": 1,
  "character": false,
  "clearcolor-alpha": 1,
  "clearcolor-blue": 0,
  "clearcolor-green": 0,
  "clearcolor-red": 0,
  "directional-blue": 1,
  "directional-green": 1,
  "directional-red": 1,
  "directional-vector": false,
  "fog": -0.0001,
  "gravity-acceleration": -0.05,
  "gravity-max": -1,
  "groups": [
    "example-group-0",
    "example-group-1"
  ],
  "entities": [
    {
      "id": "example-entity-0",
      "alpha": 1,
      "billboard": false,
      "collides": false,
      "collision": false,
      "draw": true,
      "draw-type": "TRIANGLE_STRIP",
      "dx": 0,
      "dy": 0,
      "dz": 0,
      "gravity": false,
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,
      "scale-x": 1,
      "scale-y": 1,
      "scale-z": 1,
      "skybox": false,
      "texture": "_default",
      "translate-x": 0,
      "translate-y": -1,
      "translate-z": 0,
      "vertex-colors": [
        1, 1, 1, 1,
        1, 0, 0, 1,
        0, 1, 0, 1,
        0, 0, 1, 1
      ],
      "vertices": [
        10, -2, 10, 1,
        10, -2, -10, 1,
        -10, -2, -10, 1,
        -10, -2, 10, 1
      ],
      "groups": [
        "example-group-0",
        "example-group-1"
      ]
    }
  ]
}
```

#### Example Character Properties

```json
  "character": {
    "camera-rotate-x": 0,
    "camera-rotate-y": 0,
    "camera-rotate-z": 0,
    "camera-speed": 0.1,
    "camera-translate-x": 0,
    "camera-translate-y": 0,
    "camera-translate-z": 0,
    "camera-type": "free",
    "camera-zoom-current": 0,
    "camera-zoom-max": 10,
    "entities": [],
    "experience": 0,
    "level": -1,
  },
```

#### Commented Explanation

```
{
  // Optional ambient light alpha value, between 0 and 1 inclusive.
  "ambient-alpha": 1,

  // Optional ambient light blue value, between 0 and 1 inclusive.
  "ambient-blue": 1,

  // Optional ambient light green value, between 0 and 1 inclusive.
  "ambient-green": 1,

  // Optional ambient light red value, between 0 and 1 inclusive.
  "ambient-red": 1,

  // Optional character properties, or false.
  // The `Commented Character Properties` section has more info.
  "character": false,

  // Optional clear color alpha value, between 0 and 1 inclusive.
  "clearcolor-alpha": 1,

  // Optional clear color blue value, between 0 and 1 inclusive.
  "clearcolor-blue": 0,

  // Optional clear color green value, between 0 and 1 inclusive.
  "clearcolor-green": 0,

  // Optional clear color red value, between 0 and 1 inclusive.
  "clearcolor-red": 0,

  // Optional directional light alpha value, between 0 and 1 inclusive.
  "directional-alpha": 1,

  // Optional directional light blue value, between 0 and 1 inclusive.
  "directional-blue": 1,

  // Optional directional light green value, between 0 and 1 inclusive.
  "directional-green": 1,

  // Optional directional light red value, between 0 and 1 inclusive.
  "directional-red": 1,

  // Optional fog value.
  "fog": -0.0001,

  // Optional gravity acceleration value.
  "gravity-acceleration": -0.05,

  // Optional maxiumum downward terminal velocity.
  "gravity-max": -0.05,

  // Optional array of groups to create.
  // Do not include automatically created groups, such as "webgl".
  "groups": [
    "example-group-0",
    "example-group-1"
  ],

  // Required array of entities to create.
  "entities": [
    {
      // Optional ID.
      "id": "example-entity-0",

      // Optional global vertex alpha value, between 0 and 1 inclusive.
      "alpha": 1,

      // Optional. If the entity will rotate based on camera rotation.
      // Array of strings, including "x", "y", "z", or any combination.
      "billboard": false,

      // Optional. If this entity collides with other entities that have collision.
      "collides": false,

      // Optional. If this entity can be collided with by other entities that collide.
      "collides": false,

      // Optional. If the entity should be drawn or not.
      "draw": true,

      // Optional. How the vertices should be drawn.
      "draw-type": "TRIANGLE_STRIP",

      // Optional. If this entity is affected by gravity.
      "gravity": false,

      // Optional rotation of entity in degrees between 0 inclusive and 359 exclusive.
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,

      // Optional scale of entity. `1 = 100%`.
      "scale-x": 1,
      "scale-y": 1,
      "scale-z": 1,

      // Optional. If this entity should be moved from "foreground" group to "skybox" group.
      "skybox": false,

      // Optional id of texture within webgl_textures.
      "texture": "_default",

      // Optional translation of entity relative to `0, 0, 0`.
      "translate-x": 0,
      "translate-y": 0,
      "translate-z": 0,

      // Required array of numbers between 0 and 1 inclusive, indicating the color of each vertex.
      // Each row is: red, green, blue, alpha
      "vertex-colors": [
        1, 1, 1, 1,
        1, 0, 0, 1,
        0, 1, 0, 1,
        0, 0, 1, 1
      ],

      // Required array of numbers indicating the translation of each vertex,
      //   relative to the entity translation.
      // Each row is: x, y, z, w
      "vertices": [
        10, -2, 10, 1,
        10, -2, -10, 1,
        -10, -2, -10, 1,
        -10, -2, 10, 1
      ],

      // Optional. Array of groups this entity will be added to. Groups must exist.
      "groups": [
        "example-group-0",
        "example-group-1"
      ]
    }
  ]
}
```

#### Commented Character Properties

```
  // Optional non-false `character` and its properties.
  "character": {
    // Optional rotation of camera in degrees between 0 and 359 inclusive.
    "camera-rotate-x": 0,
    "camera-rotate-y": 0,
    "camera-rotate-z": 0,

    // Optional camera movement speed.
    "camera-speed": 0.1,

    // Optional translation of camera relative to `0, 0, 0`.
    "camera-translate-x": 0,
    "camera-translate-y": 0,
    "camera-translate-z": 0,

    // Optional camera type.
    "camera-type": "free",

    // Optional camera zoom current/max.
    "camera-zoom-current": 0,
    "camera-zoom-max": 0,

    // Optional list of entities that should be loaded.
    // Uses same format as level entities.
    "entities": [],

    // Optional experience.
    "experience": 0,

    // Optional level. -1 means character is just a camera.
    "level": -1,
  },
```
