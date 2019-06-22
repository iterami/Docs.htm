[iterami/common](https://github.com/iterami/common) HTM Project Docs
--------------------------------------------------------------------

* [Files Used](#files-used)
* [Recommended Project File Structure](#recommended-project-file-structure)
* [Using and Updating](#using-and-updating)

---

### Files Used
* `css`:
  * [`canvas.css`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/css/canvas.md): used for 2D canvas and 3D WebGL HTM projects.
  * [`core.css`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/css/core.md): used for every HTM project that isn't only text.
  * [`dom.css`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/css/dom.md): used for HTM projects that use buttons to simulate a canvas.
  * [`writings.css`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/css/writings.md): used for HTM projects that are only text.
* `js`:
  * [`canvas.js`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/js/canvas.md): used for 2D canvas HTM projects.
  * [`core.js`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/js/core.md): used for every HTM project.
  * [`tables.js`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/js/tables.md): stand-alone file that adds table column sorting.
  * [`webgl.js`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/js/webgl.md): used for 3D WebGL HTM projects.
  * `prefabs`:
    * [`canvas.js`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/js/prefabs/canvas.md): prefabricated 2D canvas entities.
    * [`uri.js`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/js/prefabs/uri.md): prefabricated data URIs.
    * [`webgl.js`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/js/prefabs/webgl.md): prefabricated 3D WebGL entities.

---

### Recommended Project File Structure
* `js`: directory containing JavaScript files.
  * `data.js`: contains repository-specific code, such as levels or custom functions.
  * [`main.js`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/js/main.md): main project JavaScript file, which only contains functions defined by `iterami/common`.
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
