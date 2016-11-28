.. title: Processing: ColorBlindess
.. slug: processing-colorblindess
.. date: 2016-11-24 12:03:24 UTC-05:00
.. tags:
.. category:
.. link:
.. description:
.. type: text

I built a Processing_ library that can simulate color blindness on any Processing sketch, approximating what a color blind person would see.

I created this with three goals in mind:

1. Easy to use tools for simulating color blindness. This will allow artists and creative coders to consider the needs of color blind individuals in their designs. The implementation is FAST and will not significantly slow down the frame rate of a sketch.

2. Interactive and educational visualizations for understanding color blindness.

3. Pseudoisochromatic art. Normally the expression of visual art is made with trichromats in mind, with color blind people partially or completely missing out on the visual experience being expressed. Pseudoisochromatic art turns that around by creating visual art that only a color blind person can properly see and understand.

The library is easy to use. After importing the library, the user only needs to add two extra lines of code to their ``setup`` methods to simulate color blindness on their sketch.

.. code-block:: java

  import colorblind.ColorBlindness;

  void setup() {
    size(500, 500);
    background(255);

    ColorBlindness colorBlindness = new ColorBlindness(this);
    colorBlindness.simulateProtanopia();
  }

The library is fully customizable, supporting users who want to adjust the parameters or explore alternative color blindness simulation methodologies.

The interactive and educational visualizations are in the example code that is provided to you when you install the ColorBlindness library through the Processing_ IDE. Please have a look at the example code to learn more about what this library can do.

The library also has facilities for intentionally picking colors that would be confusing to a color blind person. Normally this would be something one would want to avoid, but I realized that by understanding which colors are confusing to a color blind person, I could create visual imagery that provides a different visual experience for a color blind person. I believe it is possible to create something I call Pseudoisochromatic art, which inverts the typical color blind experience by creating visual art that only a color blind person can properly see and understand.

A first example of Pseudoisochromatic art appears below. Most people see semi-random colored squares.

.. vimeo:: 182646002

A Protanope (red-green color blind person) would see something similar to below, recognizing the pattern as Conway's Game of Life:

.. vimeo:: 182646027

The ColorBlindness documentation is available `online <link://section_index/projects/colorblindness>`_ along with the `github repo <https://github.com/subject117/ColorBlindness>`_. I documented the library's features and the color science behind how this works. While doing the research behind this library, I discovered a math error in commonly used open source color blindness tools; read about the `math and calculations <link://slug/color-blindness-simulation-research>`_ to learn more.

Note that the ColorBlindness library is closely related to my `Camera3D library <link://slug/processing-camera-3D>`_. This library is actually a stripped down fork of the Camera3D code.

In the future I would like to port this library to p5. Below is a working proof of concept, demonstrating that it is possible to simulate colorblindness in a real-time animation with p5. The upper half of the sketch is simulating color blindness with a frame rate (on my machine) of 60 frames per second. Web tools made in p5 could reach a wider audience and educate more people about the realities of color blindness. The p5 library will be just as easy to use as the Processing library with all the same features.

.. raw:: html

  <script src="/creative_portfolio/p5.js" type="text/javascript"></script>
  <script src="/creative_portfolio/colorblindness_prototype.js" type="text/javascript"></script>
  <div id="sketch-holder" align="center"></div>

.. _Processing: http://processing.org/
