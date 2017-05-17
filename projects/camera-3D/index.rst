.. title: Camera3D: Processing Library
.. slug: index
.. date: 2015-06-17 14:41:01 UTC-04:00
.. tags: processing
.. category:
.. link:
.. description:
.. type: text

Camera3D is an open source Processing library that extends the functionality of the platform to produce graphics that require the ``draw()`` method to be called multiple times. This opens the door to many new possibilities. For example, Camera3D can create 360 video:

.. vimeo:: 216711676
  :height: 300
  :width: 600

It can create stereoscopic videos, such as anaglyphs or split frame videos (for a 3D monitor or TV). Here's the animation I made for my holidays cards last year:

.. vimeo:: 194464821
  :height: 360
  :width: 500

In addition, it can do things nobody has thought of before, like these split depth animations (as I am calling them):

.. vimeo:: 145787362
  :height: 500
  :width: 500

Camera3D is a framework that can support many goals. It comes with pre-built "Generators" to do a variety of things, as well as allowing you to create your own Generators to extend the functionality even more. Everything is implemented in a way that is super easy for beginners to use.

Features
========

Camera3D works with Processing 3.x.

To learn how to use Camera3D, start with the :doc:`tutorial`. Next, have a look at the examples provided to you when you installed Camera3D through Processing_'s Import Library feature.

Below are the built in generators you can use, along with an explanation of how they operate. There's also a :doc:`regular-renderer` that makes Camera3D animations look just like a regular P3D sketch if you need it.

.. _Generators:

+ Camera3D Generators

  * Anaglyphs (require special :doc:`glasses`)

    - :doc:`bitmask-filter-anaglyph`

    - :doc:`true-anaglyph`

    - :doc:`gray-anaglyph`

    - :doc:`half-color-anaglyph`

    - :doc:`dubois-anaglyphs`

  * Non-Anaglyph 3D

    - :doc:`split-frame` - Side-by-Side, Over-Under, and Interlaced (see the :doc:`nvidia-3d` page)

    - :doc:`barrel-distortion` - for Oculus Rift or Google Cardboard

  * Optical Illusions

    - :doc:`split-depth-illusion`

  * 360 Video

    - :doc:`monoscopic-360-video`

For each of the Generators you can accept the default settings or configure them as you please. You can also make your own custom generators. Debug functionality is built into Camera3D to support your development efforts.

Camera3D supports all of the regular Processing_ camera functions. It also cooperates with other popular libraries like ControlP5 and PEasyCam.

The provided Processing example sketches illustrate everything mentioned above as well as provide utility programs to help you explore its potential.

`Javadocs <javadoc/index.html>`_ are available if you need them. You can find the `source <https://github.com/002A/Camera3D>`_ and latest `release <https://github.com/002A/Camera3D/releases>`_ on github.

Finally, some :doc:`miscellaneous-thoughts`.

What is Processing?
===================

Processing_ is a well known application providing people at all coding skill levels with an opportunity to use technology in a creative way. It is suitable for beginners and can be used in 'Learn to Code' classes, while also being powerful enough to support `cutting edge artwork on display around the world <https://www.processing.org/exhibition/>`_.

Many dedicated creative technologists contribute to Processing_'s continued development, either through contributions to the core application or by making extensions, called libraries. It has given me great joy to create this library.

My hope is for Camera3D to unlock new opportunities for creative expression in the Processing community.

History
=======

The Camera3D library was inspired by my fascination with anaglyphs and my frustration with the no longer functioning RedBlue library. I built this because I wanted to create anaglyphs in Processing_ and I couldn't get the RedBlue library to work again.

The RedBlue library worked in Processing_ 1.5 but stopped working when Processing_ 2.x stopped supporting the Java3D renderer. I did the best I could to get it working again but every attempt failed. After much experimentation and analysis of the Processing_ library code, I discovered a very different approach that could be used to create a new anaglyph library. The key insight here is that a sketch's *draw* method can be called multiple times per frame. When I realized this, Camera3D was born.

At first Camera3D could only do simple red-cyan bitmask anaglyphs, much like the RedBlue library. As I experimented and researched this subject online, I learned there is much more to anaglyphs than using bitmasks to combine two images. In fact, there are even `published journal papers <http://www.site.uottawa.ca/~edubois/icassp01/anaglyphdubois.pdf>`_ on the subject, outlining sophisticated algorithms for optimal color choices for each pixel. I was hooked.

Today this library can do more than just anaglyphs and stereoscopic animations. A better name for Camera3D might be 'CompoundCam'. What it does is enable you to render your sketch two or more times with different camera settings and then combine the frames together in any way you want. This is very useful for 3D techniques because of our binocular vision, but there could be other uses as well. For example, if you wanted to make a sketch that rendered the scene from many different angles and then combined them into some kind of Picasso-Cubism inspired animation, this library will help you do that.

Acknowledgements
================

I would like to thank `Lee Byron`_ for making the original RedBlue library. Camera3D has little resemblance to RedBlue but does inherit a couple of lines of code from its stereoscopic calculations. More importantly, RedBlue provided me with the inspiration to create this. I would also like to thank my fellow campers from `ITP Camp <http://itp.nyu.edu/camp2015/>`_, especially the folks who attended the session I taught on the first Camera3D prototype. The feedback I received was valuable and helped me make this library even easier to use. I would also like to thank `Tomás Laurenzo <http://laurenzo.net/>`_ and Kay Anar for helpful feedback on working with NVidia 3D.

Future Features
===============

My number one goal right now is to port this to P5. I expect to have the bandwidth to start later this summer. A JavaScript version of this combined with `WebVR <https://webvr.rocks/>`_ would open up amazing possibilities to a lot of people.

I'd also like to expand on the growing popularity of 360 Video to support Stereoscopic 360 Videos. Some platforms like Vimeo and YouTube support this already but the Processing community does not yet have the tools to create the content for it.

Camera3D could easily produce content for so-called "3D Holograms," such as `this <https://www.youtube.com/watch?v=8ajasU6UISQ>`_ video found online. More importantly, Camera3D is fast enough to do this in real-time, allowing for interactive holigram displays. 

I'd like to improve how Camera3D works with 3D TVs and monitors. Currently it doesn't make a sketch work the way you'd probably want it to work with your NVidia 3D TV or monitor. At least, it doesn't on my 3D monitor. I do believe this is possible, and unless someone tells me otherwise, I am going to continue to believe it is possible and do what I can to make it happen. It would be great if someone with a deep knowledge of the NVidia API would code this and contribute it back to the library.

The library is designed in such a way that you can easily make your own custom generators. If you have access to a unique technology you will probably be able to integrate it into this library. If you make something that other people can also make use of, please let me know and I will incorporate it into a future release. I am eager to see what the community builds with this.

Finally, I'd like to say that I endeavor to make this library an example of high quality 3D Stereoscopic tools. There are increasingly sophisticated algorithms for doing these things and I don't claim to be an expert on any of them. If there is something I am doing that is incorrect or can be better, please let me know and I will do my best to improve the library.

.. _Processing: http://processing.org/
.. _`Lee Byron`: http://leebyron.com/
