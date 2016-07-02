.. title: Making a custom keyboard at ITP Camp (Part 1)
.. slug: making-a-custom-keyboard-at-itp-camp-part-1
.. date: 2016-06-30 22:12:48 UTC-04:00
.. tags: art, technology
.. category:
.. link:
.. description: custom keyboard at ITP Camp
.. type: text

I spent the month of June at `ITP Camp <http://itp.nyu.edu/camp/>`_. It's my third summer in a row there, and as always, I had a blast. This year I attended a session on building a custom computer keyboard. It was taught by `Claire Kearney-Volpe <http://www.takinglifeseriously.com/index.html>`_ and `Ben Light <http://blightdesign.com/>`_.

In the class we met with several members of `United Cerebral Palsy <http://ucp.org/>`_ and discussed their experiences using computer keyboards. Traditional keyboards often do not meet the needs of disabled people. We talked about ways we could re-design a keyboard to make computers more accessible and meet their usability needs.

I worked with a woman named Shaniqua. She didn't like the traditional key arrangement of a QWERTY keyboard and often found it difficult to find the next key she needed to type. There were some keys she didn't use at all and she thought the keys were too close together.

.. image:: /images/custom_keyboard/keyboard_design.jpg
   :align: center

Claire and Ben built a working prototype of a keyboard using laser cut acrylic and a `Leonardo Arduino <https://www.arduino.cc/en/Main/ArduinoBoardLeonardo>`_. The keyboard I am building for Shaniqua will have a similar construction but will be tailored to her needs.

Before camp ended I designed the keyboard layout in Inkscape. The keyboard will look like this:

.. image:: /images/custom_keyboard/keyboard_layout.png
    :align: center

Next I used ITP's 60 Watt laser cutter to cut and etch all of the parts with Adobe Illustrator files derived from the above SVG image. There are 72 keys on this keyboard so the cutting took almost 4 hours to complete.

.. slides::

    /images/custom_keyboard/laser_cut_1.jpg
    /images/custom_keyboard/laser_cut_2.jpg
    /images/custom_keyboard/laser_cut_3.jpg
    /images/custom_keyboard/laser_cut_4.jpg

I made two mistakes with the design. First, the arrow keys were Inkscape lines with arrow heads. Visually that makes sense, but a laser cutter interprets lines as places to cut clean through the acrylic. I wanted it to etch arrows instead. To remedy this I quickly designed different buttons and cut them out on extra material.

I also made a mistake with the bottom layer and omitted one of the screw holes in the bottom layer. To fix it I simply drilled the proper hole using the layer above as a guide. Cutting acrylic with a diamond tipped drill bit was overkill but it got the job done.

.. image:: /images/custom_keyboard/drill_hole.jpg
   :align: center

The next step was the acrylic welding. This welding isn't like metal welding with a torch, it is more like chemical welding that temporarily melts the plastic so two pieces can be fused together. The top of the keyboard with be two layers of acrylic with keyholes for each key, with the top layer of holes being smaller than the lower one. The keys will also be two layers of acrylic, but with the top key layer being slightly smaller than the lower layer. This will allow the keys to be pushed down into a button sensor but not up out of the keyboard.

.. slides::

    /images/custom_keyboard/welding_1.jpg
    /images/custom_keyboard/welding_2.jpg
    /images/custom_keyboard/welding_3.jpg

A few of the keys seem like they will have a lot of friction with the keyboard frame, but if that's the case, I will fix it with some light sandpaper.

Camp is now over, but the keyboard building continues. This is a fun and challenging project that in the end will expand my horizons and my view of what I am capable of. The next step is to understand the electronic components and the Leonardo Arduino. I want to understand how the circuits work before I attempt to solder anything together.
