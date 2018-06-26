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
      "attach": false,
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
    "dx": 0,
    "dy": 0,
    "dz": 0,
    "entities": [],
    "experience": 0,
    "level": -1,
  },
```

#### Commented Explanation

```
{
  // Optional. Ambient light alpha value, between 0 and 1 inclusive.
  "ambient-alpha": 1,

  // Optional. Ambient light blue value, between 0 and 1 inclusive.
  "ambient-blue": 1,

  // Optional. Ambient light green value, between 0 and 1 inclusive.
  "ambient-green": 1,

  // Optional. Ambient light red value, between 0 and 1 inclusive.
  "ambient-red": 1,

  // Optional. Character properties, or false.
  // The `Commented Character Properties` section has more info.
  "character": false,

  // Optional. Clear color alpha value, between 0 and 1 inclusive.
  "clearcolor-alpha": 1,

  // Optional. Clear color blue value, between 0 and 1 inclusive.
  "clearcolor-blue": 0,

  // Optional. Clear color green value, between 0 and 1 inclusive.
  "clearcolor-green": 0,

  // Optional. Clear color red value, between 0 and 1 inclusive.
  "clearcolor-red": 0,

  // Optional. Directional light alpha value, between 0 and 1 inclusive.
  "directional-alpha": 1,

  // Optional. Directional light blue value, between 0 and 1 inclusive.
  "directional-blue": 1,

  // Optional. Directional light green value, between 0 and 1 inclusive.
  "directional-green": 1,

  // Optional. Directional light red value, between 0 and 1 inclusive.
  "directional-red": 1,

  // Optional. Fog value.
  "fog": -0.0001,

  // Optional. Gravity acceleration value.
  // Only affects entities with "gravity" property true.
  "gravity-acceleration": -0.05,

  // Optional. Maxiumum downward terminal velocity.
  // Only affects entities with "gravity" property true.
  "gravity-max": -0.05,

  // Optional. Array of groups to create.
  // Do not include automatically created groups, such as "skybox".
  "groups": [
    "example-group-0",
    "example-group-1"
  ],

  // REQUIRED. Array of entities to create.
  "entities": [
    {
      // Optional. Entity ID.
      "id": "example-entity-0",

      // Optional. Alpha value for the vertices of this entity, between 0 and 1 inclusive.
      "alpha": 1,

      // Optional. ID of entity that this entity is attached to, or false if not attached.
      // Entity needs to already exist.
      "attach": false,

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

      // Optional. Entity inertia that is added to entity translation.
      "dx": 0,
      "dy": 0,
      "dz": 0,

      // Optional. If this entity is affected by gravity.
      "gravity": false,

      // Optional. Rotation of entity in degrees between 0 inclusive and 359 exclusive.
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,

      // Optional. Scale of entity. `1 = 100%`.
      "scale-x": 1,
      "scale-y": 1,
      "scale-z": 1,

      // Optional. If this entity should be moved from "foreground" group to "skybox" group.
      "skybox": false,

      // Optional. id of texture within webgl_textures.
      "texture": "_default",

      // Optional. Translation of entity relative to `0, 0, 0`.
      "translate-x": 0,
      "translate-y": 0,
      "translate-z": 0,

      // REQUIRED if "draw" === true. Optional if "draw" === false.
      // Array of numbers between 0 and 1 inclusive, indicating the color of each vertex.
      // Each row is: red, green, blue, alpha
      "vertex-colors": [
        1, 1, 1, 1,
        1, 0, 0, 1,
        0, 1, 0, 1,
        0, 0, 1, 1
      ],

      // REQUIRED. Array of numbers indicating the translation of each vertex,
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
  // Optional. "character" that isn't false.
  "character": {
    // Optional. Rotation of camera in degrees between 0 and 359 inclusive.
    "camera-rotate-x": 0,
    "camera-rotate-y": 0,
    "camera-rotate-z": 0,

    // Optional. Camera movement speed.
    "camera-speed": 0.1,

    // Optional. Translation of camera relative to `0, 0, 0`.
    "camera-translate-x": 0,
    "camera-translate-y": 0,
    "camera-translate-z": 0,

    // Optional. Camera type.
    "camera-type": "free",

    // Optional. Camera zoom current and max.
    // When current is 0, camera is in first person mode.
    "camera-zoom-current": 0,
    "camera-zoom-max": 0,

    // Optional. Amount that is added to entity translation.
    // Currently gets reset after every movement so players can stop.
    "dx": 0,
    "dy": 0,
    "dz": 0,

    // Optional. Array of entities that should be loaded and attached to the camera translation (without zoom).
    // Uses same format as level entities.
    "entities": [],

    // Optional. Current character experience.
    "experience": 0,

    // Optional. Current character level.
    // -1 means character is just a camera.
    "level": -1,
  },
```
