.. title: Modeling a Tesseract
.. slug: modeling-a-tesseract
.. date: 2017-10-22 16:55:22 UTC-04:00
.. tags: itp, 3d printing, tesseract
.. category:
.. link:
.. description: Modeling a Tesseract
.. type: text

Consider a 3D printed cube. This cube will cast a different shadow onto a piece of paper when the light source moves around.

.. slides::

  /images/itp/3d_printing/week5/1.jpg
  /images/itp/3d_printing/week5/2.jpg
  /images/itp/3d_printing/week5/3.jpg
  /images/itp/3d_printing/week5/4.jpg

Beings living in a 2D world will experience the cube differently depending on how the shadow is cast onto their world.

Similarly, a 4D cube, or Tesseract, can also cast a shadow onto our 3D world. It is challenging to think about this because we do not directly experience the world in 4 dimensions. Nevertheless, I was able to model a tesseract using Python and Rhino. Specifically, I modeled a 4D tesseract and its perspective projection onto 3D space. This model will change as the tesseract rotates in 4D space. The projections were modeled in Rhino using the RhinoCommon SDK.

.. TEASER_END

I can build the tesseract and rotate it around any plane in 4D space. The whole process is automated so I can bulk generate Rhino models using Python. Here is an animation the tesseract rotating around the X-Z plane:

.. youtube:: 146yOu6gzpM
   :align: center

3D Printing
-----------

Next I need to 3D print several versions of the tesseract as it rotates around the X-Z plane. I need to think carefully about the sizing of the print. There is a minimum edge width that I can reliably print with a 3D printer, but I also don't want the widest edges to inordinately increase the time it takes to print. I need to adjust the scaling and the perspective projection to give me a reasonable set of prints. After that, I will need some patience and a little bit of luck that the 3D printers will behave as I need them to.
