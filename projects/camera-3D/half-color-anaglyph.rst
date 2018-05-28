.. title: Half Color Anaglyph
.. slug: half-color-anaglyph
.. date: 2015-11-14 15:57:11 UTC-05:00
.. tags: processing, art
.. category: 
.. link: 
.. description: Processing - Camera3D library - Anaglyph generator
.. type: text

This Generator preserves blue and green colors. It works better than the gray anaglyph generator if your sketch doesn't have strong reds. Nature photography looks great rendered as half color anaglyphs.

Start with the same right and left images:

.. image:: /images/camera3D/halfcolor_anaglyph/fourcubes-left-component.png
    :width: 47%
    :align: left
.. image:: /images/camera3D/halfcolor_anaglyph/fourcubes-right-component.png
    :width: 47%
    :align: right

Filter each image. For this Generator, the left image maps all colors to a shade of red. In the right image, red is removed.

.. image:: /images/camera3D/halfcolor_anaglyph/fourcubes-left-component-modified.png
    :width: 47%
    :align: left
.. image:: /images/camera3D/halfcolor_anaglyph/fourcubes-right-component-modified.png
    :width: 47%
    :align: right

Add the two images together, yielding:

.. image:: /images/camera3D/halfcolor_anaglyph/fourcubes-composite.png
   :align: center

Add finishing touches to the result with the *postDraw* method:

.. image:: /images/camera3D/halfcolor_anaglyph/fourcubes-final.png
   :align: center

With red-cyan :doc:`glasses` the green clue looks yellow and the blue cube looks blue. The red cube looks bad because it is all black in the cyan filtered image.
