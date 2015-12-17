.. title: Gray Anaglyph
.. slug: gray-anaglyph
.. date: 2015-11-14 15:48:04 UTC-05:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text

This Generator maps all colors into some shade of gray. It works well if you are fine with the lack of color in the result.

Start with the same right and left images:

.. image:: /images/camera3D/gray_anaglyph/fourcubes-left-component.png
   :width: 50%
.. image:: /images/camera3D/gray_anaglyph/fourcubes-right-component.png
   :width: 50%

Filter each image. For this Generator, all colors are mapped to a shade of red or a shade of cyan.

.. image:: /images/camera3D/gray_anaglyph/fourcubes-left-component-modified.png
   :width: 50%
.. image:: /images/camera3D/gray_anaglyph/fourcubes-right-component-modified.png
   :width: 50%

Add the two images together, yielding:

.. image:: /images/camera3D/gray_anaglyph/fourcubes-composite.png
   :align: center

Add finishing touches to the result with the *postDraw* method:

.. image:: /images/camera3D/gray_anaglyph/fourcubes-final.png
   :align: center

With red-cyan :doc:`glasses` all of the cubes look gray. Generally the results will look reasonable regardless of what colors are in the sketch.
