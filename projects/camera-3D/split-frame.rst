.. title: Split Frame Generators
.. slug: split-frame
.. date: 2015-11-14 17:37:50 UTC-05:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text

These Generators try to make content suitable for a 3D TV or monitor, using split frames. Look in the example code to learn how to use them.

Note that Processing and Camera3D does not yet make your sketch look "3D" in a NVidia 3D monitor. Go to :doc:`nvidia-3d` to learn how to proceed here. 

Interlaced (left row first):

.. image:: /images/camera3D/interlaced/fourcubes-composite.png
   :align: center

Adding the same label to the result with the *postDraw* method doesn't make sense for any of these, so skip that part.

Over-Under:

.. image:: /images/camera3D/splitframe_overunder/fourcubes-composite.png
   :align: center

This generator takes the middle 50% of the left and right components and arranges them left over right.
   
Over-Under half height:
   
.. image:: /images/camera3D/splitframe_overunder_half_height/fourcubes-composite.png
   :align: center

This does the same thing but squishes 100% of the left and right components into the same space.
   
Side-by-Side:
   
.. image:: /images/camera3D/splitframe_sidebyside/fourcubes-composite.png
   :align: center

Middle 50%. The left component is on the left.
   
Side-by-Side half width:

.. image:: /images/camera3D/splitframe_sidebyside_half_width/fourcubes-composite.png
   :align: center

This is the same but squished horizontally.

There is a loss of resolution with these algorithms, but only one direction. The result can be a bit odd for small details in your sketch. Consider that Processing uses anti-aliasing. Leaving out every other row or column of pixels after anti-aliasing takes place results in a deconstructed image that looks a bit pixelated, but only horizontally or vertically. A better Generator might be able to correct for these issues however.

For all of these you can swap left and right with the *swapLeftRight* method.

