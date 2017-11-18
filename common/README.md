[iterami/common](https://github.com/iterami/common) Documentation
-----------------------------------------------------------------

`iterami/common` is a standalone library containing various JavaScript files. Once imported, your projects will have access to functions and variables designed to handle many aspects of front-end project functionality in one standardized way, while also providing additional functionality over vanilla JavaScript. Optional basic CSS files are also provided for each project type.

---

* [Creative Commons Zero v1.0 Universal License used by `iterami/common`](https://github.com/iterami/common/blob/gh-pages/LICENSE.md)
* Flowchart of `iterami/common` Project Types:
  * [Canvas](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/flowchart-canvas.md)
  * [DOM](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/flowchart-dom.md)
  * [WebGL](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/flowchart-webgl.md)
* [Information about `iterami/common` File Usage by iterami Repositories](https://github.com/iterami/Documentation.htm/blob/gh-pages/repositories/common.md)
* [Using and Updating `iterami/common`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/fork.md)

---

`iterami/common` files:
* `css`:
  * [`canvas.css`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/canvascss.md): used for 2D and 3D canvas projects.
  * `core.css`
  * `dom.css`
  * `writings.css`
* `js`:
  * [`canvas.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/canvasjs.md): used for 2D canvas projects.
  * [`core.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/corejs.md): used by every project.
  * [`data.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/datajs.md): shortcuts for complex 2D and 3D entities.
  * [`math.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/mathjs.md): math and matrix functions.
  * [`network.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/networkjs.md): AJAX.
  * [`sort.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/sortjs.md): functions for sorting arrays.
  * [`string.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/stringjs.md): functions for string formatting and replace.
  * [`time.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/timejs.md): functions for handling time and date.
  * [`webgl.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/webgljs.md): used for 3D canvas projects.

---

Recommended `iterami/common` project file structure:
* `js`: directory containing JavaScript files.
  * `data.js`: contains repository-specific code, such as levels or custom functions.
  * [`main.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/mainjs.md): main project JavaScript file, which only contains functions defined by `iterami/common`.
* `404.htm`: handles 404 errors for GitHub Pages repositories.
* `index.htm`: the page on which your project resides.
* `LICENSE.md`: contains license information about your project.
* `README.md`: contains information about your project.
