[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md) DOM Project Flowchart
-------------------------------------------------------------------------------------------------------------------

1. `window.onload` calls [`core_init()`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/corejs.md#core_init)
    1. The core menu is created and populated with global settings.
    2. Events are bound to handle keyboard, mouse, and HTML element events.
2. `core_init()` calls [`repo_init()`](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/files/mainjs.md#repo_init), a function within your project's `main.js` file.
