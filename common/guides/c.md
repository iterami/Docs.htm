[iterami/common](https://github.com/iterami/common) C Project Docs
------------------------------------------------------------------

* [Files Used](#files-used)
* [Recommended Project File Structure](#recommended-project-file-structure)

---

### Files Used
* `c`:
  * [`core.c` and `core.h`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/c/core.md): used for every C project.
  * [`gtk.c` and `gtk.h`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/c/gtk.md): used for all GTK 3 and OpenGL projects.
  * [`json.c`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/c/json.md): used for every OpenGL project and by projects that require JSON parsing.
  * [`math.c` and `math.h`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/c/math.md): used for every OpenGL project and some non-OpenGL projects.
  * [`opengl.c` and `opengl.h`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/c/opengl.md): used for every OpenGL project.
  * [`random.c` and `random.h`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/c/random.md): used for projects that require randomization.
  * [`sort.c` and `sort.h`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/c/sort.md): used for projects that need to sort values.
* `css`:
  * [`gtk.css`](https://github.com/iterami/Docs.htm/blob/gh-pages/common/css/gtk.md): used for every GTK 3 and OpenGL project to standardize GTK appearance.

---

### Recommended Project File Structure
* `c`: directory containing C and header files.
  * `main.c`: contains project code.
  * `main.h`: declares project functions and global variables.
* `LICENSE.md`: contains license information about your project.
* `MakeFile`: contains make instructions.
* `README.md`: contains information about your project.
