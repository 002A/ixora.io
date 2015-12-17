.. title: True Anaglyph
.. slug: true-anaglyph
.. date: 2015-11-14 15:39:08 UTC-05:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text

I don't know why this kind of Anaglyph is called a "True Anaglyph," but that's what I found in my research, and that's what I am calling it here. It isn't my favorite but it solves some of the problems with the :doc:`bitmask-filter-anaglyph`.

Start with these right and left images:

.. image:: /images/camera3D/true_anaglyph/fourcubes-left-component.png
   :width: 50%
.. image:: /images/camera3D/true_anaglyph/fourcubes-right-component.png
   :width: 50%

Filter each image. For this Generator, all colors are mapped to a shade of red or a shade of blue.

.. image:: /images/camera3D/true_anaglyph/fourcubes-left-component-modified.png
   :width: 50%
.. image:: /images/camera3D/true_anaglyph/fourcubes-right-component-modified.png
   :width: 50%

Add the two images together, yielding:

.. image:: /images/camera3D/true_anaglyph/fourcubes-composite.png
   :align: center

Add finishing touches to the result with the *postDraw* method:

.. image:: /images/camera3D/true_anaglyph/fourcubes-final.png
   :align: center

With red-cyan :doc:`glasses` this looks better than the bitmask generator but still isn't all that great. It does do a better job with primary colors, and for grayish images, it looks reasonable.
