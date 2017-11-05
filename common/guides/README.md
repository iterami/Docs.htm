Making your [iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md) Project
-----------------------------------------------------------------------------------------------------------------

1. [Make sure you understand the Creative Commons Zero v1.0 Universal License used by `iterami/common`.](https://github.com/iterami/common/blob/gh-pages/LICENSE.md)
2. [Make sure `iterami/common` is set up properly for your particular project hosting setup.](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/guides/fork.md)
3. [Familiarize yourself with `iterami/common` files, functions, and variables.](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/README.md)

---

`iterami/common` is a code library. Once imported, your projects will have access to functions and variables designed to handle most aspects of project functionality in one standardized way, while also providing additional functionality over vanilla JavaScript.

`iterami/common` functions use one argument object `args` instead of multiple arguments.

---

Recommended File Structure:
* `js`:
  * `data.js`: contains repository-specific code, such as levels or custom functions.
  * `main.js`: main project JavaScript file, which only contains common functions.
* `index.htm`: the page on which your project resides.

Optional Files:
* `404.htm`: handles 404 errors for GitHub Pages repositories.
* `LICENSE.md`: contains license information about your project.
* `README.md`: contains information about your project.
