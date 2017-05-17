.. title: Monoscopic 360 Video Optimization
.. slug: monoscopic-360-video-optimization
.. date: 2017-05-13 08:14:33 UTC-04:00
.. tags: mathjax
.. category: 
.. link: 
.. description: 
.. type: text

A very important question centers on the ``size()`` of the Processing sketch and number of panels. If the sketch size is too small or there are not enough panels, the end result will be pixelated. The video size might be 4K but there won't be 4K of resolution. If the sketch size is too large or there are too many panels, performance will suffer as Camera3D and Processing will be doing unnecessary work that will not improve the final output.

As stated earlier, it is optimal to have one panel for each of the six camera orientations to minimize the number of calls to the ``draw()`` method. The optimal size for the Processing sketch is a square with height :math:`h_{f}` and width :math:`w_{f}` equal to :math:`\frac{w_{p}}{\pi}`. This cannot always be achieved for all computers and projection sizes :math:`w_{p}`, which is why this Generator supports multiple panels per camera orientation.

To obtain the optimal size :math:`\frac{w_{p}}{\pi}` we can use trigonometry to find the minimum size that ensures that neighboring pixels in the equirectangular projection are derived from different pixels in the rendering panels. Since an equirectangular projection's resolution is not uniform throughout the entire resolution, this needs to be done in the area where resolution is weakest. It may not be obvious, but that area is along the projection's equator, at the four points that are at the center of the four panels that intersect the equator. This will become more clear later.

Our first step is to derive the link between the pixels in the equirectangular projection and the pixels in each panel.

Consider an equirectangular projection with pixel dimensions :math:`w_{e}` and :math:`h_{e}`. Each pixel in the projection has a :math:`\theta` and :math:`\phi` value in polar coordinates. The horizontal and vertical step sizes from one pixel to the next are:

.. math::

  d\theta &= \frac{2\pi}{w_{e}} \\
  d\phi &= \frac{\pi}{h_{e}}

The cartesian coordinates of a pixel in the equirectangular projection belonging to the front panel mapped to a sphere with radius 0.5 is:

.. math::

  x_{s} &= -0.5 \sin(\phi) \sin(\theta) \\
  y_{s} &= -0.5 \cos(\phi) \\
  z_{s} &= -0.5 \sin(\phi) \cos(\theta)

If we project that point onto the face of a unit cube centered at the origin, we can calculate the coordinates of the new point using an (x,y) coordinate space of that face with an origin in the corner.

.. math::

  x_{f} &= 0.5 - \frac{x_{s}}{2z_{s}} \\
        &= 0.5 - \frac{\sin(\theta)}{2\cos(\theta)} \\
        &= 0.5 - 0.5 \tan(\theta) \\
  y_{f} &= 0.5 - \frac{y_{s}}{2z_{s}} \\
        &= 0.5 - \frac{\cos(\phi)}{2\sin(\phi)\cos(\theta)} \\
        &= 0.5 - 0.5 \frac{\cot(\phi)}{\cos(\theta)} \\

If the face of the unit cube is one of the Generator's panels, the pixel coordinates of the point would be:

.. math::

  x_{p} &= w_{p} (0.5 - 0.5 \tan(\theta)) \\
  y_{p} &= h_{p} \left(0.5 - 0.5 \frac{\cot(\phi)}{\cos(\theta)} \right) \\

Our goal is to calculate the dimensions :math:`(w_{p}, h_{p})` of the panel in pixels such that

.. math::

  w_{p} (0.5 - 0.5 \tan(\theta - d\theta)) &- w_{p} (0.5 - 0.5 \tan(\theta)) &= 1 \\
  h_{p} \left(0.5 - 0.5 \frac{\cot(\phi - d\phi)}{\cos(\theta)} \right) &- h_{p} \left(0.5 - 0.5 \frac{\cot(\phi)}{\cos(\theta)} \right) &= 1 \\

This can be simplified to:

.. math::

  w_{p} &= \frac{2}{\tan(\theta) - \tan(\theta - d\theta)} \\
  h_{p} &= \frac{2\cos(\theta)}{\cot(\phi) - \cot(\phi - d\phi)} \\

We quickly observe that the calculated dimensions :math:`(w_{p}, h_{p})` are largest when :math:`\theta = 0` and :math:`\phi = \frac{\pi}{2}`, found at the center of the panel. That means this is the critical point and we can simplify the equations further and substitute in our projection step sizes:

.. math::

  w_{p} &= \frac{2}{\tan(\frac{2\pi}{w_{e}})} \\
  h_{p} &= 2\tan \left(\phi - \frac{\pi}{h_{e}} \right) \\

We can then calculate the correct panel dimensions are (1304, 1304) pixels for a 4K video.

In Camera3D's example code there is a resolution test sketch for this Generator called Monoscopic360ResolutionTest. You can empirically test these calculations using that utility.

Interestingly, we note that for large values of :math:`w_{e}`:

.. math::

  w_{p} &= \frac{2}{\tan(\frac{2\pi}{w_{e}})} \approx \frac{w_{e}}{\pi} \\

This is the case because

.. math::

  \lim_{x \to \infty} x \tan \left( \frac{2\pi}{x} \right) = 2\pi
  
There's nothing special about :math:`\pi` here as this happens to be true for any constant :math:`z`:

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

It gave me great joy to find an elegant solution to this problem.
