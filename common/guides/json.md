[iterami/common](https://github.com/iterami/common) JSON Documentation
----------------------------------------------------------------------

* [3D JSON Level Format](#3d-json-level-format):
  * [Commented Explanation](#commented-explanation)

---

### 3D JSON Level Format

* Must be valid JSON. [Commented Explanation](#commented-explanation) is not valid. iterami style formatting is optional.
* Should follow the order of the example below, as C projects parse properties in order.
* Optional properties can be removed.

```json
{
  "ambient-blue": 1,
  "ambient-green": 1,
  "ambient-red": 1,
  "characters": [
    {
      "id": "_me",
      "camera-zoom-current": 20,
      "camera-zoom-max": 50,
      "collide-range-horizontal": 2.5,
      "collide-range-vertical": 2.5,
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
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,
      "speed": 0.2,
      "talk": false,
      "trade": [],
      "translate-x": 0,
      "translate-y": 0,
      "translate-z": 0
    }
  ],
  "clearcolor-blue": 0,
  "clearcolor-green": 0,
  "clearcolor-red": 0,
  "cuboids": [
    {
      "prefix": "example-cuboid",
      "all-alpha": false,
      "all-collision": true,
      "all-vertex-colors": false,
      "back-alpha": 1,
      "back-collision": false,
      "back-vertex-colors": [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ],
      "bottom-alpha": 1,
      "bottom-collision": false,
      "bottom-vertex-colors": [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ],
      "exclude": {
        "bottom": true
      },
      "front-alpha": 1,
      "front-collision": false,
      "front-vertex-colors": [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ],
      "height": 1,
      "left-alpha": 1,
      "left-collision": false,
      "left-vertex-colors": [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ],
      "length": 1,
      "right-alpha": 1,
      "right-collision": false,
      "right-vertex-colors": [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ],
      "top-alpha": 1,
      "top-collision": false,
      "top-vertex-colors": [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ],
      "translate-x": 0,
      "translate-y": 0,
      "translate-z": 0,
      "tree": false,
      "width": 1
    }
  ],
  "directional-blue": 1,
  "directional-green": 1,
  "directional-red": 1,
  "directional-state": true,
  "directional-vector": "0, 1, 0",
  "fog-density": 0.0001,
  "fog-state": false,
  "gravity-acceleration": -0.05,
  "gravity-axis": "dy",
  "gravity-max": -1,
  "groups": [
    "example-group-0",
    "example-group-1"
  ],
  "jump-movement": false,
  "multiplier-jump": 1,
  "multiplier-speed": 1,
  "paths": {
    "example-path": {
      "end": 1,
      "points": [
        {
          "translate-x": 0,
          "translate-y": 0,
          "translate-z": 0
        },
        {
          "translate-x": -10,
          "translate-z": -10
        },
        {
          "translate-x": 0,
          "translate-y": 0
        }
      ]
    }
  },
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
      "collide-damage": 0,
      "collide-range-horizontal": 2.5,
      "collide-range-vertical": 2.5,
      "collides": false,
      "collision": false,
      "draw": true,
      "draw-type": "TRIANGLE_STRIP",
      "dx": 0,
      "dy": 0,
      "dz": 0,
      "gravity": false,
      "item-amount": 1,
      "item-entities": [],
      "item-id": false,
      "item-spell": false,
      "item-spellproperties": {},
      "item-stats": {},
      "path-active": false,
      "path-direction": 1,
      "path-id": "",
      "path-point": 0,
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,
      "scale-x": 1,
      "scale-y": 1,
      "scale-z": 1,
      "skybox": false,
      "spawn-entity": false,
      "spawn-interval-current": 0,
      "spawn-interval-max": 100,
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
}

```

#### Commented Explanation

```
{
  // Optional. Ambient light values, between 0 and 1 inclusive.
  "ambient-blue": 1,
  "ambient-green": 1,
  "ambient-red": 1,

  // Optional. "characters" that is array of objects.
  //   Set to false to create no new characters.
  "characters": [
    {
      // Optional. ID of character.
      "id": "_me",

      "all-alpha": false,
      "all-collision": true,
      "all-vertex-colors": false,

      // Optional. Camera zoom current and max.
      // When current is 0, camera is in first person mode.
      "camera-zoom-current": 20,
      "camera-zoom-max": 50,

      // Optional. If the character collides, then this is the maximum distance before collision occurs.
      "collide-range-horizontal": 2.5,
      "collide-range-vertical": 2.5,

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

      // Optional. Rotation of character in degrees between 0 inclusive and 359 exclusive.
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,

      // Optional. Character movement speed.
      "speed": 0.2,

      // Optional. Text said by the character when the player gets close.
      "talk": false,

      // Optional. Item trades that this character can do if the player gets close.
      "trade": [],

      // Optional. Translation of the character relative to `0, 0, 0`.
      "translate-x": 0,
      "translate-y": 0,
      "translate-z": 0
    }
  ],

  // Optional. Clear color values, between 0 and 1 inclusive.
  "clearcolor-blue": 0,
  "clearcolor-green": 0,
  "clearcolor-red": 0,

  // Optional. Array of cuboids to create via webgl_cuboid().
  "cuboids": [
    {
      // REQUIRED. Prefix added to each created entity ID.
      "prefix": "example-cuboid",

      // Optional. Overrides that can be applied to every non-excluded face.
      "all-alpha": false,
      "all-collision": true,
      "all-vertex-colors": false,

      // Optional. Properties for the -z face.
      "back-alpha": 1,
      "back-collision": false,
      "back-vertex-colors": [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ],

      // Optional. Properties for the -y face.
      "bottom-alpha": 1,
      "bottom-collision": false,
      "bottom-vertex-colors": [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ],

      // Optional. If this cuboid will have collision.
      "collision": false,

      // Optional. Which sides should be excluded from creation.
      //   Sides are: back, bottom, front, left, right, top.
      "exclude": {
        "bottom": true
      },

      // Optional. Properties for the +z face.
      "front-alpha": 1,
      "front-collision": false,
      "front-vertex-colors": [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ],

      // Optional. Height of the cuboid along the y-axis.
      "height": 1,

      // Optional. Properties for the -x face.
      "left-alpha": 1,
      "left-collision": false,
      "left-vertex-colors": [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ],

      // Optional. Length of the cuboid along the z-axis.
      "length": 1,

      // Optional. Properties for the +x face.
      "right-alpha": 1,
      "right-collision": false,
      "right-vertex-colors": [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ],

      // Optional. Properties for the +y face.
      "top-alpha": 1,
      "top-collision": false,
      "top-vertex-colors": [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ],

      // Optional. Translation of the center of the cuboid relative to `0, 0, 0`.
      "translate-x": 0,
      "translate-y": 0,
      "translate-z": 0,

      // Optional. If this cuboid represents a `webgl_cuboid_tree()`.
      "tree": false,

      // Optional. Width of the cuboid along the x-axis.
      "width": 1
    }
  ],

  // Optional. Directional light values, between 0 and 1 inclusive.
  "directional-blue": 1,
  "directional-green": 1,
  "directional-red": 1,

  // Optional. If directional lighting is enabled and which vector it is going.
  "directional-state": true,
  "directional-vector": "0, 1, 0",

  // Optional. Fog density and if fog is enabled.
  "fog-density": 0.0001,
  "fog-state": false,

  // Optional. Gravity acceleration, axis, and maxiumum downward terminal velocity.
  // Only affects entities with "gravity" property true.
  "gravity-acceleration": -0.05,
  "gravity-axis": "dy",
  "gravity-max": -0.05,

  // Optional. If characters can change their movement direction while unable to jump.
  "jump-movement": false,

  // Optional. Property multipliers that affect all characters.
  "multiplier-jump": 1,
  "multiplier-speed": 1,

  // Optional. Paths that entities can move along.
  "paths": {
    "example-path": {
      // Optional. What occurs when the end of the path is reached:
      //   -1 = return back along path.
      //    0 = stop.
      //    1 = restart path from the beginning by moving towards first point.
      "end": 1,

      // Required. Path waypoints in order.
      "points": [
        {
          // Optional. Waypoint translation. Leave absent to use current translation of that axis.
          "translate-x": 0,
          "translate-y": 0,
          "translate-z": 0
        },
        {
          "translate-x": -10,
          "translate-z": -10
        },
        {
          "translate-x": 0,
          "translate-y": 0
        }
      ]
    }
  },

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

      // Optional. How much damage is done to characters when collision occurs.
      "collide-damage": 0,

      // Optional. If this entity collides, then this is the maximum distance before collision occurs.
      "collide-range-horizontal": 2.5,
      "collide-range-vertical": 2.5,

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

      // Optional. Properties of this item, if "item-id" isn't false.
      "item-amount": 1,
      "item-entities": [],
      "item-id": false,
      "item-spell": false,
      "item-spellproperties": {},
      "item-stats": {},

      // Optional. Current assigned path, its activity state, current path point target, and movement direction.
      "path-active": false,
      "path-direction": 1,
      "path-id": "",
      "path-point": 0,

      // Optional. Rotation of entity in degrees between 0 inclusive and 359 exclusive.
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,

      // Optional. Scale of entity. `1 = 100%`.
      "scale-x": 1,
      "scale-y": 1,
      "scale-z": 1,

      // Optional. If a particle should be spawned.
      "spawn-entity": false,

      // Optional. Current and maximum number of frames since last particle spawned.
      "spawn-interval-current": 0,
      "spawn-interval-max": 0,

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
  //   Leave as [] to not randomize any properties.
  "randomized": [
    {
      // Optional. True if this affects character property, or false if this affects entity property.
      "character": false,

      // Required. Array of character or entity IDs, depending on the character property.
      "ids": [
        "example-entity-0"
      ],

      // Required. The range in which to choose a number, which is then added to the property.
      "max": 100,
      "min": -100,

      // Required. The property that will be modified.
      "property": "translate-z"
    }
  ]
}
```
