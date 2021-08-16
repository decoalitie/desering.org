# desering.org

Repository for static website of De Sering, hosted at https://desering.org/

## Technical overview
If you just want to get started making changes, see [local setup](#Local-Setup) below.

#### Templating

* Pages are built using [Github Page's integrated Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)
* Styling is compiled from [SCSS](https://sass-lang.com/) to CSS using Jekyll's built-in [jekyll-sass-converter](https://github.com/jekyll/jekyll-sass-converter)
  * Entry points for each css file can be found in the [css](./css) folder
  * Included partial scss files are in the [_sass](./sass) folder
  * Using SCSS is a work in progress. Some CSS files are still in plain CSS

#### JavaScript

* Only some pages require JavaScript. These have `scripts` setting in the frontmatter (top) of their `.html` files ([example](https://github.com/decoalitie/desering.org/blob/d2fc86450396caa94ab0c451d0fbb287c2dac95b/testtafel/reserveren.html#L6))
* The source files are in [js/src](./js/src)
* The JS is bundled by webpack and put in the [js/dist](./js/dist) directory
#### C/I

* `master` branch is automatically published to desering.org through Github Pages
* Webpack runs automatically on `master` branches and PRs through Github Actions
* Some data in [_data](./_data) is automatically synced with external services through Github Actions

## Local Setup
If you want to view the site locally before publishing, follow these instructions.
### Templating (no JavaScript changes)

* First-time only:
  * Install [Jekyll](https://jekyllrb.com/). You can follow [their installation docs](https://jekyllrb.com/docs/installation/), which will also guide you through installing [Ruby](https://www.ruby-lang.org/en/) and [Bundler](https://bundler.io/)
  * Run `bundle install` in the repository root
* Build and serve the website locally (recommended):
  * Run `bundle exec jekyll serve` (don't run `jekyll serve` directly!)
  * While this is running, view the website at `http://localhost:4000/`
* Build once without serving:
  * Run `bundle exec jekyll build` (don't run `jekyll build` directly!)
  * The site is now in the `_site` directory

### General development (including Javascript)

* First-time only:
  * Install [Jekyll](https://jekyllrb.com/). You can follow [their installation docs](https://jekyllrb.com/docs/installation/), which will also guide you through installing [Ruby](https://www.ruby-lang.org/en/) and [Bundler](https://bundler.io/)
  * Run `bundle install` in the repository root
  * Install [Node.JS](https://nodejs.org/en/) (recommended at least v14)
  * Run `npm install` in the repository root
* Build and serve the website locally (recommended):
  * Run `npm run dev`
  * While this is running, view the website at `http://localhost:4000/`
* Build once without serving:
  * Run `npm run build`
  * The site is now in the `_site` directory

> Note: when pushing changes, you don't have to update the JS bundle in [js/dist](./js/dist). Github Actions will do this automatically
