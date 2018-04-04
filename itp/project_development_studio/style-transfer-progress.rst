.. title: Style Transfer Progress
.. slug: style-transfer-progress
.. date: 2018-04-03 23:13:55 UTC-04:00
.. tags: itp, project development studio
.. category:
.. link:
.. description: ITP class: Style Transfer Progress
.. type: text

I made a longer version of the prototype I showed in my :doc:`midterm-status` post. This took a week to complete:

.. youtube:: h5jxV0bX0uM
    :width: 800
    :height: 400
    :align: center

.. TEASER_END

Overall I'm happy with this. I really like how the frames of the animation are coherent. There's no flickering from one frame to the next. I like how the style augments the scene.

I don't like the animation's stability. Some of the frames jump around a bit. It isn't that bad here but it will be worse with some of the other Google Street View scenes. I've been working on improving this in my code. I have made a lot of progress but am not completely satisfied with my solution. I have an idea that I believe will work for both planar and equirectangular frames. I will finish coding it tomorrow during class.

The animation took a week to create with resolution of only 1000x500. The final version will need to be much higher than that. To start I used Neural Style Transfer code I found `online <https://github.com/cysmith/neural-style-tf>`_ but am eager to code my own. This code uses an algorithm outlined in the seminal paper `Image Style Transfer Using Convolutional Neural Networks <http://ieeexplore.ieee.org/document/7780634/>`_ by Gatys, Ecker, and Bethge. I've been reading other research papers and found some that claim to be a lot faster. I am going to experiment with them in the short term. When I find one that I like I will re-implement it myself and adapt it for my purposes.
