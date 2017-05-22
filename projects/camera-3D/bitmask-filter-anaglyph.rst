.. title: Bitmask Filter Anaglyph
.. slug: bitmask-filter-anaglyph
.. date: 2015-11-14 15:21:42 UTC-05:00
.. tags: processing, art
.. category: 
.. link: 
.. description: Processing - Camera3D library - Anaglyph generator
.. type: text

This Generator works the same as the old RedBlue library.

Consider this image:

.. image:: /images/camera3D/regular_renderer/fourcubes-composite.png
   :align: center

Render it twice with the camera shifted slightly to the right and left. The camera shift is not blatantly obvious in this case but you can see it if you look at the left side of the gray cube.

.. image:: /images/camera3D/bitmask_redcyan_anaglyph/fourcubes-left-component.png
   :width: 50%
.. image:: /images/camera3D/bitmask_redcyan_anaglyph/fourcubes-right-component.png
   :width: 50%

Filter each image. You will notice that the left red filtered image makes the green and blue cubes look black. The cyan filtered image makes the red cube look black.

.. image:: /images/camera3D/bitmask_redcyan_anaglyph/fourcubes-left-component-modified.png
   :width: 50%
.. image:: /images/camera3D/bitmask_redcyan_anaglyph/fourcubes-right-component-modified.png
   :width: 50%

Add the two images together. If you open both of those images in Photoshop as two layers and set the Layers Mode to Addition, you will get:

.. image:: /images/camera3D/bitmask_redcyan_anaglyph/fourcubes-composite.png
   :align: center

Add finishing touches to the result with the *postDraw* method:

.. image:: /images/camera3D/bitmask_redcyan_anaglyph/fourcubes-final.png
   :align: center

If you are wearing red-cyan :doc:`glasses` you will notice that only the gray cube looks 3D. The primary colored cubes look terrible because the filtering made them look black in one of the two images. This is one of the weaknesses of this Generator: all colors need to be shades of gray or somewhat close to gray.

This generator can also make anaglyphs suitable for magenta-green :doc:`glasses`. The left image is filtered red and blue (magenta) and the right image is filtered green.

.. image:: /images/camera3D/bitmask_magentagreen_anaglyph/fourcubes-left-component-modified.png
   :width: 50%
.. image:: /images/camera3D/bitmask_magentagreen_anaglyph/fourcubes-right-component-modified.png
   :width: 50%

Adding them together yields:

.. image:: /images/camera3D/bitmask_magentagreen_anaglyph/fourcubes-composite.png
   :align: center

I'm not really a fan of magenta-green anaglyphs, but if you happen to have a pair of that kind of filtered glasses, you can find a use for them here.
