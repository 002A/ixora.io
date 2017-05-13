.. title: Monoscopic 360 Video Implementation
.. slug: monoscopic-360-video-implementation
.. date: 2017-05-13 08:14:33 UTC-04:00
.. tags: mathjax
.. category: 
.. link: 
.. description: 
.. type: text

Blah blah blah

No stitching or appearance of seams


Balancing Efficiency and Performance
====================================

A very important question centers on the `size()` of the Processing sketch and number of panels. If the sketch size is too small or there are not enough panels, the end result will be pixelated. The video size might be 4K but there won't be 4K of resolution. If the sketch size is too large or there are too many panels, performance will suffer as Camera3D and Processing will be doing needless work that will not improve the final resolution.

As stated earlier, it is optimal to have one panel for each of the six camera orientations. This minimizes the number of calls to the ``draw()`` method. The optimal size for the Processing sketch is a height :math:`h_{f}` and width :math:`w_{f}` equal to :math:`\frac{w_{p}}{\pi}`. This cannot always be achieved for all computers and projection sizes :math:`w_{p}`, which is why this Generator supports multiple panels per camera orientation.

To obtain the optimal size :math:`\frac{w_{p}}{\pi}` we can use trigonometry to find the minimum size that ensures that neighboring pixels in the equirectangular projection are derived from different pixels in the rendering panels. Since an equirectangular projection's resolution is not uniform throughout the entire resolution, this needs to be done in the area where resolution is weakest. It may not be obvious, but that area is along the projection's equator, particularly at the four points that are at the center of the four panels that intersect the equator. This will become more clear later.

Our first step is to derive the link between the pixels in the equirectangular projection and the pixels in each panel.

blah blah blah

.. math::

  \lim_{x \to \infty} x \tan \left( \frac{2\pi}{x} \right) = 2\pi
  
There's nothing special about :math:`\pi` as this happens to be true for any constant :math:`z`:

.. math::

  \lim_{x \to \infty} x \tan \left( \frac{z}{x} \right) = z

We can see this by replacing our trigonometric functions with their respective infinite series, like so:

.. math::

  \lim_{x \to \infty}
  \frac{ x \sin \left( \frac{z}{x} \right)}
       {   \cos \left( \frac{z}{x} \right)}

.. math::

  \lim_{x \to \infty}
       \frac{ x \left( \frac{z}{x} - \frac{(\frac{z}{x})^3}{3!} + \frac{(\frac{z}{x})^5}{5!} - \frac{(\frac{z}{x})^7}{7!} + \cdots \right) }
            {   1 - \frac{(\frac{z}{x})^2}{2!} + \frac{(\frac{z}{x})^4}{4!} - \frac{(\frac{z}{x})^6}{6!} + \cdots } \\

Evaluate the numerator's product, positioning us to take the limit.

.. math::

  \lim_{x \to \infty}
       \frac{ z - \frac{x (\frac{z}{x})^3}{3!} + \frac{x (\frac{z}{x})^5}{5!} - \frac{x (\frac{z}{x})^7}{7!} + \cdots }
            {   1 - \frac{(\frac{z}{x})^2}{2!} + \frac{(\frac{z}{x})^4}{4!} - \frac{(\frac{z}{x})^6}{6!} + \cdots }

Most of the terms drop out when :math:`x \to \infty`, proving that

.. math::

  \lim_{x \to \infty} x \tan \left( \frac{z}{x} \right) = \frac{z}{1} = z
