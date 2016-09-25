.. title: Color Blindness Simulation Research
.. slug: color-blindness-simulation-research
.. date: 2016-08-28 23:46:53 UTC-04:00
.. tags: mathjax
.. category:
.. link:
.. description:
.. type: text

To understand color blindness simulation, one must first understand how human vision works. Our eyes enable us to see, but how?

Human Visual System
-------------------

A human trichromat's eyes contain 3 types of cone cells, each of which has a unique sensitivity to different wavelengths of light. These "spectral sensitivities" mean the cone cells are "stimulated" by different wavelengths of light. Our visual system experiences color by comparing the relative stimulations of the different cone cells.

.. image:: /images/colorblindness/cone_spectral_sensitivities.png
  :width: 50%
  :align: center

The above chart plots the normalized stimulation levels of the cones when they are exposed to different wavelengths of light. Sometimes the cones are referred to as blue, green, and red cones, corresponding to wavelengths near the "peaks" of each line. This is somewhat misleading as each of the cones respond to a wide range of wavelengths. It also doesn't correspond to the red_, green_, and blue_ terms used for defining colors_ in Processing_. A better terminology is to use short, medium, and long, or S, M, and L, as I will do on this page.

LMS Color Space
---------------

To simulate color blindness, we need to think about colors in terms of stimulations to the L, M, and S cones in the human eye. To help us do that, we will convert our colors from the `sRGB <https://en.wikipedia.org/wiki/SRGB>`_ color space we use in Processing to a new color space called `LMS <https://en.wikipedia.org/wiki/LMS_color_space>`_.

The first step in this process is to remove the gamma correction applied to Processing_'s colors. The red, green, and blue values are represented internally as integers in the range :math:`[0, 255]`. In this color representation a value of 200 appears to humans as twice as intense as a value of 100, but this does not correspond to a doubling of the light's energy in the physical world. Gamma correction transforms color intensities in the physical world into an arrangement that appears more uniform to humans. Gamma correction is important but we need to remove it to do math on numerical color values.

For each of a Processing_ color's red_, green_ and blue_ values, we will transform the color into what is called Linear RGB space by removing the gamma correction with this formula:

.. math::

  v' = \left\{\begin{matrix}
  \left( \frac{\frac{v}{255}}{12.92} \right) & v <= 0.04045 \\
  & \\
  \left( \frac{\frac{v}{255} + 0.055}{1.055} \right)^{2.4} & v > 0.04045
  \end{matrix}\right.

Gamma correction can later be re-applied with the inverse formula:

.. math::

  v = \left\{\begin{matrix}
  255 \left( 12.92 v' \right) & v' <= 0.0031308 \\
   & \\
  255 \left( 1.055 v'^{0.41666} - 0.055 \right) & v > 0.0031308
  \end{matrix}\right.

After removing gamma correction, each of the resulting Linear RGB values are floats in the range :math:`[0, 1]`. We can apply this formula to the red_, green_, and blue_ values of an arbitrary Processing color_ :math:`c` and put the result in a vector, like so:

.. math::

  \begin{bmatrix}
  r_{c} \\
  g_{c} \\
  b_{c}
  \end{bmatrix}

This color in the Linear RGB color space can be converted to the XYZ color space using a transformation matrix :math:`M_{sRGB}` obtained from `www.brucelindbloom.com <http://www.brucelindbloom.com/index.html?WorkingSpaceInfo.html>`_. This sRGB matrix is calculated from the XYZ values of the `3 primaries <https://en.wikipedia.org/wiki/SRGB#The_sRGB_gamut>`_ used in this color space.

.. math::

  M_{sRGB}=
  \begin{bmatrix}
  0.4124564 & 0.3575761 & 0.1804375 \\
  0.2126729 & 0.7151522 & 0.0721750 \\
  0.0193339 & 0.1191920 & 0.9503041
  \end{bmatrix}

.. math::

  M_{sRGB}
  \begin{bmatrix}
  r_{c} \\
  g_{c} \\
  b_{c}
  \end{bmatrix}
  =
  \begin{bmatrix}
  x_{c} \\
  y_{c} \\
  z_{c}
  \end{bmatrix}

This can then be converted from the XYZ color space to the LMS color space using the `Hunt-Pointer-Estevez <https://en.wikipedia.org/wiki/LMS_color_space#Hunt.2C_RLAB>`_ transformation matrix :math:`M_{HPE}`:

.. math::

  M_{HPE}=
  \begin{bmatrix}
  0.4002 & 0.7076 & -0.0808 \\
  -0.2263 & 1.1653 & 0.0457 \\
  0 & 0 & 0.9182
  \end{bmatrix}

.. math::

  M_{HPE}
  \begin{bmatrix}
  x_{c} \\
  y_{c} \\
  z_{c}
  \end{bmatrix}
  =
  \begin{bmatrix}
  l_{c} \\
  m_{c} \\
  s_{c}
  \end{bmatrix}

For simplicity we can multiply :math:`M_{sRGB}` and :math:`M_{LMS}` to calculate one transformation matrix :math:`T` for converting colors from the Linear RGB color space to the LMS color space.

.. math::

  T = M_{HPE} M_{sRGB}=
  \begin{bmatrix}
  0.31399022 & 0.63951294 & 0.04649755 \\
  0.15537241 & 0.75789446 & 0.08670142 \\
  0.01775239 & 0.10944209 & 0.87256922
  \end{bmatrix}

.. math::

  T
  \begin{bmatrix}
  r_{c} \\
  g_{c} \\
  b_{c}
  \end{bmatrix}
  =
  \begin{bmatrix}
  l_{c} \\
  m_{c} \\
  s_{c}
  \end{bmatrix}

To convert colors from the LMS color space back to Linear RGB, we simply multiply by the inverse :math:`T^{-1}`.

.. math::

  T^{-1}=
  \begin{bmatrix}
  5.47221206 & -4.6419601 & 0.16963708 \\
  -1.1252419 & 2.29317094 & -0.1678952 \\
  0.02980165 & -0.19318073 & 1.16364789
  \end{bmatrix}

.. math::

  T^{-1}
  \begin{bmatrix}
  l_{c} \\
  m_{c} \\
  s_{c}
  \end{bmatrix}
  =
  \begin{bmatrix}
  r_{c} \\
  g_{c} \\
  b_{c}
  \end{bmatrix}

Color Blindness Simulation
--------------------------

Now that we can convert our Processing colors to the LMS color space, we can begin to think about color blindness simulation. Let's start by simulating Protanopia. Protanopes are missing L cones. We will attempt to simulate this by setting :math:`l_{c}=0`, like so:

.. math::

  \begin{bmatrix}
  0 \\
  m_{c} \\
  s_{c}
  \end{bmatrix}

This seems like a reasonable way to simulate missing L cones, right? This change can be represented mathematically with a (transformation) simulation matrix :math:`S` that we multiply our LMS color vector by:

.. math::

  \begin{bmatrix}
  0 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & 1
  \end{bmatrix}
  \begin{bmatrix}
  l_{c} \\
  m_{c} \\
  s_{c}
  \end{bmatrix}
  =
  \begin{bmatrix}
  0 \\
  m_{c} \\
  s_{c}
  \end{bmatrix}

This modified color in LMS color space can then be converted back to Linear RGB using :math:`T^{-1}` and gamma correction re-applied.

Therefore the color blindness simulation process is simply some matrix multiplications to transform a Processing color :math:`c` to the simulated color :math:`c'`, with gamma calculations at the beginning and end.

.. math::

  T^{-1} S T
  \begin{bmatrix}
  r_{c} \\
  g_{c} \\
  b_{c}
  \end{bmatrix}
  =
  \begin{bmatrix}
  r_{c'} \\
  g_{c'} \\
  b_{c'}
  \end{bmatrix}

We can do this for every pixel in the Processing sketch. After re-applying gamma correction, we should be simulating Protanopia.

Let's test this to see how it works:

.. image:: /images/colorblindness/grocery_store.jpg
   :width: 48%
   :align: left
.. image:: /images/colorblindness/grocery_store_bad_sim.jpg
   :width: 48%
   :align: right

The right picture seems darker and white and grays are now a greenish blue color. Since we know that Protanopes can correctly distinguish greens and blues from grays and white, it doesn't make sense that color blindness simulation would alter these colors like that. This simulation is flawed.

The problem is with the simulation matrix :math:`S`. Let's consider a different matrix :math:`S_{p}` with variables :math:`a` and :math:`b` for two of the matrix elements:

.. math::

  \begin{bmatrix}
  0 & a & b \\
  0 & 1 & 0 \\
  0 & 0 & 1
  \end{bmatrix}
  \begin{bmatrix}
  l_{c} \\
  m_{c} \\
  s_{c}
  \end{bmatrix}
  =
  \begin{bmatrix}
  am_{c}+bs_{c} \\
  m_{c} \\
  s_{c}
  \end{bmatrix}

Instead of setting :math:`l_{c}=0`, we will make it a function of :math:`m_{c}` and :math:`s_{c}`. We will solve for :math:`a` and :math:`b` under the constraint that the colors white and blue need to stay the same. Referring to the spectral sensitivity chart at the top of this page, it seems reasonable to make the assumption that a Protanope's missing L cones will not impact their ability to see the color blue.

The choice to use blue is not arbitrary. It makes sense that we need to pick a color that is far away from the peak of the L cone response curve on the spectral sensitivity chart, but why not purple, which is to the left of blue?

To answer this question, you must first understand what color is being represented at that end of the chart. Recall that purple is not a `spectral color <https://en.wikipedia.org/wiki/Rainbow#Number_of_colours_in_spectrum_or_rainbow>`_, but violet is. So the color being represented there is actually violet. But `violet <https://en.wikipedia.org/wiki/Shades_of_violet#Variations_of_spectral_violet>`_ is outside the color gamut of the `standard RGB color space <https://en.wikipedia.org/wiki/SRGB>`_, and therefore cannot be accurately portrayed by your computer screen or encoded into the image you see on this page. The best approximation for the color to put there is `purple <https://en.wikipedia.org/wiki/Shades_of_purple>`_, and if you analyze those pixels in your favorite image editor, you will see that those pixels are in fact purple. This might seem a bit confusing at first, but it will make more sense once you understand that no computer monitor or color printer can represent the full range of colors visible to humans. It also means that images like `this one <https://en.wikipedia.org/wiki/SRGB#/media/File:Cie_Chart_with_sRGB_gamut_by_spigget.png>`_ are a little bit hand-wavy in that none of the colors outside the sRGB triangle are actually represented correctly.

Purple is a combination of red and blue, and since it contains red, it can't be used here. Violet would be a good choice but we can't actually specify it in sRGB space, so it can't be used. Since we can only use colors that can be represented in the standard RGB color space, the blue primary color is the best choice.

The blue primary values in Linear RGB space are :math:`r_{b}=g_{b}=0` and :math:`b_{b}=1`. This must be converted to the LMS color space:

.. math::

  T
  \begin{bmatrix}
  0 \\
  0 \\
  1
  \end{bmatrix}
  =
  \begin{bmatrix}
  l_{b} \\
  m_{b} \\
  s_{b}
  \end{bmatrix}

The justification for the assumption about the color white is different because white covers the entire spectrum and in a trichromat that involves stimulation to the L cones. The color white provides maximum stimulation to the S, M, and L cones. One could argue that a Protanope might confuse it with another color that also provides maximum stimulation the S and M cones but less stimulation to the L cone.

This argument would be correct, *if such a color were to exist*. Have another look at the spectral sensitivity chart at the top of this page. Because of the overlap between the M and L response curves, it is not possible to stimulate the M cone without also providing stimulation to the L cone. Any color that provides maximum stimulation to the M cone must also provide close to the maximum stimulation to the L cone.

Of course one can imagine LMS color values where this is not the case, but when that hypothetical LMS color is converted back to Linear RGB space with the inverse transformation matrix :math:`T^{-1}`, the result will be a color with values outside the required range :math:`[0, 1]`. I would call this an infeasible color. That color may actually exist and be visible to humans but it will be outside the `standard RGB <https://en.wikipedia.org/wiki/SRGB>`_ color gamut. It may also be outside the color region that is visible to humans, in the scary world of `imaginary colors <https://en.wikipedia.org/wiki/Impossible_color#Imaginary_colors>`_. In any case, this isn't a color you will see on your computer screen.

You can experiment with this by doing the math yourself or by using the LMS Color Model example code provided with the ColorBlindness library.

Since maximum stimulation to the S and M cones is unique to the color white, the assumption must be valid.

In Linear RGB space, the color white is a vector of ones. This must also be converted to the LMS color space:

.. math::

  T
  \begin{bmatrix}
  1 \\
  1 \\
  1
  \end{bmatrix}
  =
  \begin{bmatrix}
  l_{w} \\
  m_{w} \\
  s_{w}
  \end{bmatrix}\\

Applying the simulation matrix :math:`S_{p}` yields:

.. math::

  \begin{bmatrix}
  0 & a & b \\
  0 & 1 & 0 \\
  0 & 0 & 1
  \end{bmatrix}
  \begin{bmatrix}
  l_{b} \\
  m_{b} \\
  s_{b}
  \end{bmatrix}
  =
  \begin{bmatrix}
  am_{b}+bs_{b} \\
  m_{b} \\
  s_{b}
  \end{bmatrix}

similarly, for white:

.. math::

  \begin{bmatrix}
  0 & a & b \\
  0 & 1 & 0 \\
  0 & 0 & 1
  \end{bmatrix}
  \begin{bmatrix}
  l_{w} \\
  m_{w} \\
  s_{w}
  \end{bmatrix}
  =
  \begin{bmatrix}
  am_{w}+bs_{w} \\
  m_{w} \\
  s_{w}
  \end{bmatrix}

We need to find the :math:`a` and :math:`b` values so that these equations hold true:

.. math::

  l_{b} = am_{b} + bs_{b} \\
  l_{w} = am_{w} + bs_{w}

If this is true, the simulation matrix won't change the :math:`l`, :math:`m`, or :math:`s` values for white or the blue primary color. When those LMS colors are converted back to Linear RGB space with :math:`T^{-1}`, they will be the same as when they started. We should get a better result in our simulation because the color blindness simulation won't alter white or blue.

We can do some math and solve for :math:`a` and :math:`b`:

.. math::

  a = \frac{l_{b}s_{w} - l_{w}s_{b}}{m_{b}s_{w} - m_{w}s_{b}} \\
  \\
  b = \frac{l_{b}m_{w} - l_{w}m_{b}}{s_{b}m_{w} - s_{w}m_{b}}

Using the matrix :math:`T` we can calculate the :math:`l`, :math:`m`, and :math:`s` values for white and blue and then calculate :math:`a` and :math:`b`.

For white, it's simply:

.. math::

  T
  \begin{bmatrix}
  1 \\
  1 \\
  1
  \end{bmatrix}
  =
  \begin{bmatrix}
  1 \\
  1 \\
  1
  \end{bmatrix}\\

And for the blue primary, it's:

.. math::

  T
  \begin{bmatrix}
  0 \\
  0 \\
  1
  \end{bmatrix}
  =
  \begin{bmatrix}
  0.04649755 \\
  0.08670142 \\
  0.87256922
  \end{bmatrix}

Now we can calculate :math:`a` and :math:`b` to complete our Protanopia simulation matrix:

.. math::

  S_{p}=
  \begin{bmatrix}
  0 & 1.05118294 & -0.05116099 \\
  0 & 1 & 0 \\
  0 & 0 & 1
  \end{bmatrix}

When we test this new matrix we get a much better result:

.. image:: /images/colorblindness/grocery_store.jpg
   :width: 48%
   :align: left

.. image:: /images/colorblindness/grocery_store_protanopia.jpg
   :width: 48%
   :align: right

Simulating Deuteranopia can be done using a similar approach. Deuteranopes are missing the M cones, so the simulation matrix has this form:

.. math::

  S_{d}=
  \begin{bmatrix}
  1 & 0 & 0 \\
  a & 0 & b \\
  0 & 0 & 1
  \end{bmatrix}

Repeating the above procedure with the same assumptions will result in this simulation matrix:

.. math::

  S_{d}=
  \begin{bmatrix}
  1 & 0 & 0 \\
  0.9513092 & 0 & 0.04866992 \\
  0 & 0 & 1
  \end{bmatrix}

Tritanopes are missing the S cones. We could again repeat the above procedure, but we would be making a mistake. Look at the spectral sensitivity chart at the top of this page and consider the assumption about the color blue. It is not correct to make the assumption that a Tritanope's missing S cones will not impact their ability to see the color blue. Instead, we will make a similar assumption about the color red. That assumption gives us this simulation matrix:

.. math::

  S_{t}=
  \begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  -0.86744736 & 1.86727089 & 0
  \end{bmatrix}

Errors in Open Source Software
------------------------------

Interestingly, I found many color blindness daltonization tools that incorrectly simulate Tritanopia because their calculations make the erroneous assumption about the color blue. `Here <https://github.com/joergdietrich/daltonize/blob/master/daltonize.py>`_ `are <https://galacticmilk.com/labs/Color-Vision/Chrome/Color.Vision.Daltonize.js>`_ `examples <http://www.daltonize.org/2010/05/color-vision-library-for-pixelbender.html>`_.  I can exactly duplicate the Tritanopia simulation matrix used in those code examples when I use the same RGB to LMS color space transformation matrix that they use and make the incorrect assumption about the color blue.

Since color blindness simulations are hard to understand or verify, I suspect that programmers are copying algorithms from elsewhere without understanding exactly how they work or where the numbers come from. I am writing this documentation here as an attempt to correct that.

A widely cited paper in this area is `Digital Video Colourmaps for Checking the Legibility of Displays by Dichromats <http://vision.psychol.cam.ac.uk/jdmollon/papers/colourmaps.pdf>`_ by Vienot, Brettel, and Mollon. I studied this paper closely to understand the math behind color blindness simulations. You will notice that the paper calculates the simulation matrices for Protanopia and Deuteranopia only. A reader might have used the results of step 4 to make a Tritanopia simulation matrix without fully understanding the assumptions that went into those calculations.

That paper solves the equations using a slightly different approach. They make the assumption that white, blue, and black are all unchanged by the simulation. These three colors define a single plane through the 3-dimensional LMS color space. They calculate the parameters for that plane by taking the cross product of 2 vectors pointing from black to both white and blue. They are doing the same thing that I am doing here, which is reducing a 3 dimensional space down to 2 dimensions under the constraint that the plane must pass through a few specific colors (points) in the LMS color space. It arrives at the same result but is maybe less intuitive. It should be clear that a colorblind person's color vision must be represented as a 2 dimensional surface because they only have 2 functioning cones. Our calculations above were essentially about finding the proper orientation of that plane in the 3 dimensional LMS color space. Color blindness simulation is then a process of mapping colors in the 3 dimensional space onto that plane.

The paper also uses a XYZ to LMS transformation matrix from a seminal paper by color scientists `Smith and Pokorny <http://vision.psychol.cam.ac.uk/jdmollon/papers/colourmaps.pdf>`_. These transformation matrices must be measured empirically. I used the more current `Hunt-Pointer-Estevez <https://en.wikipedia.org/wiki/LMS_color_space#Hunt.2C_RLAB>`_ transformation matrix :math:`M_{HPE}`.

Achromatopsia (Monochromatism)
------------------------------

We will complete our color blindness discussion by simulating the color deficiencies of Achromatopsia, or Monochromacy. There are two kinds of Monochromacy: Rod Monochromacy, and Cone Monochromacy.

Cone Monochromats are missing both the M and L cones and are often called Blue-Cone Monochromats. The form of their simulation matrix is:

.. math::

  S_{b}=
  \begin{bmatrix}
  0 & 0 & a \\
  0 & 0 & b \\
  0 & 0 & 1
  \end{bmatrix}

Following a similar approach as above using only an assumption about the color white, we get:

.. math::

  S_{b}=
  \begin{bmatrix}
  0 & 0 & 1 \\
  0 & 0 & 1 \\
  0 & 0 & 1
  \end{bmatrix}

If we multiply the simulation and transformation matrices together, we see we can simplify this process:

.. math::

  T^{-1} S_{b} T=
  \begin{bmatrix}
  0.01775 & 0.10945 & 0.87262 \\
  0.01775 & 0.10945 & 0.87262 \\
  0.01775 & 0.10945 & 0.87262
  \end{bmatrix}

Since the simulated colors are always grayscale values, we can simplify our process by creating a simulation vector and taking a dot product with the Linear RGB color:

.. math::

  s_{b}=
  \begin{bmatrix}
  0.01775 \\
  0.10945 \\
  0.87262
  \end{bmatrix}\\
  s_{b} \bullet \begin{bmatrix}
  r_{c} \\
  g_{c} \\
  b_{c}
  \end{bmatrix}=w\\

The blue-cone monochromat simulated color is then:

.. math::

  \begin{bmatrix}
  r_{c'} \\
  g_{c'} \\
  b_{c'}
  \end{bmatrix} = \begin{bmatrix}
  w \\
  w \\
  w
  \end{bmatrix}

The ColorBlindness library uses this simulation vector for achromatopsia or rod monochromats:

.. math::

  s_{a}=
  \begin{bmatrix}
  0.212656 \\
  0.715158 \\
  0.072186
  \end{bmatrix}\\

I can't independently verify this myself because the spectral sensitivity of the rod cells is different from any of the cone cells so the LMS color space can't help me calculate the simulation vector. Nevertheless, when I look at the below chart I can see that rod sensitivity is closest to that of M cones.

.. image:: /images/colorblindness/rod_cone_color_sensitivities.jpg
  :width: 50%
  :align: center

If I calculate the simulation vector for a hypothetical green-cone monochromat, I get

.. math::

  s_{g}=
  \begin{bmatrix}
  0.15537 \\
  0.75792 \\
  0.08670
  \end{bmatrix}\\

This is close enough to :math:`s_{a}` that I am not going to doubt the values. Also, consider that simulations for any kind of monochromatic color deficiency will always be inherently flawed because of the limited visual acuity and intolerance to light associated with these conditions. Therefore, any simulation shortcomings associated with the simulation vector :math:`s_{a}` are minor compared to the visual problems that cannot be simulated at all with this approach.

A Rod Monochromat essentially has only their night vision available to them to see. They will be most comfortable at nighttime or at dusk but their eyes will be overwhelmed in the daytime. They may wear dark glasses during the day to compensate. A Blue Cone Monochromat can function like a dichromat in low light conditions when their blue cones and rods are both active. I have seen blue cone monochromat color simulations on the web that simulate the color deficiency in this way but I think it is less helpful because that situation does not match a user looking at a brightly-lit computer monitor.

Experimentation in Processing
-----------------------------

In any case, this library is fully customizable and you are free to adjust the transformation matrices and simulation matrices and vectors as you see fit. Refer to the CustomParameters sketch in the ColorBlindness Tutorial example code. For convenience, there is also a built-in custom deficiency setting to facilitate experimentation. Below is an example of how to use it to simulate green-cone monochromacy. You can set it to whatever you want without altering the other matrices.

.. code-block:: java

  import colorblind.*;
  import colorblind.generators.util.*;

  ColorBlindness colorBlindness;

  void setup() {
    size(500, 500);

    // ...setup() code...

    colorBlindness = new ColorBlindness(this);
    colorBlindness.simulate(Deficiency.CUSTOM);

    ColorUtilities.customSim = new Matrix(0, 1, 0,
                                          0, 1, 0,
                                          0, 1, 0);
  }



.. _Processing: http://processing.org/
.. _red: https://www.processing.org/reference/red_.html
.. _green: https://www.processing.org/reference/green_.html
.. _blue: https://www.processing.org/reference/blue_.html
.. _colors: https://www.processing.org/reference/color_.html
.. _color: https://www.processing.org/reference/color_.html
