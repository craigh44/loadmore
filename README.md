# Load more plugin for Craft CMS

A Craft CMS plugin to load your paginated content and append below

![Screenshot](resources/screenshots/ghostwhite.png)

## Installation

To install Load more, follow these steps:

1. Download & unzip the file and place the `loadmore` directory into your `craft/plugins` directory
2.  -OR- do a `git clone https://github.com/craigh44/loadmore.git` directly into your `craft/plugins` folder.  You can then update it with `git pull`
3.  -OR- install with Composer via `composer require craigh44/loadmore`
4. Install plugin in the Craft Control Panel under Settings > Plugins
5. The plugin folder should be named `loadmore` for Craft to see it.  GitHub recently started appending `-master` (the branch name) to the name of the folder for zip file downloads.

Load more works on Craft 2.4.x and Craft 2.5.x.

## Load more Overview

-Insert text here-

## Configuring Load more

-Insert text here-

## Using Load more

```{% set articles = craft.entries.section('articles').limit(3).order('postDate') %}

<div id="load-more-content">
  {% paginate articles as articlesOnPage %}

      {% for article in articlesOnPage %}
          <article>
              <h2>{{ article.title }}</h2>
              <h3>{{ article.body }}</h3>
          </article>
      {% endfor %}

      {{ paginate|loadMore() }}
</div>

//optional loading image
<img id="loading-image" style='display: none;'>

//optional no more posts text
<h1 id='no-more-pages' style='display: none;'>No more posts</h1>
<button id='load-button'>Load more</button>
```

## Load more Roadmap

Some things to do, and ideas for potential features:

* Release it

## Load more Changelog

### 1.0.0 -- 2017.01.07

* Initial release

Brought to you by [Craig Horsborough](http://www.ghostwhite.net)
