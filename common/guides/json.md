[iterami/common](https://github.com/iterami/common) JSON Documentation
----------------------------------------------------------------------

* [3D JSON Level Format](#3d-json-level-format):
  * [Example Characters: Array of Objects](#example-characters-array-of-objects)
  * [Example Randomized: Array of Objects](#example-randomized-array-of-objects)
  * [Commented Explanation](#commented-explanation)
  * [Commented Character Properties](#commented-character-properties)
  * [Commented Randomized Properties](#commented-randomized-properties)

---

### 3D JSON Level Format

* Must be valid JSON. [Commented Explanation](#commented-explanation), [Commented Character Properties](#commented-character-properties), and [Commented Randomized Properties](#commented-randomized-properties] are not valid.
* Should follow the order of the example below, as C projects parse properties in order.
* Optional properties can be removed.

```json
{
  "ambient-blue": 1,
  "ambient-green": 1,
  "ambient-red": 1,
  "characters": false,
  "clearcolor-alpha": 1,
  "clearcolor-blue": 0,
  "clearcolor-green": 0,
  "clearcolor-red": 0,
  "directional-blue": 1,
  "directional-green": 1,
  "directional-red": 1,
  "directional-vector": false,
  "fog-density": 0.0001,
  "fog-state": false,
  "gravity-acceleration": -0.05,
  "gravity-max": -1,
  "groups": [
    "example-group-0",
    "example-group-1"
  ],
  "multiplier-jump": 1,
  "multiplier-speed": 1,
  "spawn-rotate-x": 0,
  "spawn-rotate-y": 0,
  "spawn-rotate-z": 0,
  "spawn-translate-x": 0,
  "spawn-translate-y": 0,
  "spawn-translate-z": 0,
  "entities": [
    {
      "id": "example-entity-0",
      "alpha": 1,
      "attach-offset-x": 0,
      "attach-offset-y": 0,
      "attach-offset-z": 0,
      "attach-to": false,
      "attach-type": "entity",
      "billboard": false,
      "collide-event": false,
      "collide-range": 2.5,
      "collides": false,
      "collision": false,
      "draw": true,
      "draw-type": "TRIANGLE_STRIP",
      "dx": 0,
      "dy": 0,
      "dz": 0,
      "gravity": false,
      "item": false,
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,
      "scale-x": 1,
      "scale-y": 1,
      "scale-z": 1,
      "skybox": false,
      "speed": 0.2,
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
  ],
  "randomized": []
}
```

#### Example Characters: Array of Objects

```json
  "characters": [
    {
      "id": "_me",
      "camera-type": "free",
      "camera-zoom-current": 0,
      "camera-zoom-max": 10,
      "collide-range": 2.5,
      "collides": true,
      "dx": 0,
      "dy": 0,
      "dz": 0,
      "entities": [],
      "experience": 0,
      "health-current": 100,
      "health-max": 100,
      "inventory": {},
      "jump-height": 0.6,
      "level": -1,
      "speed": 0.2
    }
  ],
```

#### Example Randomized: Array of Objects

```json
  "randomized": [
    {
      "character": false,
      "ids": [
        "example-entity-0"
      ],
      "max": 100,
      "min": -100,
      "property": "translate-z"
    }
  ]
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
  // The `Example Characters: Array of Objects` section has more info.
  "characters": false,

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

  // Optional. Fog density and if fog is enabled.
  "fog-density": 0.0001,
  "fog-state": false,

  // Optional. Gravity acceleration value.
  // Only affects entities with "gravity" property true.
  "gravity-acceleration": -0.05,

  // Optional. Maxiumum downward terminal velocity.
  // Only affects entities with "gravity" property true.
  "gravity-max": -0.05,

  // Optional. Property multipliers that affect all characters.
  "multiplier-jump": 1,
  "multiplier-speed": 1,

  // Optional. Array of groups to create.
  // Do not include automatically created groups, such as "skybox".
  "groups": [
    "example-group-0",
    "example-group-1"
  ],

  // Optional. Rotation of newly spawned character in degrees between 0 inclusive and 359 exclusive.
  "spawn-rotate-x": 0,
  "spawn-rotate-y": 0,
  "spawn-rotate-z": 0,

  // Optional. Translation of newly spawned character relative to `0, 0, 0`.
  "spawn-translate-x": 0,
  "spawn-translate-y": 0,
  "spawn-translate-z": 0,

  // REQUIRED. Array of entities to create.
  "entities": [
    {
      // Optional. Entity ID.
      "id": "example-entity-0",

      // Optional. Alpha value for the vertices of this entity, between 0 and 1 inclusive.
      "alpha": 1,

      // Optional. Translation offset relative to translation of the entity attached to.
      "attach-offset-x": 0,
      "attach-offset-y": 0,
      "attach-offset-z": 0,

      // Optional. ID of entity that this entity is attached to, or false if not attached.
      // Entity needs to already exist.
      "attach-to": false,

      // Optional. Type of attachment. Either `character` or `entity`.
      "attach-type": "entity",

      // Optional. If the entity will rotate based on camera rotation.
      // Array of strings, including "x", "y", "z", or any combination.
      "billboard": false,

      // Optional. If this entity collides with other entities that have collision.
      "collides": false,

      // Optional. What should happen when collision with this entity occurs.
      //   "kill" for killing characters or false for nothing.
      "collide-event": false,

      // Optional. If this entity collides, then this is the maximum distance before collision occurs.
      "collide-range": 2.5,

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

      // Optional. Item ID to increment by 1 in the webgl_character inventory, or false if this entity is not an item.
      "item": false,

      // Optional. Rotation of entity in degrees between 0 inclusive and 359 exclusive.
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,

      // Optional. Scale of entity. `1 = 100%`.
      "scale-x": 1,
      "scale-y": 1,
      "scale-z": 1,

      // Optional. Entity movement speed.
      "speed": 0.2,

      // Optional. If this entity should be moved from "foreground" group to "skybox" group.
      "skybox": false,

      // Optional. ID of texture within webgl_textures.
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
  ],

  // Optional. Array of objects indicating which character or entity properties should be randomized.
  // The `Example Randomized: Array of Objects` section has more info.
  "randomized": []
}
```

#### Commented Character Properties

```
  // Optional. "characters" that is array of objects instead of false.
  "characters": [
    {
      // Optional. ID of character.
      "id": "_me",

      // Optional. Camera type.
      "camera-type": "free",

      // Optional. Camera zoom current and max.
      // When current is 0, camera is in first person mode.
      "camera-zoom-current": 0,
      "camera-zoom-max": 0,

      // Optional. If the character collides, then this is the maximum distance before collision occurs.
      "collide-range": 2.5,

      // Optional. If the character collides with other entities that have collision.
      "collides": true,

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

      // Optional. Current and maximum health.
      "health-current": 100,
      "health-max": 100,

      // Optional. Current character inventory.
      "inventory": {},

      // Optional. "dy" set when the character jumps.
      "jump-height": 0.6,

      // Optional. Current character level.
      // -1 means character is just a camera.
      "level": -1,

      // Optional. Character movement speed.
      "speed": 0.2
    }
  ],
```

#### Commented Randomized Properties

```
  // Optional. Array of objects indicating which character or entity properties should be randomized.
  "randomized": [
    {
      // Optional. True if this affects character property, or false if this affects entity property.
      "character": false,

      // Required. Array of character or entity IDs, depending on the character property.
      "ids": [
        "example-entity-0"
      ],

      // Required. The maximum and minimum values to randomize between.
      "max": 100,
      "min": 100,

      // Required. The property that will be modified.
      "property": "translate-z"
    }
  ]
```
