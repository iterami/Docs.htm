Using and Updating [iterami/common](https://github.com/iterami/Documentation.htm/blob/gh-pages/common/README.md) Guide
----------------------------------------------------------------------------------------------------------------------

If your project is being hosted on GitHub Pages, you should use a fork of iterami/common:
* Instead of messy merging and pushing when iterami/common is updated, you can delete your fork and refork the repository.
* You may need to force the GitHub Pages of your fork to update after forking, which can be done via the [iterami/Scripts/git/force-fork-gh-pages.sh script](https://github.com/iterami/Scripts/blob/master/git/force-fork-gh-pages.sh).

---

If your project is being hosted on a different server, you should upload the iterami/common files:
* Your iterami/common directory does not need to be in a particular location, as long as you make sure the paths in your `script` tags are correct.
* To update iterami/common, reupload any changed files. You do not need to upload the `.git` directory.
