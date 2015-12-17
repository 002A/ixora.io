.. title: Camera3D: Processing Library
.. slug: index
.. date: 2015-06-17 14:41:01 UTC-04:00
.. tags: processing
.. category: 
.. link: 
.. description: 
.. type: text

Introduction
============

Processing_ is a well known application providing people at all coding skill levels with an opportunity to use technology in a creative way. It is suitable for beginners and can be used in 'Learn to Code' classes, while also being powerful enough to support `cutting edge artwork on display around the world <https://www.processing.org/exhibition/>`_.

Many dedicated creative technologists contribute to Processing_'s continued development, either through contributions to the core application or by making extensions, called libraries. Camera3D is one such library extension that I created that provides users with the ability to make their 3D sketches really look like they are actually 3D.

Camera3D provides a collection of algorithms (called Generators_) for creating 3D effects. More algorithms will be added as I learn about them, and all are implemented in a way that they are super easy for beginners to use. More advanced users can also create their own custom algorithms.

My hope is for this for this library to unlock new opportunities for creative expression in the Processing community.

History
=======

The Camera3D library was inspired by my fascination with anaglyphs and my frustration with the no longer functioning RedBlue library. I built this because I wanted to create anaglyphs in Processing_ and I couldn't get the RedBlue library to work again.

The RedBlue library worked in Processing_ 1.5 but stopped working when Processing_ 2.x stopped supporting the Java3D renderer. I did the best I could to get it working again but every attempt failed. After much experimentation and analysis of the Processing_ library code, I discovered a very different approach that could be used to create a new anaglyph library. The key insight here is that a sketch's *draw* method can be called multiple times per frame. When I realized this, Camera3D was born.

At first Camera3D could only do simple red-cyan bitmask anaglyphs, much like the RedBlue library. As I experimented and researched this subject online, I learned there is much more to anaglyphs than using bitmasks to combine two images. In fact, there are even `published journal papers <http://www.site.uottawa.ca/~edubois/icassp01/anaglyphdubois.pdf>`_ on the subject, outlining sophisticated algorithms for optimal color choices for each pixel. I was hooked.

Today this library can do more than just anaglyphs and stereoscopic animations. A better name for Camera3D might be 'CompoundCam'. What it does is enable you to render your sketch two or more times with different camera settings and then combine the frames together in any way you want. This is very useful for 3D techniques because of our biocular vision, but there could be other uses as well. For example, if you wanted to make a sketch that rendered the scene from many different angles and then combined them into some kind of Picasso-Cubism inspired animation, this library will help you do that.

Acknowledgements
================

I would like to thank `Lee Byron`_ for making the original RedBlue library. Camera3D has little resemblance to RedBlue but does inherit a couple of lines of code from its stereoscopic calculations. More importantly, RedBlue provided me with the inspiration to create this. I would also like to thank my fellow campers from `ITP Camp <http://itp.nyu.edu/camp2015/>`_, especially the folks who attended the session I taught on the first Camera3D prototype. The feedback I received was valuable and helped me make this library even easier to use. I would also like to thank `Tomás Laurenzo <http://laurenzo.net/>`_ and Kay Anar for helpful feedback on working with NVidia 3D.

Features
========

Camera3D works with Processing 2.2 and 3.0.

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

For each of the Generators you can accept the default settings or configure them as you please. You can also make your own custom generators. Debug functionality is built into Camera3D to support your development efforts.

Camera3D supports all of the regular Processing_ camera functions. It also cooperates with other popular libraries like ControlP5 and PEasyCam.

The examples illustrate everything mentioned above as well as provide utility programs to help you explore its potential.

`Javadocs <javadoc/index.html>`_ are available if you need them. You can find the `source <https://github.com/subject117/Camera3D>`_ and latest `release <https://github.com/subject117/Camera3D/releases>`_ on github.

Finally, some :doc:`miscellaneous-thoughts`. 

Future Features
===============

One thing Camera3D doesn't do is make a sketch work the way you'd probably want it to work with your NVidia 3D TV or monitor. At least, it doesn't on my 3D monitor. I do believe this is possible, and unless someone tells me otherwise, I am going to continue to believe it is possible and do what I can to make it happen. It would be great if someone with a deep knowledge of the NVidia API would code this and contribute it back to the library.

You might be able to get it to work on your 3D TV right now if you run the sketch in full screen mode and you can instruct your TV that the video signal is one of the :doc:`split-frame` formats. I don't have a TV like that, but from what I have read, I do believe this is possible. This is new to me, so if you figure out something interesting, please let me know.

The best I can do with my setup here is save each frame to a file and use Processing's Movie Maker tool and then view the movie file with a `Stereoscopic movie player <http://www.3dtv.at/>`_. Camera3D has a special generator for saving the left and right frames to separate directories or saving both to the same directory so you can make a frame-sequential movie. Go to the :doc:`nvidia-3d` page to learn more.

There are many more 3D and VR technologies available that I don't know about. One technology that I would like to suggest to you is `DeepStream 3D <http://www.firsthand.com/products/DeepStream3D.html>`_. Somebody with a Macbook with a Retina display, please do something amazing with that!

The library is designed in such a way that you can easily make your own custom generators. If you have access to a unique technology you will probably be able to integrate it into this library. If you make something that other people can also make use of, please let me know and I will incorporate it into a future release. I am eager to see what the community builds with this.

Finally, I'd like to say that I endeavor to make this library an example of high quality 3D Stereoscopic tools. There are increasingly sophisticated algorithms for doing these things and I don't claim to be an expert on any of them. If there is something I am doing that is incorrect or can be better, please let me know and I will do my best to improve the library.

.. _Processing: http://processing.org/
.. _`Lee Byron`: http://leebyron.com/
