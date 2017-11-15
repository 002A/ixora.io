.. title: Playtesting Results
.. slug: playtesting-results
.. date: 2017-11-13 23:52:11 UTC-05:00
.. tags: itp, physical computing
.. category:
.. link:
.. description: Physical Computing: Playtesting Results
.. type: text

Last week Camilla and I did :doc:`playtesting` with our fellow students. In general the results were positive, with some testers expressing an interest in using the final project. Some of our ideas about how the interaction would work were not as well received as I expected.

Results Summary
===============

One tester told us he had previously discussed our project idea with his wife, who works as a therapist. She thought it would be helpful to have some way to help patients practice breathing exercises before the session begins. I find it encouraging that somebody found our project to be sufficiently intriguing to talk about it with someone else. I know she'll be at the Winter Show and I'm looking forward to showing her the final result.

.. TEASER_END

A repeating theme among our testers was how the instructions to breathe in or breathe out was being communicated. In our sample gui we used a solid color that would gradually fill the screen starting from the bottom. The idea we were going for is that someone would fill their lungs with air as the solid color filled the screen. We did not explicitly tell our testers to match their breathing to the screen because we wanted to examine the intuitiveness of our interface. Unfortunately it was not intuitive as nobody matched their breathing to what they saw on the screen. Users wanted to see lighter and darker colors as well as expanding and contracting circles to denote breathing in and out.

In addition, our playtesting breathing exercise was too difficult for most of our testers. The exercise required someone to inhale over 4 seconds, hold for 4 seconds, exhale over 6 seconds, and then pause 2 seconds before repeating the breathing cycle. Not everyone seemed to be able to breathe that slowly. We will need to be able to adjust the speed to better accommodate everyone.

Another common theme we touched on relates to the idea of meditation. Some testers told us "they didn't meditate," possibly because of some preconceived notions about what meditation is. People might be more willing to interact if we framed it differently, without mentioning meditation. Our project can be discussed in the broader terms of controlled breathing exercises or biofeedback. Controlling one's breathing is an important part of meditation but controlled breathing is also helpful and relevant for reasons that are unrelated to mediation.

We need to clearly communicate when the interaction is over or complete. Currently we have the user continue until they decide to stop, but we need something more concrete.

Our users liked the sounds used to symbolize their heartbeat. We were using the Space Piano sounds from Omnisphere.

Next Steps
==========

Camilla and I started coding right away. We now have the basic skeleton in place using P5 code and a modified version of the prototype used during the midterm. The Arduino no longer emits MIDI messages. Instead, it uses the ``Serial.println`` function to send commands to a P5 sketch. The P5 sketch writes debug messages to the console.

Between now and Nov 29th, we will collect more pulse data with our new pulse sensors. We'll try to collect data from multiple locations such as finger, wrist, temple, and ear lobe. We need to develop an improved algorithm for detecting heartbeats. We will also sample sounds from Omnisphere or elsewhere for the P5 sketch to use to signal the user's heartbeat.

For Dec 6th, we will have the enclosures built and a complete user interface in P5. We'll be ready for user testing and more feedback.

We have a lot of work to do in the next few weeks!
