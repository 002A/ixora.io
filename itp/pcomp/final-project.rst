.. title: Final Project
.. slug: final-project
.. date: 2017-12-12 23:59:44 UTC-04:00
.. tags: itp, physical computing
.. category:
.. link:
.. description: Physical Computing: Final project
.. type: text

Our final project is complete:

.. image:: /images/itp/pcomp/week14/final_project.jpg
  :width: 100%
  :align: center

.. TEASER_END

I am happy this is complete and am looking forward to presenting it tomorrow. I am also excited to see other people's projects. I see so many in-progress projects when I walk around the floor and I am eager to learn more about what these are about.

Our project is in a good state. We were able to add many breathing visualizations and exercises. We also added a user menu using P5's `GUI library <https://github.com/bitcraftlab/p5.gui>`_ and multiple screens using the nicely designed `Scene Manager library <https://github.com/mveteanu/p5.SceneManager>`_. There are audio instructions at the beginning giving the user helpful information about what to do. You can see it all here:

.. youtube:: u440dUytd3o
  :align: center

Yes, that's my voice.

A big reason why our project is in a good state is our code quality. Our code is well organized so we can easily make changes and improvements without breaking existing functionality. Our project can grow. You can see the code online on `github <https://github.com/hx2A/p5_meditation>`_.

We made some important improvements to our code related to the heartbeat sonification. Instead of playing a note with every detected heartbeat, it plays notes using a tempo prescribed by the beats per minute. This provides a better user experience because there are no disconcerting extra or missing beats. Extra and missing beats will happen but they will only raise or lower the pulse rate by a small amount and will not be noticeable by the user.

We still want to make more improvements to the heartbeat detection algorithm. I've been reading some research papers on the subject. They all use filters of some kind or FFT to identify the user's pulse rate and individual heartbeats. Happily there are Arduino filter and FFT libraries for us to use. We thought it was too risky to try to add something like this to our project for tomorrow's presentation. Instead, we will work on it over the next day or two and get it ready for the winter show. That way we will have enough time to test and adapt if something goes wrong.
