.. title: Sprint 2
.. slug: sprint_2
.. date: 2018-04-25 12:22:54 UTC-04:00
.. tags: itp, collaborative design
.. category:
.. link:
.. description: ITP class: Sprint 2
.. type: text

This week we put most of our efforts into designing the user interface. We put together a `presentation <https://docs.google.com/presentation/d/1wgBHRy1soiSGnw7vZZm43th3_YDLZBsXlyphEYLKZyA/edit?usp=sharing>`_ to share with the class to show our progress.

More detail is available below.

.. TEASER_END

UX Design
=========

We started by brainstorming a general idea of the information that should be presented to the user.

.. image:: /images/itp/collaborative_design/week4/design_1.jpg
  :width: 100%
  :align: center

Then we converted the words to a rough sketch:

.. image:: /images/itp/collaborative_design/week4/design_2.jpg
  :width: 100%
  :align: center

And finally a detailed sketch with a the links between screens clearly articulated. We thought of a potential tag line: "It's a Pinterest of yourself."

.. image:: /images/itp/collaborative_design/week4/design_3.jpg
  :width: 100%
  :align: center

Technology
==========

Our research identified a current and past service that seems to address similar needs as ReLive. Specifically, the now defunct `Memoir <https://techcrunch.com/2013/09/18/memoir-for-ios-a-google-now-for-photo-memories-helps-you-remember-the-past/>`_ app, and the startup `Storyo <http://storyoapp.com/>`_. Both seemed to produce videos or slideshows based on photos and data collection of a group of people's activities.

In an effort to differentiate our product from theirs, we would like to explore the idea of having our system output a physical artifact instead of a digital one. The two approaches we will explore are a handwritten personal “biography" (using charRNN + rnnlib) and printed computer generated artworks (using densecap + DCGAN). Realistically one of them is doable until next Wednesday.
