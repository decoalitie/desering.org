### Installation

Check if RubyGems is installed:

```
gem --version
```

Should say something like `2.6.10`.

Install [Jekyll](https://jekyllrb.com/) and [Bundler](https://bundler.io/) ("manages Ruby gem dependencies, reduces Jekyll build errors, and prevents environment-related bugs")

```
gem install bundler jekyll
```

### Building the site

Run `jekyll build`, and the folder `_site` with the static site will be generated.

Run `jekyll serve` to view the website on `localhost:4000`.
