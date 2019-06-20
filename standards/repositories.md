iterami GitHub Repository Standards
-----------------------------------

* [Settings](#settings)
* [Creating a New Github Pages Repository](#creating-a-new-github-pages-repository)
* [Creating a New Repository Not Hosted on Github Pages](#creating-a-new-repository-not-hosted-on-github-pages)

---

### Settings

* GitHub Pages is used whenever possible:
  * HTTPS is enforced.
* [Issues](https://github.com/iterami/Docs.htm/blob/gh-pages/standards/issues.md) are enabled.
* Projects are disabled.
* [Pull Requests](https://github.com/iterami/Docs.htm/blob/gh-pages/standards/pull-requests.md) are enabled.
* Repository names should include prefixes and suffixes to indicate their project types:
  * Assembly repositories should use the `.asm` suffix.
  * C++ repositories should use the `.cpp` suffix.
  * Chromium repositories should use the `Chromium-` prefix.
  * Drupal repositories should use the `Drupal-` prefix.
  * Firefox repositories should use the `Firefox-` prefix.
  * GitHub Pages repositories should use the `.htm` suffix.
  * GTK repositories should use the `.gtk` suffix.
  * JavaScript repositories should use the `.js` suffix.
  * PHP repositories should use the `.php` suffix.
  * Python repositories should use the `.py` suffix.
  * Shell repositories should use the `.sh` suffix.
* Sponsorships are enabled.
* Wikis are disabled and restricted to users with push access.

---

### Creating a New GitHub Pages Repository:

1. Locally prepare the first repository commit.
2. Create the repository on GitHub and make sure its settings match the list in the [Settings section](#settings).
3. Clone the repository locally, add the locally prepared project files, and push them to the `master` branch.
4. Run [Scripts/git/gh-pages-from-master.sh](https://github.com/iterami/Scripts/blob/master/git/gh-pages-from-master.sh) on the cloned repository. Make `gh-pages` the default branch on GitHub and delete the `master` branch.
5. Add the repository link to various iterami repositories:
    * [Docs.htm common file usage notes](https://github.com/iterami/Docs.htm/blob/gh-pages/repositories/common.md) so that usage can be managed.
    * [iterami.github.io](https://github.com/iterami/iterami.github.io) so that it may have a link on the index page.
    * [RandomRepository.htm](https://github.com/iterami/RandomRepository.htm) so that it may be randomly selected.
    * [Scripts iterami-repositories-list.sh](https://github.com/iterami/iterami.github.io) so that it may be managed in bulk.
6. Update the repository `Description` with an emoji, mention of CC0 license, description of project and type, and a link to it hosted on https://iterami.com.
7. Update the repository `Website` with a link to it hosted on https://iterami.com.

---

### Creating a New Repository Not Hosted on GitHub Pages:

1. Locally prepare the first repository commit.
2. Create the repository on GitHub and make sure its settings match the list in the [Settings section](#settings).
3. Clone the repository locally, add the locally prepared project files, and push them to the `master` branch.
4. Add the repository link to various iterami repositories:
    * [Docs.htm common file usage notes](https://github.com/iterami/Docs.htm/blob/gh-pages/repositories/common.md) so that usage can be managed.
    * [iterami.github.io](https://github.com/iterami/iterami.github.io) so that it may have a link on the index page.
    * [RandomRepository.htm](https://github.com/iterami/RandomRepository.htm) so that it may be randomly selected.
    * [Scripts iterami-repositories-list.sh](https://github.com/iterami/iterami.github.io) so that it may be managed in bulk.
5. Update the repository `Description` with an emoji, mention of CC0 license, description of project and type, and a link to download the repository as a `.tar.gz` file.
6. Update the repository `Website` with a link to download the repository as a `.tar.gz` file.
