[iterami/Drupal-callipepla](https://github.com/iterami/Drupal-callipepla) Documentation
---------------------------------------------------------------------------------------

`callipepla` is a `Drupal 7.x` module that runs the Quail JavaScript library on every visited page. Results are displayed in your browser's console and a CSS class is applied to error elements. Not recommended for use on production servers. This repository follows Drupal coding standards instead of traditional iterami formatting standards.

Installation:

1. `git clone https://github.com/iterami/Drupal-callipepla.git`
2. `sh Drupal-callipepla/setup.sh`
3. Copy the `Drupal-callipepla/callipepla` directory into the `sites/all/modules/contrib/` directory of your `Drupal 7.x` installation.
4. Enable the `callipepla` module when you want to see Quail results displayed.
5. Disable the `callipepla` module when on production or when you no longer wish to see Quail results displayed.
