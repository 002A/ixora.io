.. title: Tesseracts
.. slug: tesseracts
.. date: 2017-10-29 23:32:54 UTC-04:00
.. tags: itp, 3d printing, mathjax
.. category:
.. link:
.. description: Tesseracts
.. type: text

I am interested in using 3D printing to model and visualize mathematics. To explore this, I will analyze and study a tesseract. A tesseract, or hypercube, is a 4 dimensional cube. It is analogous to a cube in our 3D world. Tesseracts are challenging for 3D beings to `visualize and understand <https://en.wikipedia.org/wiki/Four-dimensional_space#Cognition>`_. They are theoretical structures that can be understood mathematically. Tesseracts can interact with a 3D world in a way that is similar to a cube interacting with a 2D world. A 2D being cannot understand, visualize, or fully experience a cube, but as a cube rotates around, they can gain a better understanding of what the structure is like. Similarly, a rotating tesseract can help us understand what they are like.

Using math and 3D printing, I can create multiple versions of a rotating tesseract. These 3D printed tesseracts can be assembled in a stop motion animation to show what the tesseract looks like as it rotates around 4D space.

.. image:: /images/itp/3d_printing/final/3d_printed_hypercube.gif
  :width: 100%
  :align: center

This project was inspired in part by the book `Visualizing Mathematics with 3D Printing <https://www.amazon.com/dp/142142035X/>`_.

.. TEASER_END

Designing a Tesseract
---------------------

First, I started with some sketches. My drawings of a tesseract are terrible because they are almost impossible to visualize. It is easier to think about them after doing the math, but even then, it is not easy drawing a 4D object on a 2D piece of paper.

.. image:: /images/itp/3d_printing/final/sketches.jpg
  :width: 100%
  :align: center

A rotating tesseract will repeat itself after a 90 degree rotation. Also, there is symmetry in that rotations between 45 and 90 degrees are mirror images of rotations between 0 and 45 degrees. I can simplify my workload by considering this in my design.

.. image:: /images/itp/3d_printing/final/rotating_tesseract.jpg
  :width: 100%
  :align: center

Equally important are the sketches of the equations behind this project. These are fundamental to my thinking this through and understanding what I am building.

.. slides::
  /images/itp/3d_printing/final/rotation_matrices.jpg
  /images/itp/3d_printing/final/sphere_cone.jpg

Understanding the Math
----------------------

The math behind a tesseract's design and fabrication seems complex at first but it's actually a fairly straightforward application of the math and concepts behind 3D computer graphics.

3D Geometry
+++++++++++

In a 3D world, objects have 3D coordinates that will be represented as a vector. The vector stores the object's position in the coordinate space relative to the :math:`x`, :math:`y`, and :math:`z` axes:

.. math::

  \begin{bmatrix}
  x \\
  y \\
  z
  \end{bmatrix}

For people who are familiar with the math behind 3D computer graphics: I am leaving out the homogeneous coordinate because it is unnecessary for what is being done here. For everyone else, be aware that the reality of how these are implemented for a more comprehensive application of 3D geometry will be a bit different from what is being discussed here.

This vector can be transformed by multiplying it by a rotation matrix. For example, to rotate :math:`\theta` degrees around the :math:`x` axis, multiply the vector by the appropriate rotation matrix:

.. math::

  \begin{bmatrix}
  x \\
  y \\
  z
  \end{bmatrix}
  \begin{bmatrix}
  1 & 0 & 0 \\
  0 & \cos \theta  & -\sin \theta \\
  0 & \sin \theta & \cos \theta
  \end{bmatrix}

Translations can be done by adding two vectors together:

.. math::

  \begin{bmatrix}
  x \\
  y \\
  z
  \end{bmatrix}
  +
  \begin{bmatrix}
  m_{1} \\
  m_{2} \\
  m_{3}
  \end{bmatrix}

Interestingly, in a more comprehensive application of computer graphics, translations are done with matrix multiplication and the homogeneous coordinate. That approach is important for more complex mathematical operations but is unnecessary here.

To do a perspective projection of a 3D object down to a 2D space (such as your computer screen), we need to map our 3D vector to 2D by dividing by the :math:`z` coordinate, like so:

.. math::

  \begin{bmatrix}
  x / z \\
  y / z \\
  1
  \end{bmatrix}

The last coordinate will always be 1 and can therefore be dropped. For an orthogonal projection, the last coordinate can be dropped without any division.

Think about what is happening here: objects with larger :math:`z` coordinates are farther away from the origin and will shrink by a larger amount than objects that are closer to the origin. This is the perspective projection at work.

Again, for a more complex application this is handled differently but will not be discussed here.

4D Geometry
+++++++++++

4D geometry parallels (!) 3D geometry by using vectors to represent points. The 4th dimension is often referred to with the letter :math:`w` but I will use the letter :math:`v`.

.. math::

  \begin{bmatrix}
  x \\
  y \\
  z \\
  v
  \end{bmatrix}

A rotation matrix can be used to rotate this around a plane. Note that in a 4D world, objects can rotate around a plane instead of an axis. Below I show the matrix to rotate a point around the X-Z plane.

.. math::

  \begin{bmatrix}
  x \\
  y \\
  z \\
  v
  \end{bmatrix}
  \begin{bmatrix}
  1 & 0 & 0 & 0 \\
  0 & \cos \theta & 0 & \sin \theta \\
  0 & 0 & 1 & 0 \\
  0 & -\sin \theta & 0 & \cos \theta
  \end{bmatrix}

Translations are straightforward:

.. math::

  \begin{bmatrix}
  x \\
  y \\
  z \\
  v
  \end{bmatrix}
  +
  \begin{bmatrix}
  m_{1} \\
  m_{2} \\
  m_{3} \\
  m_{4}
  \end{bmatrix}

As are perspective projections:

.. math::

  \begin{bmatrix}
  x / v \\
  y / v \\
  z / v \\
  1
  \end{bmatrix}

It is important to understand what this perspective projection is doing. It is taking a 4D object and projecting it down to 3 dimensions in the same way that a 3D object is projected down to 2 dimensions for our computer screens. Objects that are farther away in the :math:`v` dimension will shrink by a larger amount. This is precisely what I am going to do to model a 4D tesseract in 3D space.

I highly recommend the book `3D Math Primer for Graphics and Game Development <https://www.amazon.com/Math-Primer-Graphics-Game-Development/dp/1568817231/>`_ for a deeper intuition about the above math and the math behind more complex applications. This book was an excellent reference for this project.

Modeling a Tesseract
++++++++++++++++++++

To apply this math to a tesseract, start with vectors representing each corner of the tesseract:

.. math::

  \begin{bmatrix}
  1 \\
  1 \\
  1 \\
  1
  \end{bmatrix},
  \begin{bmatrix}
  1 \\
  1 \\
  1 \\
  -1
  \end{bmatrix},
  \begin{bmatrix}
  1 \\
  1 \\
  -1 \\
  1
  \end{bmatrix},
  ...
  \begin{bmatrix}
  -1 \\
  -1 \\
  -1 \\
  -1
  \end{bmatrix}


Then multiply each by the appropriate 4D rotation matrix and translate in the positive :math:`v` direction away from the origin. Each result can then be projected down to 3 dimensions. Those are the 3D dimensions of the tesseract that will be modeled in Rhino and eventually 3D printed.

I can do this repeatedly for many values of :math:`\theta` and model all of them to visualize the tesseract as it rotates in 4D space.

That's all there is to it. If you understand these concepts as they are applied to 3D geometry, making the analogy to 4D space is straightforward.

Spheres and Truncated Cones
+++++++++++++++++++++++++++

After finding the coordinates for the corners of the tesseract for any :math:`\theta` value, I can construct the object with spheres and cylinders for the vertices and edges.

To emphasize the perspective projection in the model, I want the vertices that are farther away in the :math:`v` dimension to be smaller than the vertices that are closer. To model this, I scaled the size of the spheres appropriately. This means the edges must be modeled with truncated cones instead of cylinders.

This leads to an interesting and subtle math problem. To correctly model two spheres with different radii connected by a truncated cone, the top and bottom of the cone cannot be located at the centers of the two spheres, and the radii of the circles on the top and bottom of the cone cannot be equal to the radii of the two spheres. This is best understood by looking at the below illustration of two circles and a trapezoid:

.. image:: /images/itp/3d_printing/final/sphere_cone.svg
  :align: center

As the illustration shows, the object can have noticeable edges and artifacts where the two spheres meet the truncated cone. It would be better if the objects were joined seamlessly.

The correct way to do this is to adjust the truncated cone so that its surface will be tangent (or bitangent) to the two spheres. This can be done with more `math <https://en.wikipedia.org/wiki/Tangent_lines_to_circles#Outer_tangent>`_. If the two spheres are centered at :math:`p_{1}` and :math:`p_{2}` with radii :math:`r_{1}` and :math:`r_{2}`, the adjusted parameters :math:`p_{1}', p_{2}', r_{1}'` and :math:`r_{2}'` are:

.. math::

  v &= p_{1} - p_{2} \\
  \beta &= \sin \left(  \frac{r_{2} - r_{1}}{\left \| v \right \|} \right) \\
  r_{1}' &= r_{1} \cos \beta \\
  p_{1}' &= p_{1} - \frac{v}{\left \| v \right \|} r_{1} \sin \beta \\
  r_{2}' &= r_{2} \cos \beta \\
  p_{2}' &= p_{2} - \frac{v}{\left \| v \right \|} r_{2} \sin \beta

This give a better result, but not without consequence. The tangent surfaces will cause `boolean unions to fail <https://wiki.mcneel.com/rhino/booleanfaq>`_.

Rhino Python Code
-----------------

Rhino provides a Python API for automating the construction of models and for creating custom commands. This is implemented with IronPython, the C# version of Python 2.7.

I modeled the rotating tesseract in Python code separate from Rhino. I did this because I wanted the code to be portable for later use with other modeling applications like Blender. The code produces data files that contain specifications for the vertices and edges of object to be built. The below datafile contains data for a simple cube.

.. code:: json

  {"vertices": {
      "V1": [1, [-10, -10, -10]],
      "V2": [1, [-10, -10, 10]],
      "V3": [1, [-10, 10, -10]],
      "V4": [1, [-10, 10, 10]],
      "V5": [1, [10, -10, -10]],
      "V6": [1, [10, -10, 10]],
      "V7": [1, [10, 10, -10]],
      "V8": [1, [10, 10, 10]]
  },
   "edges": [
       ["V1", "V2"],
       ["V1", "V3"],
       ["V1", "V5"],
       ["V4", "V2"],
       ["V4", "V3"],
       ["V4", "V8"],
       ["V6", "V2"],
       ["V6", "V5"],
       ["V6", "V8"],
       ["V7", "V3"],
       ["V7", "V5"],
       ["V7", "V8"]
   ]}

I created a custom Rhino command called *ConstructFromJSON* that will read one of these files and build the object.

Tesseract Design Drawing
------------------------

After completing the math and code I can finally create a proper drawing of the tesseract model.

.. image:: /images/itp/3d_printing/final/final_drawing.png
  :width: 100%
  :align: center

An Adobe Illustrator file is also available for `download </downloads/itp/3d_printing/final/final_drawing.ai>`_.

Rhino Animation
---------------

Using more Python code I can generate data files for many values of :math:`\theta` and make a smooth animation. Rhino comes with rendering capabilities for generating the images for each frame of the animation.

.. youtube:: vBmblCtobiI
   :align: center

3D Printing
-----------

My goal for this project is to 3D print many versions of a rotating tesseract and make a stop motion animation with them.

What values of :math:`\theta` should I use for my 3D printed tesseracts?

I experimented with the previous Rhino animation code to visualize what a stop motion animation would look like for different :math:`\theta` step sizes. I wanted the stop motion animation to be as smooth as possible without overburdening myself with an unreasonable number of 3D prints to make. I settled on a step size of 10 degrees and models with :math:`\theta` equal to 0, 10, 20, 30 and 40. This also lets me benefit from the symmetry of a tesseract in that the 10, 20, 30 and 40 degree rotations are the mirror image of 80, 70, 60, and 50 degree rotations, respectively. And of course a 90 degree rotation is the same as no rotation at all.

.. image:: /images/itp/3d_printing/final/printing.jpg
  :width: 100%
  :align: center

Each of the 5 prints took 3.5 to 4 hours on an Ultimaker 2+ with PLA material. Unfortunately, there were many failed prints. The total time spent printing was well over 30 hours. All of the successful prints were done at the Tandon Makerspace. I am grateful to have that resource available to me.

.. image:: /images/itp/3d_printing/final/hypercube_set.jpg
  :width: 100%
  :align: center

Tesseract Stop Motion Animation
-------------------------------

And finally, the stop motion animation of a tesseract:

.. youtube:: j0lS_yUWdPs
   :align: center

And in animated GIF form:

.. image:: /images/itp/3d_printing/final/3d_printed_hypercube.gif
  :width: 100%
  :align: center

Producing this was an enormous amount of work. It took 6 hours to film 18 frames. Still, it was a fun experience and I am happy to have worked hard to produce this unique visual exploration of a tesseract.

.. image:: /images/itp/3d_printing/final/stop_motion_filming.jpg
  :width: 100%
  :align: center

The tesseract models were photographed with a Canon Mark III camera while suspended with transparent polyester thread and bent metal hangers. I used Dragonframe to facilitate the proper photos.

Future Work
-----------

This project isn't over. There is more for me to learn.

I wanted to print my models on the Stratasys Elite 3D printers at the Tandon Makerspace. Those printers are not free but have a much higher resolution and use support material that gets dissolved after the print is complete. They produce a much higher quality result. Unfortunately I ran out of time, but I will give it a try later this week.

I also want to try painting my 3D prints. I don't need all of these tesseract prints anymore so I can experiment on them to see how well I can paint a 3D print. The ability to paint a 3D print or apply a better finish would be valuable and make the color of the print material irrelevant.

I want to explore other modeling tools like Blender. Blender comes with more advanced rendering tools and is heavily reliant on Python programming. It is a good match for my skills and interests.

Finally, I want to make a more comprehensive video explaining this project and tesseracts. The animations I created above would be combined with a discussion of the math and equations.
