[iterami/common](https://github.com/iterami/Docs.htm/blob/gh-pages/common/README.md)/js/tables.js
-------------------------------------------------------------------------------------------------

* [`tables_init()`](#tables_init)
* [`tables_sort(element, column, direction)`](#tables_sortelement_column_direction)

---

### `tables_init()`
* Automatically called when the file is loaded.
* Adds sorting buttons to the first `<tr>` in the `<tbody>`.

---

### `tables_sort(element, column, direction)`
* Called when sorting buttons are pressed.

Arg       | Default | Type
----------|---------|----------------------------------
element   |         | HTML element
column    |         | string ID
direction |         | 1 for ascending, 0 for descending
