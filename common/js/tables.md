[iterami/common](https://github.com/iterami/Docs.htm/blob/gh-pages/common/README.md)/js/tables.js
-------------------------------------------------------------------------------------------------

* [Globals](#globals)
* [`tables_init()`](#tables_init)
* [`tables_sort(element, column, direction)`](#tables_sortelement_column_direction)

---

### Globals

Global             | Default | Type
-------------------|---------|-------
tables_column_main | 0       | number

---

### `tables_init()`
* Automatically called when the file is loaded.
* Adds sorting buttons to the first `<tr>` in the `<tbody>`.
* Ignores tables and columns with `tables-nosort` class.
* Uses column with `tables-main` class as unique main column.

---

### `tables_sort(element, column, direction)`
* Called when sorting buttons are pressed.

Arg       | Default | Type
----------|---------|----------------------------------
element   |         | HTML element
column    |         | string ID
direction |         | 1 for ascending, 0 for descending
