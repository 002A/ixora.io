.. title: ColorBlindess: Processing Library
.. slug: index
.. date: 2016-08-28 14:41:01 UTC-04:00
.. tags: processing
.. category:
.. link:
.. description: Colorblindness simulation library for Processing
.. type: text

Introduction
============

Processing_ is an open source Java application used by students and artists to explore creative expression of technology. I very much enjoy creative coding and I often use Processing_ to implement my ideas.

Processing_ allows users to contribute to its continued development by making libraries to extend its functionality. ColorBlindness is one such library extension that I created that provides users with the ability to approximate what a color deficient viewer would see.

ColorBlindness provides two color transformation algorithms. The first simulates `color blindness <https://en.wikipedia.org/wiki/Color_blindness>`_, and the second does a color blindness correction called `daltonization <http://www.vischeck.com/daltonize/>`_. Both are implemented in a way that is easy for beginners to use. More advanced users can also create their own custom color transformation or correction algorithms.

I have three goals for my ColorBlindness library:

1. Easy to use tools for simulating color blindness. This will allow artists and creative coders to consider the needs of color blind individuals in their designs. The implementation is FAST and will not slow down the frame rate of a sketch.

2. Interactive and educational visualizations for understanding color blindness.

3. Pseudoisochromatic art. Normally the expression of visual art is made with trichromats in mind, with color blind people partly or completely missing out on the visual experience being expressed. Pseudoisochromatic art turns that around by creating visual art that only a color blind person can properly see and understand.

My hope is for this library to help educate the Processing community about color blindness and to create new opportunities for artistic expression.

History
=======

The ColorBlindness library is a stripped down fork of my `Camera-3D <link://section_index/projects/camera-3D>`_ library. I realized that in addition to 3D effects, I could implement color blindness simulation with `Camera-3D <link://section_index/projects/camera-3D>`_'s generator framework. It would work, but most likely nobody would ever know about it or guess that a 3D library could do something like that. Since I thought that simulating color blindness would be a useful Processing feature, I decided to make a new library instead.

Acknowledgements
================

I would like to thank the supportive campers at `ITP Camp <http://itp.nyu.edu/camp2016/>`_, especially the folks who attended the session I taught using a prototype version of the ColorBlindness library. I would also like to thank Alex Wagner and `Jake Voytko <https://twitter.com/jakewouldsee>`_. As I am not color blind, I am grateful for their much needed assistance and feedback on what my Processing sketches look like.

Features
========

ColorBlindness works with Processing 2.2 and 3.x.

To learn how to use ColorBlindness, start with the :doc:`colorblindness-tutorial`. Next, have a look at the examples provided to you when you installed ColorBlindness through Processing_'s Import Library feature.

ColorBlindness comes with two algorithms: One is for :doc:`color-blindness-simulation`, and the other is for :doc:`daltonization`. Each works by allowing the normal Processing_ functionality to render each frame of the animation. The library essentially does a post-processing transformation to each frame, altering the colors in a specific way.

For both of these algorithms (or generators) you can accept the default settings or configure them as you please. You can also make your own custom generators. Debug functionality is built into ColorBlindness to support your development efforts.

The examples illustrate everything mentioned above as well as provide utility programs to help you explore the library's potential.

I have documented the `math and calculations <link://slug/color-blindness-simulation-research>`_ supporting my library if you want to learn more about the Color Science behind how this works.

`Javadocs <javadoc/index.html>`_ are available if you need them. You can find the `source <https://github.com/subject117/ColorBlindness>`_ and latest `release <https://github.com/subject117/ColorBlindness/releases>`_ on github.

Limitations
===========

Color blindness simulations rely on color models and vision theories that are imperfect. No simulation will be able to perfectly recreate what a color blind person sees. Colors that the library says should be identical to a color blind person may actually have small changes in hue or brightness.

The success of the color blindness simulation depends on the color reproduction of the monitor or projector displaying the Processing_ sketch. If the color balance settings are off, the results will be flawed. Viewing angle and room lighting can also alter the results.

I did `research <link://slug/color-blindness-simulation-research>`_ color blindness and can cite sources and explain the math behind my library's calculations. Nevertheless, I am not color blind so it is impossible for me to test this in a way that is completely satisfying to me. The best I can do is look at the implementations of many other color blindness simulation tools and compare results. My conclusion is that my library works at least as well as the other tools out there, but again, it is not perfect.

Future Features
===============

I have a high priority goal to port this library to P5_. I plan to at least start by the end of this year. A JavaScript version of my library would be super useful. The educational color blindness tools I have built would reach a lot of people if they could be integrated into web pages.

I am interested in learning more about Color Science. For some reason it is a subject that is endlessly fascinating to me. I put a lot of effort into building tools that are well thought out but I know there are scientists who know much more about this than I do. As I learn more I will extend the library's capabilities. If you have suggestions for how to improve this, please let me know.

Finally, I'd like to create more `pseudoisochromatic art <https://vimeo.com/182646002>`_. I believe I can do a lot more with this than what I have done already. It will take time but the results will be something unique to the art world.

.. _Processing: http://processing.org/
.. _P5: https://p5js.org/
