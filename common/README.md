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

---

### Files
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

### Recommended Project File Structure
* `js`: directory containing JavaScript files.
  * `data.js`: contains repository-specific code, such as levels or custom functions.
  * [`main.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/mainjs.md): main project JavaScript file, which only contains functions defined by `iterami/common`.
* `404.htm`: handles 404 errors for GitHub Pages repositories.
* `index.htm`: the page on which your project resides.
* `LICENSE.md`: contains license information about your project.
* `README.md`: contains information about your project.

---

### Using and Updating
If your project is being hosted on GitHub Pages, you should use a fork of `iterami/common`:
* Instead of messy merging and pushing when `iterami/common` is updated, you can delete your fork and then refork `iterami/common`.
* You may need to force the GitHub Pages of your fork to update after forking, which can be done via the [iterami/Scripts/git/force-fork-gh-pages.sh script](https://github.com/iterami/Scripts/blob/master/git/force-fork-gh-pages.sh).

If your project is being hosted on a different server, you should upload the `iterami/common` files:
* Clone `iterami/common` to your local machine via `git`. Pull and upload any changed files to your server. You do not need to upload the `.git` directory.
* Your `iterami/common` directory does not need to be in a particular location, as long as you make sure the paths in your `script` tags are correct.
