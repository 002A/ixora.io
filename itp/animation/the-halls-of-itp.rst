.. title: The Halls of ITP
.. slug: the-halls-of-itp
.. date: 2017-11-27 23:34:17 UTC-04:00
.. tags: itp, animation, mathjax
.. category:
.. link:
.. description: The Halls of ITP
.. type: text

It is done. I present to you my Animation After Effects video:

.. vimeo:: 244769141
  :height: 450
  :width: 800

And what a challenge it was to make this.

.. TEASER_END

Inspiration
===========

My video was inspired by `simulacra <https://vimeo.com/123006429>`_, an excellent video by `Studio Tagholm <http://www.theotagholm.com/>`_.

.. vimeo:: 123006429
  :height: 450
  :width: 800

I was fascinated by this video when I saw it a year ago. Gabe showed it to us again in class, before teaching us about After Effects. When I learned what After Effects is capable of I realized it would be possible to use After Effects to recreate it. I love After Effects.

Basic Idea
==========

After Effects has a 3D Camera Tracking tool that can be used to "solve" for the camera used to record video footage. Essentially it uses motion tracking to observe how trackable points are moving through a scene. Points that are farther away from the camera move differently than points that are closer. By comparing these differences After Effects can estimate the relative distances of the points. It helps to know the actual angle of view of the camera used to record the footage. For my camera it was 110 degrees. I calculated this with a ruler and some trigonometry.

After solving for the camera, After Effects can let you add objects to the 3D scene using the 3D coordinates it calculated from the motion tracking and camera calculations. The inserted objects can be anything, such as the title text at the beginning of my video. It can also be still images of the video itself...

Imagine you took a photograph of what you see in front of you right now and printed it out on a piece of paper. If your camera and printer are both good enough, it would be theoretically possible for you to put the paper in front of your face and position it perfectly so that what you see in front of you looks exactly like it did without the paper. Actually, that isn't true: you have two eyes that give you depth perception. If you closed one eye and then looked at the paper, it could be indistinguishable from what you see without the paper. Then the effect would work.

You can also do this in After Effects. After creating the 3D Tracker Camera you can take a JPG image of a particular frame of a movie file and insert it back into the same movie file at the same timestep that the JPG frame came from. If you do this perfectly, what you see will be identical to what you saw before.

Until, of course, you advance one step forward or backwards. Then it looks different. And you can add a mask to the inserted frame to only keep part of the image. The inserted image will then look like a frozen panel that just happened to appear in an otherwise normal 3D video.

Inserting the image into the 3D scene with the precisely correct orientation and position is almost impossible. You can do it, kind of, with maybe 20+ minutes of fiddling, but it won't be perfect. A better approach is to calculate the correct position and orientation values. An even better approach is to write some code to calculate the values and then automatically adjust the inserted frame. That's the approach I take here.

3D Geometry of After Effects
============================

Here's some relevant information about After Effects that doesn't seem to be documented anywhere on the Internet.

After Effects 3D geometry uses a right-handed coordinate space. In the first frame of your video the +X axis points to the right, the +Y axis points down, and the +Z axis points into the screen. This is different from `Processing <https://processing.org/>`_,  which uses a left-handed coordinate space. In After Effects the origin will be the upper left corner of the first frame of your video. The unit of measure is pixels.

In After Effects orientations are specified with a set of 3 rotation values. They correspond to rotations around the X, Y, and Z axes. The orientation values are something called `Euler angles <https://en.wikipedia.org/wiki/Euler_angles>`_, or more precisely, `Tait-Bryan angles <https://en.wikipedia.org/wiki/Euler_angles#Tait-Bryan_angles>`_. For Euler angles the rotation order matters. For extrinsic rotations the order is Z, Y, and X. For intrinsic rotations the order is reversed.

Solving for the Transformation Values
=====================================

To insert a JPG frame into a 3D tracked movie I must first pick a group of reliable tracker points and create a Null object linked to them. The JPG frame's parent will be the Null object so its transformation values will be relative to it. The orientation of the Null object must be identical to the 3D camera's in the relevant timestep. The inserted frame's orientation will be [0, 0, 0]. When this is done the only values that must be set are the inserted frame's position (relative to the Null object) and its scale.

The 3D space's coordinate vectors are :math:`x`, :math:`y`, and :math:`z`. Multiply them by the `rotation matrix <https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix>`_ corresponding to the camera's orientation to get :math:`x'`, :math:`y'`, and :math:`z'`. The vector :math:`z'` will point directly into the scene and will be perpendicular to the properly orientated JPG frame. This is the normal vector of the plane the JPG frame lies in. Since I know the JPG frame's plane must also pass through the Null object's position, I can use the normal vector and Null object's location to write an `equation for the plane <https://en.wikipedia.org/wiki/Plane_(geometry)#Point-normal_form_and_general_form_of_the_equation_of_a_plane>`_. With some math I can then solve for the frame's position and scale.

Let :math:`r` be the location of the center of the JPG frame (in world space, not relative to the Null object) and :math:`r_{o}` be the location of the Null object. The formula for the plane is then:

.. math::

  z' \cdot (r - r_{o}) = 0

I need to solve for :math:`r`. Since I know :math:`z'` points directly from the camera's location :math:`c` to :math:`r`, I can define an arbitrary constant :math:`a` such that:

.. math::

  r = c + a z'

Since :math:`z` is a unit vector, :math:`a` is the distance from the camera to the center of the JPG frame.

Now I can substitute and solve for :math:`a`:

.. math::

  z' \cdot (c + a z' - r_{o}) &= 0 \\
  z' \cdot c + a z' \cdot z' - z' \cdot r_{o} &= 0 \\
  a &= z' \cdot r_{o} - z' \cdot c \\
  a &= z' \cdot (r_{o} - c)

This result makes sense given what a dot product means.

The JPG frame's position (relative to its parent, the Null object) is then:

.. math::

  [x' \cdot (r - r_{o}), y' \cdot (r - r_{o}), 0]

Next I must calculate the JPG image's scale. This is expressed as a percentage. I know it must be scaled up to fit the camera's angle of view. If the frame wasn't scaled it up it could still fit the camera's angle of view by moving it closer to the camera. If I can calculate that distance, I can use :math:`a` to get the percentage.

The distance :math:`b` a properly orientated and unscaled JPG image must be from the camera to exactly fill the camera's angle of view can be calculated with trigonometry. Since I know the width of a JPG image is 1920 pixels and the angle of view is 110 degrees,

.. math::

  \tan \left( \frac{110}{2} \right) &= \frac{\frac{1920}{2}}{b} \\
  b &= 672.19923

The JPG image's scale is then simply :math:`\frac{a}{b}`.

ExtendScript Code
=================

My ExtendScript code is available on `github <https://gist.github.com/hx2A/a336f95469ac154c102e8fcc7167bb6a>`_. The language is basically JavaScript. Writing ExtendScript code is easy with the right `documentation <http://docs.aenhancers.com/>`_. Sadly there is no built-in support for the matrix operations I needed to do so I had to write code to handle it myself.

The code does all the tedious work for you. To use it, first you must export your video as a JPG sequence into a subdirectory called ``frames``. You must advance the composition timeline to the place you want the JPG frame to appear and then create a Null object tracked to the 3D camera's motion tracking points. With that Null object selected, run my script. It will do some validation checking and get the timeline's frame number. It imports the frame, inserts it into the composition, calculates the correct transform values for the Null object and the JPG frame, and sets the JPG frame's in-point.

The workflow becomes create a Null object, run my script, and add some masks to the JPG frame. If everything goes well it can be done in under a minute.

Problems
========

If everything goes well...but many things didn't. I estimate I spent close to a hundred hours working on this project. I did enjoy this very much but a hundred hours is time I didn't have to spend on this. Nevertheless, I stuck with it. I enjoyed working on this very much and know the knowledge I gained will be applied to future projects.

My biggest problem had to do with the video footage. All of this works only if it is possible for After Effects to create a 3D Tracker Camera. When I started this project I overestimated the ability of After Effects to do this.

My initial idea was to film a view of the NYC skyline early in the morning as I walked along the Promenade in Brooklyn Heights. I was out there at 6:30 AM on a cold and windy day trying to film. I had to do this on an inhospitable day because people are normally there 24/7, making it impossible to film a continuous shot without a random person getting in the way. I recorded my footage but the camera was too unstable for After Effects to use it. I was using a camera gimbol but it was a windy day and I was recording something on the other side of the Hudson river. Small orientation problems become very noticeable camera aberrations.

My reaction was to try to stabilize the videos. This could be done with gratuitous application of After Effects's stabilization tools. Unfortunately if you do this too much the stabilization algorithm will render the video un-trackable. I wish I knew that before spending several days stabilizing everything.

Oh well. I will use that video for some other future project.

Even my recordings from the halls of ITP were not all trackable. Most of them were, if I was walking straight. Going around turns seemed to stress the tracking algorithm. You'll notice the end of my video has a turn as I head to the elevators. I split that section up into smaller segments and did my modifications on each individually.

The footage I used was recorded at ITP on a Friday morning at 9 AM when nobody was here. It is eerily quiet at that time. When you walk around the only thing you hear is the floor creaking. Moving people can trip up the camera tracking algorithm and also complicate my attempt to add my JPG frames. A moving person cannot pass through a place where a JPG frame is without ruining the effect. Whatever is pictured in the un-masked JPG frame must always be farther away from the camera than the JPG frame. This is important to preserve the illusion.

I did the best I could to make the video interesting. It was hard to make the end result not seem like a gimmick. I put a lot of work into this and wasn't going to give up, but it often felt like I was throwing good time after bad.

If I did this again I would want to use footage recorded in a big open space. The simulacra video is presumably recorded with a drone in an open area. All of the objects are far away from the camera, making the illusion much easier to apply.

Even though this project was extremely time consuming and frustrating at times I enjoyed it very much. I will certainly apply what I have learned for future projects and I am happy to assist someone else who is looking to build on this for one of their projects.
