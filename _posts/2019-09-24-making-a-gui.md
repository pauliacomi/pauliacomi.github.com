---
layout: post
title:  "Making a Qt GUI for a Python package"
date:   2019-09-24 15:55:17 +0100
tags: programming python
---

While building the [pyGAPS](https://pygaps.readthedocs.io) framework, several people
reached out to me, interested in an easier to use interface to the program. It is true
that coding isn't everyone's cup of tea (although it should be!), so I gave some thought
to building a GUI for the software. As I had no clue on how this could be done, the idea
was left on the sidelines.

However, while recently getting into XRD structural characterisation, I came across a
nifty piece of software called [Dioptas](https://github.com/Dioptas/Dioptas). I was
surprised to find out that not only it was open source (still unfortunately uncommon in
the scientific community, and I want to take a moment to bash [Jana](http://jana.fzu.cz/),
an otherwise amazing piece of software which has the unfortunate tendency to crash and
delete all your work), but also written in Python. There's no better way to learn than
standing on the shoulders of giants.

Work in progress...


```python
import warnings
import pygaps
from PySide2 import QtCore

class LangmuirModel():

    def __init__(self, isotherm, parent=None):

        self._isotherm = isotherm

        # Properties
        adsorbate = pygaps.Adsorbate.find(self._isotherm.adsorbate)
        self.cross_section = adsorbate.get_prop("cross_sectional_area")

        # Loading and pressure
        self.loading = self._isotherm.loading(branch='ads',
                                              loading_unit='mol',
                                              loading_basis='molar')
        self.pressure = self._isotherm.pressure(branch='ads',
                                                pressure_mode='relative')

        self.minimum = None
        self.maximum = None
```