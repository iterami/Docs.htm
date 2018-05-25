[iterami/common](https://github.com/iterami/common) C Documentation
-------------------------------------------------------------------

* [Files Used](#files-used)
* [Recommended Project File Structure](#recommended-project-file-structure)

---

### Files Used
* `c`:
  * [`core.c` and `core.h`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/c/core.md): used by every C project.
  * [`data.c` and `data.h`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/c/data.md): used by projects that benefit from quicker complex entities and data.
  * [`gtk.c` and `gtk.h`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/c/gtk.md): used by every GTK+ 3 project and every OpenGL project.
  * [`json.c`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/c/json.md): used by every OpenGL project and by projects that require JSON parsing.
  * [`math.c` and `math.h`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/c/math.md): used by every OpenGL project and some non-OpenGL projects.
  * [`opengl.c` and `opengl.h`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/c/opengl.md): used by every OpenGL project.
  * [`random.c` and `random.h`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/c/random.md): used by projects that need randomization.
  * [`sort.c` and `sort.h`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/c/sort.md): used by projects that need to sort values.
* `css`:
  * [`gtk.css`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/css/gtk.md): contains CSS to standardize GTK appearance.

---

### Recommended Project File Structure
* `c`: directory containing C and header files.
  * `main.c`: contains project code.
  * `main.h`: declares project functions and global variables.
* `LICENSE.md`: contains license information about your project.
* `MakeFile`: contains make instructions.
* `README.md`: contains information about your project.
