---
layout: post
title:  "New website design"
date:   2019-09-23 15:55:17 +0100
tags: programming webdesign
---

While in the process of updating my publications I realised that the layout I of my
website was very much outdated. It's amazing what a counts as "good enough" after several
hours of tedious work.

It was time to renew the theme then!

Originality is tough in the modern age, as everything has been done by someone, somewhere.
Together with the lack of any artistic inclination, I was more than happy with getting
_inspired_ from other sources. Throughout my internet travels I came across several
websites which have been particularly nice on the eyes, such as [this one](https://swdg.io/)
or [this other one](https://thelehhman.com/). They have been duly saved as latter sources
of inspiration.

However, while the basic layout was decided, several improvements to the actual code were
needed. I was unhappy with the `<div>`-heavy layouts of the past and switched the site to
a simpler, cleaner `flexbox` layout (at least until `css-grid` gets commonplace). Some
changes were made to the responsiveness of the website, to cover all the use cases.

I was also unhappy with using an icon-based font like [Font Awesome](https://fontawesome.com)
or [Academicons](https://jpswalsh.github.io/academicons/). They are great for many things,
but loading tens of glyphs in order to display the site is not the fastest. Instead, I
used Icomoon's [web app](https://icomoon.io/app/) to select the exact icons needed, then
download them as `svg`. They were imported from a separate file, weighing in at 10 kb and
with the added benefit of being cache-able by the browser.

Overall the total site comes in at less than 100 kb, with 70 kb taken up by the background
image. Ironically, Google Analytics tops that off with ~60 kb of javascript for the
tracking. Oh well, I am calling it _good enough_ again.