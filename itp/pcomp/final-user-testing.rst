.. title: Final User Testing
.. slug: final-user-testing
.. date: 2017-12-05 22:12:42 UTC-04:00
.. tags: itp, physical computing
.. category:
.. link:
.. description: Physical Computing: Final project user testing
.. type: text

Our final project continues to progress towards our final presentation next week. Our project is in good shape and we were even able to do some user testing yesterday with some people in the lounge. I'm looking forward to tomorrow's user testing and additional feedback.

Progress
========

We made progress on several fronts. First, I collected much more raw pulse data and studied the data in Python. I was able to identify the shortcomings in the provided `pulse sensor code <https://github.com/WorldFamousElectronics/PulseSensorPlayground>`_ and make some improvements. This is documented in my `previous post <link://slug/modified-pulse-sensing-algorithm>`_. Our project uses this modified version that has noticeable improvements over the original version. It still isn't perfect but for people for whom the sensor gets a good reading, it works very well. This modified version has been shared with two other groups who are also using the pulse sensor.

.. TEASER_END

We also made good progress on our user interface. There is still more work to be done here, and it will be our main focus over the next week. Right now we have dropdowns for the user to pick from a selection of visualizations and breathing exercises. We need to add functionality to support different meditation goals. Our project needs a clear stopping point for the interaction. Some users might want to practice breathing for a fixed length of time, and others might want to reduce their pulse by a certain percentage. Our P5 sketch will support both.

And finally, we made progress on the enclosure. Below are some photos from our assembly. I really like the light-up buttons!

.. slides::

  /images/itp/pcomp/week13/wires.jpg
  /images/itp/pcomp/week13/assembled.jpg
  /images/itp/pcomp/week13/progress.jpg

User Testing Plan
=================

We have several questions we'd like to answer in tomorrow's user testing.

* Does it make a difference if the wristband is on a user's left or right hand?
* How do we best communicate to the user how to go through the process as we imagined it? How much and what should we say in our audio instructions?
* Can people follow the visualizations with their breathing? What visualizations do people want to see?
* Many of our visualizations feature an expanding and contracting circle. Does an expanding circle mean breathing in or breathing out?

I'm looking forward to the testing and the opportunity to see the work of my fellow students.
