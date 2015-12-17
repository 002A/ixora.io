.. title: Dubois Anaglyphs
.. slug: dubois-anaglyphs
.. date: 2015-06-17 14:41:01 UTC-04:00
.. tags: processing
.. category: 
.. link: 
.. description: 
.. type: text

This is the most advanced Generator, based on a research paper written by `Erik Dubois <http://www.site.uottawa.ca/~edubois/anaglyph/>`_. The algorithm is explained in detail `here <http://www.site.uottawa.ca/~edubois/icassp01/anaglyphdubois.pdf>`_. Camera3D implements the algorithm in a `highly optimized <link://slug/dubois-optimization>`_ way so it can be used in a real-time animation.

Start with the same right and left images:

.. image:: /images/camera3D/dubois_redcyan_anaglyph/fourcubes-left-component.png
   :width: 50%
.. image:: /images/camera3D/dubois_redcyan_anaglyph/fourcubes-right-component.png
   :width: 50%

Filter each image. For this Generator, all colors are mapped to a shade of red or a shade of cyan.

.. image:: /images/camera3D/dubois_redcyan_anaglyph/fourcubes-left-component-modified.png
   :width: 50%
.. image:: /images/camera3D/dubois_redcyan_anaglyph/fourcubes-right-component-modified.png
   :width: 50%

Add the two images together, yielding:

.. image:: /images/camera3D/dubois_redcyan_anaglyph/fourcubes-composite.png
   :align: center

Add finishing touches to the result with the *postDraw* method:

.. image:: /images/camera3D/dubois_redcyan_anaglyph/fourcubes-final.png
   :align: center

With red-cyan :doc:`glasses` the red and green cubes look yellow. The blue one doesn't look that great but it would look better with a less intense blue.

This Generator can make amber-blue anaglyphs. This is how the images are filtered:

.. image:: /images/camera3D/dubois_amberblue_anaglyph/fourcubes-left-component-modified.png
   :width: 50%
.. image:: /images/camera3D/dubois_amberblue_anaglyph/fourcubes-right-component-modified.png
   :width: 50%

Add them together to make the anaglyph.
   
.. image:: /images/camera3D/dubois_amberblue_anaglyph/fourcubes-composite.png
   :align: center


With amber-blue :doc:`glasses` the red cube looks redish-pink, the green cube looks green and the blue cube looks like a brownish-purple. Everything has a color of some kind that is close to the original. This is the genius of Dubois anaglyphs and amber-blue filtering.

Also notice that without glasses the end result looks more reasonable than the others do without glasses.

If you are a Dubois Anaglyph aficionado, you may want to enter your own transformation matrices instead of using the default values provided for you by Camera3D. Look at the Javadocs or source code to learn how to do this.
