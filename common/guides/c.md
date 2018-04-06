[iterami/common](https://github.com/iterami/common) C Documentation
-------------------------------------------------------------------

### Files Used
* `c`:
  * [`core.c` and `core.h`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/corec.md): used by every C project.
  * [`gtk.c` and `gtk.h`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/gtkc.md): used by every GTK+ 3 project.
  * [`json.c`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/jsonc.md): used by projects that require JSON parsing.
  * [`math.c` and `math.h`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/mathc.md): used by every OpenGL project and some non-OpenGL projects.
  * [`opengl.c` and `opengl.h`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/openglc.md): used by every OpenGL project.
  * [`random.c` and `random.h`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/randomc.md): used by projects that need randomness.
* `css`:
  * [`gtk.css`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/gtkcss.md): contains CSS to standardize GTK appearance.

---

### Recommended Project File Structure
* `c`: directory containing C and header files.
  * `main.c`: contains project code.
  * `main.h`: declares project functions and global variables.
* `LICENSE.md`: contains license information about your project.
* `MakeFile`: contains make instructions.
* `README.md`: contains information about your project.
