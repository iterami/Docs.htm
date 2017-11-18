[iterami/common](https://github.com/iterami/common) Documentation
-----------------------------------------------------------------

`iterami/common` is a standalone library containing various JavaScript files. Once imported, your projects will have access to functions and variables designed to handle many aspects of front-end project functionality in one standardized way, while also providing additional functionality over vanilla JavaScript.

When using `iterami/common`:
1. [Make sure you understand the Creative Commons Zero v1.0 Universal License used by `iterami/common`.](https://github.com/iterami/common/blob/gh-pages/LICENSE.md)
2. [Make sure `iterami/common` is set up properly for your particular project hosting setup.](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/fork.md)
3. [Familiarize yourself with `iterami/common` files, functions, and variables.](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/README.md)

---

* Flowchart of iterami/common Project Types:
  * [Canvas](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/flowchart-canvas.md)
  * [DOM](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/flowchart-dom.md)
  * [WebGL](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/flowchart-webgl.md)
* [Information about iterami/common File Usage by iterami Repositories](https://github.com/iterami/Documentation.htm/blob/gh-pages/repositories/common.md)
* [List of Files, Functions, and Variables](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/README.md)
* [Using and Updating iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/fork.md)

---

Recommended File Structure:
* `js`: directory containing JavaScript files.
  * `data.js`: contains repository-specific code, such as levels or custom functions.
  * `main.js`: main project JavaScript file, which only contains functions defined by `iterami/common`.
* `index.htm`: the page on which your project resides.

Optional Files:
* `404.htm`: handles 404 errors for GitHub Pages repositories.
* `LICENSE.md`: contains license information about your project.
* `README.md`: contains information about your project.
