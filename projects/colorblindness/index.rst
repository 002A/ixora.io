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

I built a Processing_ library that can simulate color blindness on any Processing sketch, approximating what a color blind person would see.

I created this with three goals in mind:

1. Easy to use tools for simulating color blindness. This will allow artists and creative coders to consider the needs of color blind individuals in their designs. The implementation is FAST and will not significantly slow down the frame rate of a sketch.

2. Interactive and educational visualizations for understanding color blindness.

3. Pseudoisochromatic art. Normally the expression of visual art is made with trichromats in mind, with color blind people partially or completely missing out on the visual experience being expressed. Pseudoisochromatic art turns that around by creating visual art that only a color blind person can properly see and understand.

A first example of Pseudoisochromatic art appears below. Most people see semi-random colored squares.

.. vimeo:: 182646002

A Protanope (red-green color blind person) would see something similar to below, recognizing the pattern as Conway's Game of Life:

.. vimeo:: 182646027

My hope is for this library to help educate the Processing community about color blindness and to create new opportunities for artistic expression.

Features
========

ColorBlindness works with Processing 2.2 and 3.x.

To learn how to use ColorBlindness, start with the :doc:`colorblindness-tutorial`. Next, have a look at the examples provided to you when you installed ColorBlindness through Processing_'s Import Library feature.

ColorBlindness comes with two algorithms: One is for :doc:`color-blindness-simulation`, and the other is for :doc:`daltonization`. Each works by allowing the normal Processing_ functionality to render each frame of the animation. The library essentially does a post-processing transformation to each frame, altering the colors in a specific way.

For both of these algorithms (or generators) you can accept the default settings or configure them as you please. You can also make your own custom generators. Debug functionality is built into ColorBlindness to support your development efforts.

The examples illustrate everything mentioned above as well as provide utility programs to help you explore the library's potential.

I have documented the `math and calculations <link://slug/color-blindness-simulation-research>`_ supporting my library if you want to learn about the Color Science behind how this works.

`Javadocs <javadoc/index.html>`_ are available if you need them. You can find the `source <https://github.com/002A/ColorBlindness>`_ and latest `release <https://github.com/002A/ColorBlindness/releases>`_ on github.

Limitations
===========

Color blindness simulations rely on color appearance models and theories that are imperfect. No simulation will be able to perfectly recreate what a color blind person sees. Colors that the library says should be identical to a color blind person may actually have small changes in hue or brightness.

The success of the color blindness simulation depends on the color reproduction of the monitor or projector displaying the Processing_ sketch. If the color balance settings are off, the results will be flawed. Viewing angle and room lighting can also alter the results.

I did `research <link://slug/color-blindness-simulation-research>`_ color blindness and can cite sources and explain the math behind my library's calculations. Nevertheless, I am not color blind so it is impossible for me to test this in a way that is completely satisfying to me. The best I can do is look at the implementations of many other color blindness simulation tools and compare results. My conclusion is that my library works at least as well as the other tools out there, but I don't believe it is perfect.

History
=======

The ColorBlindness library is a stripped down fork of my `Camera-3D <link://section_index/projects/camera-3D>`_ library. I realized that in addition to 3D effects, I could implement color blindness simulation with `Camera-3D <link://section_index/projects/camera-3D>`_'s generator framework. It would work, but most likely nobody would ever know about it or guess that a 3D library could do something like that. Since I thought that simulating color blindness would be a useful Processing feature, I decided to make a new library instead.

Acknowledgements
================

I would like to thank the supportive campers at `ITP Camp <http://itp.nyu.edu/camp2016/>`_, especially the folks who attended the session I taught using a prototype version of the ColorBlindness library. I would also like to thank Alex Wagner and `Jake Voytko <https://twitter.com/jakewouldsee>`_. As I am not color blind, I am grateful for their much needed assistance and feedback on what my Processing sketches look like.

Future Features
===============

In the future I would like to port this library to p5. Below is a working proof of concept, demonstrating that it is possible to simulate colorblindness in a real-time animation with p5. The upper half of the sketch is simulating color blindness with a frame rate (on my machine) of 60 frames per second. Web tools made in p5 could reach a wider audience and educate more people about the realities of color blindness. The p5 library will be just as easy to use as the Processing library with all the same features.

.. raw:: html

  <script src="/projects/colorblindness/p5.js" type="text/javascript"></script>
  <script src="/projects/colorblindness/colorblindness_prototype.js" type="text/javascript"></script>
  <div id="sketch-holder" align="center"></div>

I am interested in learning more about Color Science. It is a subject that is endlessly fascinating to me. I put a lot of effort into building tools that are well thought out but I know there are scientists who know much more about this than I do. As I learn more I will extend the library's capabilities. If you have suggestions for how to improve this, please let me know.

Finally, I'd like to create more pseudoisochromatic art. I believe I can do a lot more with this than what I have done already. It will take time but the results will be something unique to the art world.

.. _Processing: http://processing.org/
.. _P5: https://p5js.org/
