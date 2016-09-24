.. title: ColorBlindness Tutorial
.. slug: colorblindness-tutorial
.. date: 2016-08-28 23:48:03 UTC-04:00
.. tags:
.. category:
.. link:
.. description:
.. type: text

This is a simple tutorial to show you how to use the ColorBlindness library.

First, import the library:

.. code-block:: java

  import colorblind.ColorBlindness;


Next, the ``setup`` method. I am using the default renderer here, but know that this library works with all of them.

In the ``setup`` method, create an instance of the ColorBlindness library. The ``this`` parameter links the library to the sketch.

.. code-block:: java

  void setup() {
    size(500, 500);
    background(255);

    ColorBlindness colorBlindness = new ColorBlindness(this);
    colorBlindness.simulateProtanopia();
  }


The above two lines of code are all that is necessary to simulate color blindness. Add those two lines to any sketch and you will simulate Protanopia. The only hard part is remembering how to correctly spell `Protanopia`.

To complete the tutorial, add any draw method. Here's a simple ``draw`` method that draws random colored squares.

.. code-block:: java

  void draw() {
    fill(color(random(255), random(255), random(255), 128));
    stroke(0);
    rect(random(width), random(height), 20, 20);
  }


Finally, an optional ``postDraw`` method. This is useful if you want to draw something to the sketch `after` the ColorBlindness library modifies your sketch. If you don't need this feature, don't use it.

In this example I am drawing a red border around the edge of the frame so you can see the ``postDraw`` method do something. The Protanopia simulation would change this color to something else if this code was moved to the draw method.

.. code-block:: java

  void postDraw() {
    fill(255, 0, 0, 255);
    noStroke();
    rect(0, 0, width, 10);
    rect(0, 0, 10, height);
    rect(0, height - 10, width, height);
    rect(width - 10, 0, width, height);
  }


That's really all there is to it. Import the library, add two extra lines of code to your setup method to tell it what kind of color blindness you want to simulate, and an optional ``postDraw`` method.

Here's the result. Notice the squares are not representing some of the possible random colors.

.. vimeo:: 182641767
  :height: 500
  :width: 500


You can also do complex customizations if you want, including implementing your own ideas about how color blindness simulation should be done. Look at the example code for more information.
