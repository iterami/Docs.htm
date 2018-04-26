[iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md)/c/random.c
--------------------------------------------------------------------------------------------------------

### Includes
* `<time.h>`

---

* ['int random_integer(const int max)`](#int-random_integerconst-int-max)
* ['void random_seed(void)`](#void-random_seedvoid)

---

### `int random_integer(const int max)`
* Generates a random integer between 0 and `max`.

Arg       | Type | Notes
----------|------|----------------------------
character | char | The character to check.

---

### `void random_seed(void)`
* Set a seed randomly generated by `time(NULL)`.