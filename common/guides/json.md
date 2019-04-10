[iterami/common](https://github.com/iterami/common) JSON Docs
-------------------------------------------------------------

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
  "camera-zoom-max": 50,
  "clearcolor-blue": 0,
  "clearcolor-green": 0,
  "clearcolor-red": 0,
  "directional-blue": 1,
  "directional-green": 1,
  "directional-red": 1,
  "directional-state": true,
  "directional-vector": [0, 1, 0],
  "fog-density": 0.0001,
  "fog-state": false,
  "gravity-acceleration": -0.05,
  "gravity-axis": "dy",
  "gravity-max": -1,
  "jump-movement": false,
  "multiplier-jump": 1,
  "multiplier-speed": 1,
  "paths": {
    "example-path": {
      "end": 1,
      "points": [
        {
          "speed": 2,
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
  "groups": [
    "example-group-0",
    "example-group-1"
  ],
  "characters": [
    {
      "id": "_me",
      "camera-zoom": 20,
      "change": {
        "rotate-y": 0,
        "translate-x": 0
      },
      "collide-range-horizontal": 2.5,
      "collide-range-vertical": 2.5,
      "collides": true,
      "entities": [],
      "experience": 0,
      "health-current": 100,
      "health-max": 100,
      "inventory": {},
      "jump-height": 0.6,
      "level": -1,
      "path-direction": 1,
      "path-end": false,
      "path-id": false,
      "path-point": 0,
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,
      "speed": 0.2,
      "talk": false,
      "talk-range": 15,
      "trade": [],
      "translate-x": 0,
      "translate-y": 0,
      "translate-z": 0
    },
    {
      "id": "world-static",
      "entities": [
        {
          "id": "example-entity-0",
          "alpha": 1,
          "attach-offset-x": 0,
          "attach-offset-y": 0,
          "attach-offset-z": 0,
          "attach-to": false,
          "attach-type": "core_entities",
          "billboard": false,
          "change": {
            "rotate-y": 0,
            "translate-x": 0
          },
          "collide-range-horizontal": 2.5,
          "collide-range-vertical": 2.5,
          "collides": false,
          "collision": true,
          "draw": true,
          "draw-type": "TRIANGLE_STRIP",
          "event-modify": [
            {
              "amount": -100,
              "stat": "health-current"
            }
          ],
          "event-range": 0,
          "event-target-id": "_me",
          "event-target-type": "character",
          "gravity": false,
          "item-amount": 1,
          "item-entities": [],
          "item-id": false,
          "item-spell": false,
          "item-spellproperties": {},
          "item-stats": {},
          "path-direction": 1,
          "path-end": false,
          "path-id": false,
          "path-point": 0,
          "rotate-x": 0,
          "rotate-y": 0,
          "rotate-z": 0,
          "scale-x": 1,
          "scale-y": 1,
          "scale-z": 1,
          "spawn-entity": false,
          "spawn-interval-current": 0,
          "spawn-interval-max": 100,
          "speed": 0.2,
          "texture-id": "default.png",
          "texture-repeat-x": 1,
          "texture-repeat-y": 1,
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
      "translate-x": 5,
      "translate-y": 10,
      "translate-z": 15
    }
  ],
  "prefabs": [
    {
      "type": "cuboid",
      "properties": {
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
        "left-alpha": 1,
        "left-collision": false,
        "left-vertex-colors": [
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 1
        ],
        "properties": {},
        "random-colors": false,
        "right-alpha": 1,
        "right-collision": false,
        "right-vertex-colors": [
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 1
        ],
        "size-x": 1,
        "size-y": 1,
        "size-z": 1,
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
        "translate-z": 0
      }
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

  // Optional. Maximum camera zoom.
  // When 0, characters are forced into first-person mode.
  "camera-zoom-max": 50,

  // Optional. Clear color values, between 0 and 1 inclusive.
  "clearcolor-blue": 0,
  "clearcolor-green": 0,
  "clearcolor-red": 0,

  // Optional. Directional light values, between 0 and 1 inclusive.
  "directional-blue": 1,
  "directional-green": 1,
  "directional-red": 1,

  // Optional. If directional lighting is enabled and its vector.
  "directional-state": true,
  "directional-vector": [0, 1, 0],

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
          // Optional. Speed multiplier when entities are approaching this point.
          "speed": 2,

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

  // Optional. Rotation of newly spawned character in degrees between 0 inclusive and 359 exclusive.
  "spawn-rotate-x": 0,
  "spawn-rotate-y": 0,
  "spawn-rotate-z": 0,

  // Optional. Translation of newly spawned character relative to `0, 0, 0`.
  "spawn-translate-x": 0,
  "spawn-translate-y": 0,
  "spawn-translate-z": 0,

  // Optional. Array of groups to create.
  // Do not include automatically created groups, such as "skybox".
  "groups": [
    "example-group-0",
    "example-group-1"
  ],

  // Optional. "characters" that is array of objects.
  //   Set to false to create no new characters.
  "characters": [
    {
      // Optional. ID of character.
      "id": "_me",

      "all-alpha": false,
      "all-collision": true,
      "all-vertex-colors": false,

      // Optional. Current camera zoom value.
      // When 0, camera is in first-person mode.
      "camera-zoom": 20,

      // Optional. Amount that any character property should change by when the character is updated.
      // Player translations are reset after each movement to allow stopping.
      "change": {
        "rotate-y": 0,
        "translate-x": 0
      },

      // Optional. If the character collides, then this is the maximum distance before collision occurs.
      "collide-range-horizontal": 2.5,
      "collide-range-vertical": 2.5,

      // Optional. If the character collides with other entities that have collision.
      "collides": true,

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

      // Optional. Current assigned path or false, current path point target, and movement direction.
      // "path-end" is false for path exit, -1 for direction swap, 1 for loop, or 2 for teleport.
      "path-direction": 1,
      "path-end": false,
      "path-id": false,
      "path-point": 0,

      // Optional. Rotation of character in degrees between 0 inclusive and 359 exclusive.
      "rotate-x": 0,
      "rotate-y": 0,
      "rotate-z": 0,

      // Optional. Character movement speed.
      "speed": 0.2,

      // Optional. Text said by the character when the player within range
      "talk": false,
      "talk-range": 15,

      // Optional. Item trades that this character can do if the player gets close.
      "trade": [],

      // Optional. Translation of the character relative to `0, 0, 0`.
      "translate-x": 0,
      "translate-y": 0,
      "translate-z": 0
    },

    // Example of character with entities.
    {
      "id": "world-static",
      "entities": [
        {
          // Optional. Entity ID.
          "id": "example-entity-0",

          // Optional. Alpha value for the vertices of this entity, between 0 and 1 inclusive.
          "alpha": 1,

          // Optional. Translation offset relative to translation of the entity/character attached to.
          "attach-offset-x": 0,
          "attach-offset-y": 0,
          "attach-offset-z": 0,

          // Optional. ID of entity that this entity is attached to, or false if not attached.
          // Entity needs to already exist.
          "attach-to": false,

          // Optional. Variable that contains what this entity is attached to.
          "attach-type": "core_entities",

          // Optional. If the entity will rotate based on camera rotation.
          // Array of strings, including "x", "y", "z", or any combination.
          "billboard": false,

          // Optional. Amount that any entity property should change by when the entity is updated.
          "change": {
            "rotate-y": 0,
            "translate-x": 0
          },

          // Optional. If this entity collides with other entities that have collision.
          "collides": true,

          // Optional. If this entity collides, then this is the maximum distance before collision occurs.
          "collide-range-horizontal": 2.5,
          "collide-range-vertical": 2.5,

          // Optional. If this entity can be collided with by other entities that collide.
          "collides": false,

          // Optional. If the entity should be drawn or not.
          "draw": true,

          // Optional. How the vertices should be drawn.
          "draw-type": "TRIANGLE_STRIP",

          // Optional. Array of stat modifications to use upon successful event trigger.
          "event-modify": [
            {
              "amount": -100,
              "stat": "health-current"
            }
          ],

          // Optional. The range at which this event triggers.
          // If range is 0, only during collisions.
          "event-range": 0,

          // Optional. ID required to trigger event, or false to allow all.
          "event-target-id": "_me",

          // Optional. Type required to trigger event, either "character" or "entity".
          "event-target-type": "character",

          // Optional. If this entity is affected by gravity.
          "gravity": false,

          // Optional. Properties of this item, if "item-id" isn't false.
          "item-amount": 1,
          "item-entities": [],
          "item-id": false,
          "item-spell": false,
          "item-spellproperties": {},
          "item-stats": {},

          // Optional. Current assigned path or false, current path point target, and movement direction.
          // "path-end" is false for path exit, -1 for direction swap, 1 for loop, or 2 for teleport.
          "path-direction": 1,
         "path-end": false,
          "path-id": false,
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

          // Optional. ID of texture within core_images.
          "texture-id": "default.png",

          // Optional. How many times the texture will repeat.
          "texture-repeat-x": 1,
          "texture-repeat-y": 1,

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
          // This is where entities are added to the "skybox".
          "groups": [
            "example-group-0",
            "example-group-1"
          ]
        }
      ],

      // Optional. Translation of the character relative to `0, 0, 0`.
      // Any attach offsets will be relative to this position.
      "translate-x": 5,
      "translate-y": 10,
      "translate-z": 15
    }
  ],

  // Optional. Array of prefabs to create via various specific functions.
  "prefabs": [
    {
      // REQUIRED. Prefab type.
      "type": "cuboid",

      // REQUIRED. Properties of this prefab. Passed as args.
      "properties": {
        // Optional. Prefix added to each created entity ID.
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

        // Optional. Properties for the -x face.
        "left-alpha": 1,
        "left-collision": false,
        "left-vertex-colors": [
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 1
        ],

        // Optional. Additional properties that are applied to each entity created by this prefab.
        "properties": {},

        // Optional. If this prefab should use random colors or 255,255,255.
        "random-colors": false,

        // Optional. Properties for the +x face.
        "right-alpha": 1,
        "right-collision": false,
        "right-vertex-colors": [
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 1
        ],

        // Optional. Size of the cuboid.
        "size-x": 1,
        "size-y": 1,
        "size-z": 1,

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
        "translate-z": 0
      }
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
