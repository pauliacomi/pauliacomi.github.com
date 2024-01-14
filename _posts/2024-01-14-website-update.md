---
layout: post
title: "Site update for 2024"
date: 2024-01-14 22:55:17 +0100
tags: programming webdesign
---

One of my new years resolutions for 2024 was to become more serious about old
projects and make sure that they're kept up to date.

Fortunately, the [previous]({% post_url 2018-12-12-website-built %})
[design choices]({% post_url 2019-09-23-polishing-website %}) made when
initially making this website are still holding up: a lightweight responsive
design, written from the ground up on top of a GitHub Pages Jekyll-powered
static site.

I did want to bring the site up to date with a couple of small features.

## A dark mode

One of Apple's few *good* industry pushes, finally a way to keep eyes from
burning out at night. I've then added a toggle button to switch between a light
and dark colourway. The button is powered by a light JS function, which checks
the global preferences and sets a class on the page accordingly. It also saves
the preference in localStorage for later.

``` javascript
window.matchMedia('(prefers-color-scheme: light')
...
document.documentElement.setAttribute("color-mode", "light");
localStorage.setItem("color-mode", "light");
```

The biggest pain was to get the colors right when using SASS. Most of my other
code was using SASS variables, and was compiled down at build-time. To get
around this had to change all SASS variables to CSS variables. Attribute
selectors in the CSS class did the rest.

## An automatically generated list of publications

As a researcher, I already showcase my publications on my website, but I didn't
want to manually update the list every time I published something new. My plan
was to get a list of publications from an API like [ORCID](https://orcid.org/),
then parse them into markdown somehow.

I found a couple of plugins for Jekyll which seemed to do what I wanted. First
there was [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) which
would parse bibtex to a nice bibliography based off CSL styles. Then there was
[jekyll-orcid](https://github.com/mfenner/jekyll-orcid) to generate the list
directly from ORCID. This way, I don't have to worry about updating the list
myself, and it always reflects my latest work.

The first big hurdle was that GitHub Pages does not allow you to use any custom
plugins that are not on its whitelist. Luckily, for a few years now one could
use GitHub Actions to run custom builds. The regular Pages are using Actions
under the hood anyway! So after converting the site to use Actions, I set up
jekyll-scholar, as helpfully detailed by
[Gemma](https://open-research.gemmadanks.com/tutorials/how-to-use-jekyll-scholar-with-github-pages/).

Now for getting the publication list automatically. Turns out jekyll-orcid is
painfully obsolete. ORCID moved to a v3 API, which quadrupled in complexity. It
also stopped providing Bibtex output by default. Since I don't really want to
write a parser for XML to Bibtex, I gave up on the automatic scraping idea and
will just be maintaining the Bibtex file myself.

## Last bits

Finally, I am now serving locally a version of particle.js, which I use for the
useless particle animation in the header. I didn't want to rely on an external
CDN, so I downloaded the library and served it locally. This way, I have more
control over the performance and customization of the particles.

There's a case to be made that the Jekyll stack is fairly outdated - Ruby isn't
the popular framework it once was. I am on the other hand trying to lean into
another new year resolution - "if it ain't broke, don't fix it". I often pick up
new things because they're *fun* instead of them *just working*. No longer, at
least here.

I hope you like the new look and feel. Thanks for reading!
