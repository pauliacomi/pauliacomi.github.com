---
layout: post
title:  "Building this website"
date:   2018-12-12 15:55:17 +0100
tags: programming webdesign
---

It makes sense that in the first post on my new website I would talk a 
bit about the technical side of it.

I used to have another site which I built about three years ago. The aim
was to get up to speed with new **HTML5** features, as well as learning
some Javascript. I was also hosting
the site on my Raspberry Pi B I used as a NAS in my house.
Therefore I built everything from scratch since I was
looking for performance and a small footprint.
That site served its purpose, but the web has changed a lot since then.
In particular, I was tempted by the promise of [free hosting of 
static sites offered by GitHub](https://pages.github.com/). 
Site deployment is a breeze
(just git push) and it is powerful enough to suffice for what I need.

Since static site generators are very well suited for a personal 
website, I was going to use one. Initially I was tempted by
[Pelican](https://blog.getpelican.com/) as it is built in 
Python and uses reStructuredText, which with I am familiar.
However, because of the integration of GitHub pages
with [Jekyll](https://jekyllrb.com/), I thought I'd give that a try.

After a few hoops:

* configuring ruby on windows - _failed_
* using ruby with linux subsystem for windows - _success!_
* figuring out how to configure Jekyll - _takes forever for a newbie_
* building a personalized theme (I used Cayman for reference)
* pretending that I know what colours work well together

I was left with the current version of the site, of which I
am happy enough.
