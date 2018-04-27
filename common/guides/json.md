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
