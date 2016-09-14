.. title: Color Blindness Simulation
.. slug: color-blindness-simulation
.. date: 2016-09-13 23:42:46 UTC-04:00
.. tags:
.. category:
.. link:
.. description:
.. type: text

`Color blind <https://en.wikipedia.org/wiki/Color_blindness>`_ people have partial or no ability to perceive colors. This library can do a color transformation on your sketch to reduce the color palette in a way that mimics color deficiencies.

To learn about the science behind color blindness simulation, refer to the :doc:`color-blindness-simulation-research` page.

The library is designed to quickly transform each frame of your sketch so that the overhead from the library does not impact your `frame rate <https://www.processing.org/reference/frameRate.html>`_. Using this library, users can check that their work is accessible to color blind people and adjust their use of color as necessary.

Consider this image of fall trees.

.. image:: /images/colorblindness/fall_trees.jpg
  :width: 50%
  :align: center


A Protanope has what is commonly referred to as `red-green color blindness <https://en.wikipedia.org/wiki/Color_blindness#Red.E2.80.93green_color_blindness>`_. The same scene would look like this:

.. image:: /images/colorblindness/fall_trees_protanopia.jpg
  :width: 50%
  :align: center


This image is simulating the complete loss of the ability to distinguish red from green.

A few years ago there was `speculation <http://www.smithsonianmag.com/smart-news/was-vincent-van-gogh-color-blind-it-sure-looks-like-it-27576085/?no-ist>`_ that Vincent van Gogh was color blind. The argument was that his color choices seemed to make more sense when simulating color blindness, as shown in the right image below. I believe that this has been `disproven <https://www.vangoghmuseum.nl/en/125-questions/questions-and-answers/question-52-of-125>`_, but I am bringing it up for discussion.

.. raw:: html

  <table align="center"><tr><td>

.. image:: /images/colorblindness/van_gogh_starry_night.jpg
  :width: 48%
  :align: left

.. image:: /images/colorblindness/van_gogh_starry_night_protanopia.jpg
  :width: 48%
  :align: right

.. raw:: html

  </td></tr></table>


It is more common for people to have partial color blindness. This means a person has a reduced ability to distinguish some colors. It is called Anomalous Trichromacy. The color cones are present in their eyes but they are malfunctioning.

Below is the image as seen by someone with protanomaly, or partial protanopia:

.. image:: /images/colorblindness/fall_trees_protanopia_50.jpg
  :width: 50%
  :align: center


Deuteranopia is also referred to as `red-green color blindness <https://en.wikipedia.org/wiki/Color_blindness#Red.E2.80.93green_color_blindness>`_. The resulting color deficiency is similar to Protanopia:

.. image:: /images/colorblindness/fall_trees_deuteranopia.jpg
  :width: 50%
  :align: center


Tritanopia is commonly referred to as `blue-yellow colorblindness <https://en.wikipedia.org/wiki/Color_blindness#Blue.E2.80.93yellow_color_blindness>`_. It is very rare.

.. image:: /images/colorblindness/fall_trees_tritanopia.jpg
  :width: 50%
  :align: center


Even rarer still is a `total loss of color perception <https://en.wikipedia.org/wiki/Color_blindness#Total_color_blindness>`_, or monochromacy. This is what the scene looks like to someone with Rod Monochromacy, or Achromatopsia:

.. image:: /images/colorblindness/fall_trees_achromatopsia.jpg
  :width: 50%
  :align: center


There is also something called blue-cone monochromacy. That would look like this:

.. image:: /images/colorblindness/fall_trees_blue_cone_monochromacy.jpg
  :width: 50%
  :align: center


You can explore this further with the Color Blindness Exploration tool, found in the example code that comes with the ColorBlindness library.
