.. title: Processing: Camera3D
.. slug: processing-camera-3D
.. date: 2016-11-24 12:02:44 UTC-05:00
.. tags:
.. category:
.. link:
.. description:
.. type: text

I built a Processing_ library for creating 3D anaglyph and stereoscopic animations.

This library offers users a variety of 3D effects, including:

* 3D Anaglyphs: the retro-3D illusion requiring multi-colored glasses
* Split Frames: suitable for a 3D TV or monitor
* Barrel Distortion: for Google Cardboard or Oculus Rift
* Split Depth Illusion: an optical illusion employing occlusion planes

The key insight of Camera3D's design is that a sketch's ``draw`` method can be called multiple times per frame. The library can render the same scene multiple times with different camera settings and then combine the frames into a composite image. This is useful for 3D techniques because of our binocular vision but it can be used for other purposes as well. The library is fully customizable and can support users that want to implement their own 3D effects or any other idea that requires composite frames.

The library is easy to use. After importing the library, the user only needs to add a few extra lines of code to their ``setup`` methods to employ any of the included tools in their sketch. Below is a simple example demonstrating how it can be used.

.. code-block:: java

  import camera3D.Camera3D;

  Camera3D camera3D;

  void setup() {
    size(500, 500, P3D);
    camera3D = new Camera3D(this);
    camera3D.setBackgroundColor(color(192));
    camera3D.renderDefaultAnaglyph().setDivergence(1);
  }

That's all that is needed to turn a simple rotating cube into this:

.. vimeo:: 144716554

You'll need red-cyan 3D glasses to see the rotating cube properly.

Here is an example of a split depth illusion. The white occlusion plane tricks the brain into thinking that objects in front of the plane are closer than objects that are behind it. These are inspired by `split depth gifs <http://giphy.com/search/split-depth-gifs>`_.

.. vimeo:: 145787362

The Processing library comes with example code that explains how to use it and demonstrates the capabilities of the library. Please install it and have a look at the example code to learn more about what this library can do.

The Camera3D documentation is available `online <link://section_index/projects/camera-3D>`_ along with the `github repo <https://github.com/002A/Camera3D>`_.

Last year my Holiday cards had a 3D tree on the cover, designed with Camera3D. I also created this 3D animation to go with it:

.. vimeo:: 147507616

If you don't have red-cyan glasses handy, view `this <https://vimeo.com/149537951>`_ version instead.

For the future of this library I would like to continue to explore new 3D effects to expand the capabilities of the library. I also need to port the library to p5. The split depth illusion in particular will be amazing on a web page!

.. _Processing: http://processing.org/
