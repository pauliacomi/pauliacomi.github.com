---
layout: post
title:  "Plotly vs. Bokeh: Interactive Python Visualisation Pros and Cons"
date:   2020-06-07 15:55:17 +0100
tags: programming python
comments: true
---

<script src="https://cdn.bokeh.org/bokeh/release/bokeh-2.1.0.min.js" crossorigin="anonymous"></script>
<script type="text/javascript">window.PlotlyConfig = { MathJaxConfig: 'local' };</script>
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

Over the last year, I've worked extensively with large datasets in Python, which
meant that I needed a more powerful data visualisation than trusty old
Matplotlib. There are essentially only two libraries which provide the high
level of interactivity I was looking for, while being mature enough:
[Plotly (+Dash)](https://plotly.com/) and [Bokeh](https://docs.bokeh.org/). Each
has their own strengths and weaknesses and after taking some time to work with
both, I can honestly say that there's no **best** option.

## What I wanted

There were two uses I had in mind for this kind of visualisation tool. First,
while working in iPython or the Jupyter notebook, I wanted something that can
allow me to quickly explore the data in a straight-forward, interactive way.
While there are interactive backends for Matplotlib, powerful when combined with
Jupyter widgets ([ipywidgets](https://ipywidgets.readthedocs.io)), I found them
somewhat cumbersome to use, and requiring a large amount of boilerplate code. I
was therefore looking for something that can quickly generate a figure where
zooming, panning and rescaling were as easy as possible.

The second use case is the construction of shareable dashboards. I am a big
proponent of data visualisation: a picture is worth 1000 words, but an
interactive figure is worth 1000 pictures. There are many great tools out there
for professional data aggregation and visualisation which are part of various
business intelligence (BI) suites: think Tableau, Microsoft Power BI, Amazon
QuickSight etc. These also have something else in common: they are expensive and
difficult to set up unless you are part of a Fortune 500 company and can afford
to dedicate an entire department to the task. Another important caveat is the
breadth of knowledge required to take data from the conceptual phase to an
application phase. There are tools which fit at each point of the process:
acquisition, processing, storage, serving, display, with each one often
requiring a different programming background (R/Python, SQL/NoSQL,
JavaScript/TypeScript). It is often better for small projects to use a toolchain
that has *some batteries included*, and works in a single environment (like
Python or R). This is, of course, *at the cost of flexibility and performance*.

## What then?

Python is my go-to programming language. It is one of the few which combines
ease of use with unmatched versatility. Since both Plotly and Bokeh are
libraries which offer projections in Python, it was only natural to try them out
for the aforementioned purposes. It can be very easy to start out with either
one, but for more advanced uses they begin to run into some quirks. I'll start
with, an overview of these libraries, then move to ease of use, advantages and
downsides. Let me also preface this discussion by saying that I am not a
programmer by training, so expect the opinion of a regular user.

Of the two, Bokeh appears to have a much smaller core team, which means that
their product is leaner and meaner, with a fairly narrow focus of what the
module *can* and *cannot* do. On the other hand, the lack of developers means
that they are often slow to bring new features to the code (I am **still**
waiting for a good table component for data) and some bugs can linger for longer
that expected. It is deeply integrated with Python, although secondary R, Julia
and Scala bindings exist as well, with various states of feature parity. There
are also a host of other third party modules, part of the
[HoloViz](https://holoviz.org) framework (like HoloViews, GeoViews and
Datashader), which attempt to extend Bokeh (and matplotlib!) with a higher level
interface. Unfortunately, there is a large degree of overlap between features,
making their use somewhat confusing.

Plotly is a more encompassing framework, attempting to not only bring
full-featured bindings for Python, but also for R (and pure JavaScript as well).
The folks at Plotly have recently made multiple changes after a new round of
seed funding, in particular moving away from the previous business model of
attempting to host all Plotly graphs on their servers, and placing an emphasis
on flexibility. They are attempting to customise their offering to multiple use
cases, by using several modules that offer access to different functionality
through the same underlying framework: besides Plotly, there is Dash for
dashboards, Plotly Express for fast figure generation, Figure Factories for
complex, preset, layouts, Dash DataTable for tabular display etc. While this
means that the library is more fully featured on its own, it can be confusing,
as there are multiple ways of getting similar results, with no intuitive
explanation as to which should be used. The transition to an investor-backed
company also means that Plotly is expected to become profitable somewhere down
the line, which raises some question regarding the long-term commitment to open
source.

## Use in Jupyter / iPython / scripts

The two frameworks provide an object-oriented interface to figure creation.
Plotly also offers more direct functions (à la ``plt.plot``) with their Plotly
Express module. I use the former the most, since it is easier to extend. Here
are simple examples for each framework, each with the resulting output. It's
obvious that there's not much difference in terms of code and features, and both
frameworks do a good job for this use case.

### Bokeh

``` python

from bokeh.plotting import figure, output_notebook, show
output_notebook() # needs to be called to output in the notebook

# prepare some data
x = [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0]
y = [i**2 for i in x]

# create a new plot
fig = figure(
    tools="pan,box_zoom,wheel_zoom,zoom_in,zoom_out,reset,save",
    title="Example Bokeh plot",
    y_axis_type="log",
    y_range=[0.001, 10**3],
    x_axis_label='Sections',
    y_axis_label='Particles (log)',
    plot_width=600, plot_height=400,
)

# plot some data ('renderers' in Bokeh)
fig.circle(x, x, legend_label="y=x", fill_color="white", size=8)
fig.line(x, y, legend_label="y=x^2", line_width=3, line_color="red")

# show the results
show(fig)
```
The resulting figure is below. Try it out, it's interactive!
<div class="bk-root" id="214c4dff-6ee2-433f-b262-343c0a732d40" data-root-id="1821"></div>
<script type="text/javascript">
    (function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                var docs_json = '{"3106a900-e1d6-4073-a9e1-133abbc2648c":{"roots":{"references":[{"attributes":{"below":[{"id":"1832"}],"center":[{"id":"1835"},{"id":"1839"},{"id":"1867"}],"left":[{"id":"1836"}],"plot_height":400,"renderers":[{"id":"1859"},{"id":"1872"}],"title":{"id":"1822"},"toolbar":{"id":"1848"},"x_range":{"id":"1824"},"x_scale":{"id":"1828"},"y_range":{"id":"1826"},"y_scale":{"id":"1830"}},"id":"1821","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1830","type":"LogScale"},{"attributes":{},"id":"1840","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"red","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"1871","type":"Line"},{"attributes":{"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"1880"},"selection_policy":{"id":"1881"}},"id":"1856","type":"ColumnDataSource"},{"attributes":{},"id":"1862","type":"BasicTickFormatter"},{"attributes":{"line_color":"red","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"1870","type":"Line"},{"attributes":{},"id":"1843","type":"ZoomInTool"},{"attributes":{"text":"Example Bokeh plot"},"id":"1822","type":"Title"},{"attributes":{},"id":"1942","type":"UnionRenderers"},{"attributes":{},"id":"1842","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"1869"},"glyph":{"id":"1870"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1871"},"selection_glyph":null,"view":{"id":"1873"}},"id":"1872","type":"GlyphRenderer"},{"attributes":{},"id":"1828","type":"LinearScale"},{"attributes":{"overlay":{"id":"1847"}},"id":"1841","type":"BoxZoomTool"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"1859"}]},"id":"1868","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"1858","type":"Circle"},{"attributes":{"end":1000,"start":0.001},"id":"1826","type":"Range1d"},{"attributes":{"source":{"id":"1869"}},"id":"1873","type":"CDSView"},{"attributes":{},"id":"1941","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1840"},{"id":"1841"},{"id":"1842"},{"id":"1843"},{"id":"1844"},{"id":"1845"},{"id":"1846"}]},"id":"1848","type":"Toolbar"},{"attributes":{},"id":"1833","type":"BasicTicker"},{"attributes":{},"id":"1846","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1847","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"1836"},"dimension":1,"ticker":null},"id":"1839","type":"Grid"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"1872"}]},"id":"1882","type":"LegendItem"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"1857","type":"Circle"},{"attributes":{"axis":{"id":"1832"},"ticker":null},"id":"1835","type":"Grid"},{"attributes":{"axis_label":"Particles (log)","formatter":{"id":"1864"},"ticker":{"id":"1837"}},"id":"1836","type":"LogAxis"},{"attributes":{},"id":"1844","type":"ZoomOutTool"},{"attributes":{},"id":"1880","type":"Selection"},{"attributes":{"data_source":{"id":"1856"},"glyph":{"id":"1857"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1858"},"selection_glyph":null,"view":{"id":"1860"}},"id":"1859","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]},"selected":{"id":"1941"},"selection_policy":{"id":"1942"}},"id":"1869","type":"ColumnDataSource"},{"attributes":{},"id":"1881","type":"UnionRenderers"},{"attributes":{},"id":"1824","type":"DataRange1d"},{"attributes":{},"id":"1845","type":"ResetTool"},{"attributes":{"items":[{"id":"1868"},{"id":"1882"}]},"id":"1867","type":"Legend"},{"attributes":{"axis_label":"Sections","formatter":{"id":"1862"},"ticker":{"id":"1833"}},"id":"1832","type":"LinearAxis"},{"attributes":{"source":{"id":"1856"}},"id":"1860","type":"CDSView"},{"attributes":{"num_minor_ticks":10},"id":"1837","type":"LogTicker"},{"attributes":{"ticker":null},"id":"1864","type":"LogTickFormatter"}],"root_ids":["1821"]},"title":"Bokeh Application","version":"2.0.2"}}';
                var render_items = [{"docid":"3106a900-e1d6-4073-a9e1-133abbc2648c","root_ids":["1821"],"roots":{"1821":"214c4dff-6ee2-433f-b262-343c0a732d40"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
</script>

More info on how to customise figures to your liking can be found on the
[Bokeh](https://docs.bokeh.org/en/latest/docs/user_guide/plotting.html) page.

### Plotly

```python
import plotly.graph_objects as go

# prepare some data
x = [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0]
y = [i**2 for i in x]

# create a new plot
fig = go.Figure(
    layout=dict(
        title="Example Plotly plot",
        yaxis_type="log",
        yaxis_range=[-3, 3],  # Plotly takes ranges differently!
        xaxis_title='sections',
        yaxis_title='particles',
    )
)

# plot some data ('traces' in Plotly)
fig.add_trace(go.Scatter(x=x, y=x, mode='markers', name="y=x", marker=dict(color='royalblue', size=8)))
fig.add_trace(go.Scatter(x=x, y=y, name="y=x^2", line=dict(width=3)))

# show the results
fig.show()
```
As before, the resulting interactive figure is below.

<div id="66c1cdad-5716-4bd6-8dc6-a27c73f6dd07" class="plotly-graph-div" style="height:100%; width:100%;"></div>
<script type="text/javascript">
    window.PLOTLYENV = window.PLOTLYENV || {};
    if (document.getElementById("66c1cdad-5716-4bd6-8dc6-a27c73f6dd07")) {
        Plotly.newPlot(
            '66c1cdad-5716-4bd6-8dc6-a27c73f6dd07',
            [{ "marker": { "color": "royalblue", "size": 8 }, "mode": "markers", "name": "y=x", "type": "scatter", "x": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0], "y": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0] }, { "line": { "width": 3 }, "name": "y=x^2", "type": "scatter", "x": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0], "y": [0.010000000000000002, 0.25, 1.0, 2.25, 4.0, 6.25, 9.0] }],
            { "template": { "data": { "bar": [{ "error_x": { "color": "#2a3f5f" }, "error_y": { "color": "#2a3f5f" }, "marker": { "line": { "color": "#E5ECF6", "width": 0.5 } }, "type": "bar" }], "barpolar": [{ "marker": { "line": { "color": "#E5ECF6", "width": 0.5 } }, "type": "barpolar" }], "carpet": [{ "aaxis": { "endlinecolor": "#2a3f5f", "gridcolor": "white", "linecolor": "white", "minorgridcolor": "white", "startlinecolor": "#2a3f5f" }, "baxis": { "endlinecolor": "#2a3f5f", "gridcolor": "white", "linecolor": "white", "minorgridcolor": "white", "startlinecolor": "#2a3f5f" }, "type": "carpet" }], "choropleth": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "type": "choropleth" }], "contour": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "contour" }], "contourcarpet": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "type": "contourcarpet" }], "heatmap": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "heatmap" }], "heatmapgl": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "heatmapgl" }], "histogram": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "histogram" }], "histogram2d": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "histogram2d" }], "histogram2dcontour": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "histogram2dcontour" }], "mesh3d": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "type": "mesh3d" }], "parcoords": [{ "line": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "parcoords" }], "pie": [{ "automargin": true, "type": "pie" }], "scatter": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scatter" }], "scatter3d": [{ "line": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scatter3d" }], "scattercarpet": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scattercarpet" }], "scattergeo": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scattergeo" }], "scattergl": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scattergl" }], "scattermapbox": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scattermapbox" }], "scatterpolar": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scatterpolar" }], "scatterpolargl": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scatterpolargl" }], "scatterternary": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scatterternary" }], "surface": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "surface" }], "table": [{ "cells": { "fill": { "color": "#EBF0F8" }, "line": { "color": "white" } }, "header": { "fill": { "color": "#C8D4E3" }, "line": { "color": "white" } }, "type": "table" }] }, "layout": { "annotationdefaults": { "arrowcolor": "#2a3f5f", "arrowhead": 0, "arrowwidth": 1 }, "coloraxis": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "colorscale": { "diverging": [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]], "sequential": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "sequentialminus": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]] }, "colorway": ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], "font": { "color": "#2a3f5f" }, "geo": { "bgcolor": "white", "lakecolor": "white", "landcolor": "#E5ECF6", "showlakes": true, "showland": true, "subunitcolor": "white" }, "hoverlabel": { "align": "left" }, "hovermode": "closest", "mapbox": { "style": "light" }, "paper_bgcolor": "white", "plot_bgcolor": "#E5ECF6", "polar": { "angularaxis": { "gridcolor": "white", "linecolor": "white", "ticks": "" }, "bgcolor": "#E5ECF6", "radialaxis": { "gridcolor": "white", "linecolor": "white", "ticks": "" } }, "scene": { "xaxis": { "backgroundcolor": "#E5ECF6", "gridcolor": "white", "gridwidth": 2, "linecolor": "white", "showbackground": true, "ticks": "", "zerolinecolor": "white" }, "yaxis": { "backgroundcolor": "#E5ECF6", "gridcolor": "white", "gridwidth": 2, "linecolor": "white", "showbackground": true, "ticks": "", "zerolinecolor": "white" }, "zaxis": { "backgroundcolor": "#E5ECF6", "gridcolor": "white", "gridwidth": 2, "linecolor": "white", "showbackground": true, "ticks": "", "zerolinecolor": "white" } }, "shapedefaults": { "line": { "color": "#2a3f5f" } }, "ternary": { "aaxis": { "gridcolor": "white", "linecolor": "white", "ticks": "" }, "baxis": { "gridcolor": "white", "linecolor": "white", "ticks": "" }, "bgcolor": "#E5ECF6", "caxis": { "gridcolor": "white", "linecolor": "white", "ticks": "" } }, "title": { "x": 0.05 }, "xaxis": { "automargin": true, "gridcolor": "white", "linecolor": "white", "ticks": "", "title": { "standoff": 15 }, "zerolinecolor": "white", "zerolinewidth": 2 }, "yaxis": { "automargin": true, "gridcolor": "white", "linecolor": "white", "ticks": "", "title": { "standoff": 15 }, "zerolinecolor": "white", "zerolinewidth": 2 } } }, "title": { "text": "Example Plotly plot" }, "xaxis": { "title": { "text": "Sections" } }, "yaxis": { "range": [-3, 3], "title": { "text": "Particles (log)" }, "type": "log" } },
            { "responsive": true }
        )
    };
</script>

More info on how to customise figures to your liking can be found on the
[Plotly](https://plotly.com/python/) page.

## Use as a dashboard

When it comes to using either Bokeh or Plotly in a hosted dashboard, it is
useful to understand some of the *under-the-hood* concepts. Both frameworks are
based on a producer-consumer architecture communicating over JSON. What this
means is that the Python (or R, or Julia...) part of the framework runs on the
server, and generates JSON objects, which are then passed to a JavaScript
library running browser-side. This library, `plotly.js` (a `D3.js` wrapper) or
`bokeh.js` respectively, takes care of displaying the data in the browser. In
most cases, no JS knowledge is necessary in order to use their capabilities.
Bokeh tends to have more layers of abstraction then Plotly between the Python
objects and the underlying data structure, because it *attempts to keep the two
in sync*.

It is also the case that both frameworks integrate with an existing Python-based
web server which takes care of the nitty-gritty networking:
[Flask](https://flask.palletsprojects.com/) for Plotly and
[Tornado](https://www.tornadoweb.org/en/stable/) for Bokeh. Similarly, knowledge
of the inner workings of these servers is not required, unless you plan to
heavily customize the application. It should be noted however that the Bokeh
backend, Tornado, operates over WebSockets. This means that communication
between server and client is done on a continuously connected "pipe", meaning
it's faster, asynchronous and with less overhead, allowing Bokeh apps to be more
feature-rich in terms of interactivity. On the other hand, the Plotly backend,
Flask, is a [WSGI](https://wsgi.readthedocs.io/en/latest/) microframework, which
is configured out of the box to be synchronous. Plotly dashboards can't easily
save intermediary calculations for example.


### Plotly

When it comes to Plotly, the dashboard functionality is handled by the
complementary [Dash library](https://dash.plotly.com/). In the code, a global
`app` object is created, which is then accessed through properties such as
`app.layout` and `app.callback`. Writing apps in Dash is as declarative as
creating figures in Plotly, with the app layout composed by nested dictionaries
which end up resembling HTML in organisation. Interactivity is handled through
annotated callback functions, which specify objects as `Inputs` and `Outputs`
e.g. when a button is pressed (`Input`) a figure output is changed to become
logarithmic (`Output`). The model is easy to understand and to start with.
A basic example takes the form of:

```python
import dash
import dash_core_components as dcc
import dash_html_components as html

# The global app object
app = dash.Dash(__name__)

# The layout, including figures
app.layout = html.Div(children=[
    html.H1(children='Hello'),
    html.Div(id='my-div', children='Your text will go here!'),
    dcc.Input(id='my-id', value='initial value', type='text'),
    dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': [1, 2, 3], 'y': [4, 1, 2], 'type': 'bar', 'name': 'A'},
                {'x': [1, 2, 3], 'y': [2, 4, 5], 'type': 'bar', 'name': 'B'},
            ],
            'layout': {
                'title': 'Dash Data Visualization'
            }
        }
    )
])

# Callbacks
@app.callback(
    Output(component_id='my-div', component_property='children'),
    [Input(component_id='my-id', component_property='value')]
)
def update_div(input_value):
    return 'You entered "{}"'.format(input_value)

if __name__ == '__main__':
    app.run_server(debug=True)
```

And can be run directly as ``python app.py``.

### Bokeh

The
[Bokeh server](https://docs.bokeh.org/en/latest/docs/user_guide/server.html) is
slightly more difficult to get started with. In Bokeh terminology a similar
global object (a *current document*, or *curdoc*) is created, to which multiple
python *roots* can be added, where each root is a figure or complex layout. To
fully understand the model it helps to know that in the end, an HTML template is
populated with the *roots*, and becomes the *curdoc*. Callbacks are pure Python
functions, and do not have to be specially marked, just attached to specific triggers
such as buttons. A very simple example is as follows:

```python
from random import random

from bokeh.layouts import column
from bokeh.models import Button
from bokeh.plotting import figure, curdoc

# create a plot and style its properties
p = figure()
# add a text renderer to our plot (no data yet)
r = p.text(x=[0, 100], y=[0, 100], text=['start', 'end'])
# store a link to the plot data
ds = r.data_source

# create a callback that will add a number in a random location
def callback():
    new_data = {}
    new_data['x'] = ds.data['x'] + [random()*70 + 15]
    new_data['y'] = ds.data['y'] + [random()*70 + 15]
    new_data['text'] = ds.data['text'] + [str(random())]
    ds.data = new_data

# add a button widget and configure with the call back
button = Button(label="Press Me")
button.on_click(callback)

# put the button and plot in a layout and add to the document
curdoc().add_root(column(button, p))
```

Which should be run with the Bokeh server as ``bokeh serve app.py``.

### Complex dashboards

I've built applications using either Dash or the Bokeh Server. For a working
example of a complex Bokeh application, check out my dashboard exploring
potential gas separation materials from the NIST database
[here](https://separation-explorer.herokuapp.com/), and its
[source](https://github.com/pauliacomi/separation-explorer). For an example of
how to use Plotly to create a dashboard, have a look at
[this overview](https://vortexplorer.herokuapp.com/) of heavy metal albums, as
well as its own [source](https://github.com/pauliacomi/vortexplorer).

## Strengths and weaknesses

### Plot features

For 2D data, both frameworks can deal well with scatter, line, bar and map
charts, as well as many other domain-specific figures. Interactivity is superb,
with simple and intuitive motions to pan, zoom, rescale etc. The ability to
hover over the data to get detailed information is also standard for the two.
One Bokeh-specific feature that it allows for some inherent data
transformations, such as adding jitter to crowded plots, although these can be
implemented in Plotly manually with some data treatment.

On the other hand Bokeh has no inherent 3D graphing functionality, and it is
here where Plotly takes the lead. It can generate complicated 3D scatter and
surface plots that make it invaluable for exploratory tasks like principal
component analysis. Combined with the fact that Plotly has more types of graphs
available out of the box (although they are only useful in very specific
fields), it comes out ahead.

**Winner: Plotly**

### Ease of learning and use

As seen above, generating figures with either library is quite similar. However,
with the recent introduction of
[Plotly Express](https://plotly.com/python/plotly-express/), one-line plotting
with Plotly from a Pandas DataFrame can be as easy and terse as what is offered
by Seaborn.

```python
import plotly.express as px
fig = px.scatter(df, x="sepal_width", y="sepal_length")
fig.show()
```

However, like with Matplotlib, I have found that styling graphs for exactly what
you want with either Bokeh or Plotly can be quite tedious. The fact that the
functions and properties seem to follow per-case naming bases, means that
keeping an open browser tab to the online reference, or repeatedly calling
`help()`, is going to be the norm. What is the, code examples given in either
documentation often use completely different method calls and coding styles,
meaning that the learning curve can be steep. It used to be the case that
documentation for Bokeh was quite incomplete, but recent updates addressed that,
so now it is at a similar level for both libraries.

**Winner: Plotly, but only by a small margin.**

### Data handling

While both libraries can easily take lists, arrays and DataFrames as data, a key
feature of Bokeh comes in the form of a ``ColumnDataSource``, a custom data
storage class which can be considered somewhere between a ``pandas.DataFrame``
and a ``dict``. It can be passed to multiple graphs, which results in a shared
dataset, linked between all visualisations. What is more, data contained within
can be easily appended or patched, making dashboards which rely on very large
datasets much quicker to update. On the other hand, the same ColumnDataSource
forces you to adopt a set format for your data, with equal length columns, and
means that you lose some of the methods of a real DataFrame. However, I found
this to be a small price to pay for the resulting features.

```python
from bokeh.layouts import gridplot
from bokeh.plotting import figure, show
from bokeh.models import ColumnDataSource

source = ColumnDataSource(
    data={
        'x_values': [1, 2, 3, 4, 5],
        'y_values': [6, 7, 2, 3, 6],
        'z_values': [5, 4, 3, 2, 1],
})

f1 = figure()
f1.circle(x='x_values', y='y_values', source=source)
f2 = figure()
f2.line(x='x_values', y='z_values', source=source)

show(gridplot([[f1, f2]]))
```

Plotly is able to similarly take dictionaries, lists and DataFrames, but there
are no easy ways to connect graphs to the same underlying dataset. On the other
hand, it has a deeper integration with DataFrames, allowing syntactic sugar such
as automatic plot generation or data selection.

**Winner: Bokeh**

### Dashboard interactions

The biggest downside of Dash is the handling of user state. As it stands, all
requests are stateless
[by default](https://dash.plotly.com/sharing-data-between-callbacks). If you
have to do an expensive computation, and the user then desires the data to be
changed to a logarithmic format the only options are:

    - to repeat the entire computation
    - store all data in the user's browser, then send it back when a change is required
    - use files or in-memory databases (such as Redis) to cache data

Neither option is both efficient or simple to implement. On the other hand, due
to Tornado's WebSockets, Bokeh allows for constantly-connected sessions and can
be easily used for multiple back and forth interactions.

**Winner: Bokeh**

### Server, widgets and integrations

Several components are provided by both frameworks by default to make
interactions simple to implement such as buttons, sliders, radio buttons,
dropdowns, text input, tables and much more. The Plotly components tend to be
slightly more refined out of the box, but both do the job just fine.

Plotly benefits by an extensive debug layer on both the browser and Python side,
which attempts to provide verbose details if something goes wrong and reload the
application on any code change. I found this to be a mixed bag, as it can be
equally helpful and annoying. Your mileage may vary.

Finally, both servers allow for the option to override the default HTML, CSS and
JS that is loaded in the final application, making it possible to use standard
web components and cohesively theme your app. I found that HTML templates were
easier to specify with Bokeh, being part of the dashboard folder structure.
However, since the layout capabilities are much more advanced in Plotly/Dash,
it's less likely to be needed.

**Winner: Both**

## Conclusion

As we've seen, both Plotly and Bokeh can be powerful tools in their own right,
although they come with their own quirks and challenges. If I want something
quick to use in the Jupyter notebook, I would reach to the new Plotly Express
framework. For the construction of a complex dashboard, necessitating observing
the same underlying data set, perhaps with some lengthy calculations thrown in
that need to conserve user state, Bokeh is the likelier choice.



