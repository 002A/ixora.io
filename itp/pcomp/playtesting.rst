.. title: Playtesting
.. slug: playtesting
.. date: 2017-11-07 22:40:10 UTC-05:00
.. tags: itp, physical computing
.. category:
.. link:
.. description: Physical Computing: Playtesting
.. type: text

Tomorrow we will begin Playtesting for our final project. I'm feeling good about the direction of our project and am looking forward to answering our user interaction questions.

New Design
==========

We made some changes to our design. Most notably, we are going to drop MIDI sounds in favor of sampled sounds in mp3 or wav format. This simplifies our design and also removes the requirement that future users of this device will need to buy relatively expensive MIDI software to make pretty sounds. Additionally, we discovered that there might be some shortcomings in a Mac's MIDI subsystem that may be behind some of the technical challenges we faced during the midterm.

We are going to continue referring to our device as MIDI Meditation until we come up with a better name. The name of the project is probably the least important thing for us to think about right now.

.. TEASER_END

The external Arduino-powered device will still feature a pulse monitor to read the user's pulse. We are going to buy the next version of the pulse sensor because it has improved noise reduction and accuracy. Heartbeat information will be sent to a desktop computer through a Serial connection to a Processing sketch. For playtesting we will use a simple prototype built in `Processing <https://processing.org/>`_ but we may use `P5 <https://p5js.org/>`_ instead for the final version.

The Processing sketch will display a simple user interface that will guide the user through a specific breathing technique. This will be communicated to the user through a solid blue color filling the screen that waxes and wanes from the bottom at regular intervals. We think that this is a simple and intuitive way to communicate breathing to a user. This will be tested during our playtesting tomorrow.

The final version will have some user options available through a set of dropdowns and buttons made available from a slide-out menu. We expect users to set their preferred options at the beginning and then not touch them for an extended period of time.

For playtesting users will listen to previously made recordings of our own heartbeats.

.. soundcloud:: 348458865

.. soundcloud:: 348458860

A system diagram reflecting our current thinking is below:

.. image:: /images/itp/pcomp/week9/system_diagram.jpg
  :width: 100%
  :align: center

The user interface of the Arduino-powered device is pretty similar to what we had for our midterm project. We are going to add two LEDs to show when the device is powered up and the user's pulsing heartbeat. This will be most useful to inform the user that the device is functioning normally.

.. image:: /images/itp/pcomp/week9/user_interface.jpg
  :width: 100%
  :align: center

Playtesting Plan
================

Here are the minimalist instructions we will provide our testers tomorrow.

  This is a breathing meditation exercise device. It will teach you breathing techniques and let you listen to your heartbeat.
  There are options for deciding how you want your heartbeat to sound and a screen to guide your breathing.

We expect everything else to be self-explanatory.

And the questions we would like to answer:

* Did users find this to be intuitive to use?
* Do people understand when to breathe in and out, and when to hold their breath?
* What are people's questions or comments about the user interface?
* Where should we put the sensor? Good choices are earlobe, temple, wrist, and finger.
* What are the appropriate colors for the breathing exercises?
* Should there be a visualization of the user's heartbeat?
* Should we have an option to show the heartrate numerically?

Bill of Materials
=================

We are going to make two devices, not one. With two, both of us will get one to use after the class is over. And more importantly, the redundancy will be helpful for our final presentation and the Winter Show if something were to go wrong with one of them. The electronics aren't that complex so this shouldn't materially change the total amount of work we will do.

We already purchased one of the improved `Pulse Sensors <https://www.adafruit.com/product/1093>`_ so we only need to purchase one more. We will need two enclosures and one sheet of acrylic. We are picturing a nice wooden box with acrylic on top, similar to what some other students did for their midterm.

After that, we just need some buttons, a breadboard, 2 Arduinos, and some LEDs. We already have those things in the shop or in our possession.

To actually use the final result we will need a computer with a monitor and a comfortable chair to sit in. We'll have the user wear over-ear headphones to listen to their heartbeat.

Timeline
========

There are two key accomplishments we need to make in the near future. First, we need to start collecting pulse data from a large collection of students using the new pulse sensor. Using this data we will develop a more sophisticated algorithm for detecting a user's pulse that will be suitable for the various people who attend the Winter Show. Secondly, we need to make a decision about using P5 or Processing. We know we want the user interface to cover the entire screen. It is simple to do this with Processing so that's why we are using it for tomorrow's testing. In theory we should be able to do this with P5 as well. There are pro's and con's to using both Processing and P5. Once we make this decision we will program the core functionality of the user interface. We intend to use an object oriented design, separating the core functionality from the details of the user interface. This modular approach will result in more reliable software and allow us to easily test different user interface designs.
