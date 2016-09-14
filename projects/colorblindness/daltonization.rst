.. title: Daltonization
.. slug: daltonization
.. date: 2016-09-13 23:43:04 UTC-04:00
.. tags:
.. category:
.. link:
.. description:
.. type: text

Daltonization is a color correction technique that attempts to adjust colors in such a way that there are less color combinations that would be confusing to a color blind person. In some cases it can improve an image to make it more accessible to someone with a color deficiency.

Like :doc:`color-blindness-simulation`, this feature is designed to quickly transform each frame of your sketch so that the overhead from the library does not impact your `frame rate <https://www.processing.org/reference/frameRate.html>`_.

Consider this image of fall trees.

.. image:: /images/colorblindness/fall_trees.jpg
  :width: 50%
  :align: center


To a Protanope the trees would look like this:

.. image:: /images/colorblindness/fall_trees_protanopia.jpg
  :width: 50%
  :align: center


The green and red leaves look the same. Daltonization modifies the colors so it looks like this:

.. image:: /images/colorblindness/fall_trees_protanopia_daltonize.jpg
  :width: 50%
  :align: center


If we do a simulation on top of the daltonization, it will look like this:

.. image:: /images/colorblindness/fall_trees_protanopia_daltonize_simulate.jpg
  :width: 50%
  :align: center


Now a Protanope can see that the leaves in the foreground are different from the leaves in the background.

How well does Daltonization work? It isn't perfect but it can help. Consider this plate from the Ishihara color vision test.


.. raw:: html

  <table align="center"><tr><td>

.. image:: /images/colorblindness/ishihara_plate_45.jpg
  :align: center

.. raw:: html

  <p align="center">Original</p>

  </td><td>

.. image:: /images/colorblindness/ishihara_plate_45_protanopia.jpg
  :align: center

.. raw:: html

  <p align="center">Simulate Protanopia</p>

  </td></tr><tr><td>

.. image:: /images/colorblindness/ishihara_plate_45_protanopia_daltonize.jpg
  :align: center

.. raw:: html

  <p align="center">Daltonize</p>

  </td><td>

.. image:: /images/colorblindness/ishihara_plate_45_protanopia_daltonize_simulate.jpg
  :align: center

.. raw:: html

  <p align="center">Daltonize and then Simulate Protanopia</p>

  </td></tr></table>

The images suggest that a color blind person would be able to make out the number from the daltonized plate, but barely.

While building this library I found that many popular open source daltonization tools contain a math error for Tritanopia daltonization. Refer to the :doc:`color-blindness-simulation-research` page for more information.
