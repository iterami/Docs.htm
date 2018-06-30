[iterami/common](https://github.com/iterami/common) HTM Documentation
---------------------------------------------------------------------

* [Files Used](#files-used)
* [Recommended Project File Structure](#recommended-project-file-structure)
* [Using and Updating](#using-and-updating)

---

### Files Used
* `css`:
  * [`canvas.css`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/css/canvas.md): used for 2D and 3D canvas projects.
  * [`core.css`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/css/core.md): used by every HTM project.
  * [`dom.css`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/css/dom.md)
  * [`writings.css`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/css/writings.md)
* `js`:
  * [`canvas.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/js/canvas.md): used for 2D canvas projects.
  * [`core.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/js/core.md): used by every HTM project.
  * [`data.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/js/data.md): shortcuts for complex 2D and 3D entities.
  * [`webgl.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/js/webgl.md): used for 3D canvas projects.

---

### Recommended Project File Structure
* `js`: directory containing JavaScript files.
  * `data.js`: contains repository-specific code, such as levels or custom functions.
  * [`main.js`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/js/main.md): main project JavaScript file, which only contains functions defined by `iterami/common`.
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
* You do not need to upload the `.git` directory.
* Clone `iterami/common` to your local machine via `git`. Pull and upload any changed files to your server.
* Your `iterami/common` directory does not need to be in a particular location, as long as you make sure the paths in your `script` tags are correct.
