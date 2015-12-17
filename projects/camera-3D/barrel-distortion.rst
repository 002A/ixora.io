.. title: Barrel Distortion
.. slug: barrel-distortion
.. date: 2015-12-10 14:41:01 UTC-04:00
.. tags: processing
.. category: 
.. link: 
.. description: 
.. type: text

This Generator implements the Barrel Distortion algorithm, situable for use with an Oculus Rift or Google Cardboard.

I do not have an Oculus Rift but I did test this Camera3D and Processing using Google Cardboard on my Samsung S6 phone. Unfortunately it is ridiculously slow. Camera3D works by copying images back forth between the GPU and the CPU, and for whatever reason that is very slow on my phone. Your experience might be different. If you want a better approach for using Processing with Google Cardboard, look at `Scott Little's blog <http://www.scottlittle.org/2015/02/28/google-cardboard-on-processing-for-android/>`_.

Here's a great `video <https://www.youtube.com/watch?v=B7qrgrrHry0>`_ on what barrel distortion is and why it is important.

Start with the same right and left images:

.. image:: /images/camera3D/barrel_distortion/fourcubes-left-component.png
   :width: 50%
.. image:: /images/camera3D/barrel_distortion/fourcubes-right-component.png
   :width: 50%

Distort each image. Here is the left component:

.. image:: /images/camera3D/barrel_distortion/fourcubes-left-component-modified.png
   :align: center

and the right component:
   
.. image:: /images/camera3D/barrel_distortion/fourcubes-right-component-modified.png
   :align: center

Notice that it does not squish each image to make all of it fit in the frame. Only the middle section is visible. Typically you would want to make the size of your sketch a wide rectangle, not a square as we are doing here. Keep the part you want people to look at in the center because the left and right 25% will be gone.
   
Add the two images together, yielding:

.. image:: /images/camera3D/barrel_distortion/fourcubes-composite.png
   :align: center

Adding a label to the result with the *postDraw* method doesn't make sense for this, so skip that part.

By default the Barrel Distortion Generator is configured to the distortion coefficients for an Oculus Rift. You can easily change this to something else if you like using the *setBarrelDistortionCoefficients* method, as demonstrated in the example code.
