.. title: Societies of Control and The Enduring Ephemeral
.. slug: societies-of-control-and-the-enduring-ephemeral
.. date: 2017-06-08 00:17:55 UTC-04:00
.. tags: itp
.. category: 
.. link: 
.. description: Review of Societies of Control and The Enduring Ephemeral
.. type: text

Societies of Control
--------------------

Gilles Deleuze was a french philosopher who was friends with Michel Foucault, the philosopher who wrote about discipline and punishment in society. Deleuze expanded on Foucault’s work by describing a control society, a means of control that is the successor to a discipline society.

Foucault’s discipline society was based on physical enclosures such as prisons or schools, or the idealized Panopticon, with people being constantly monitored. In Deleuze’s `control society <https://libcom.org/library/postscript-on-the-societies-of-control-gilles-deleuze>`_, technology has allowed control to evolve from physical enclosures to one that provides a complex network of human interaction that is constantly monitored. People are free to interact with each other, but only by using the tools the network provides.

An example here is Facebook. We are free to use facebook as we with but it is actually limited to the provided functionality and thoroughly monitored and analyzed. We cannot re-engineer Facebook as we wish and it is very hard or difficult to leave completely. Another example is our smartphones. We are always connected to the Internet and have access to massive amounts of information, but with a cost. Our phones are constantly collecting data based on our actions. The freedom is less free.

It is difficult or impossible to remove oneself from these mechanisms of control. It is not like removing oneself from a prison, where once a person leaves the prison the mechanism of control is no longer effective.

The Enduring Ephemeral
----------------------

Wendy Chun is an author and theorist of digital media. She is also a professor of Modern Culture at Brown University. Her essay `The Enduring Ephemeral, or the Future Is a Memory <https://aestech.wikischolars.columbia.edu/file/view/Hui+Kyong+Chun--the_enduring_ephemeral_or.pdf>`_ is a discussion of the permanence or lack thereof of digital storage.

Chun writes that content can be stored with digital media, seemingly offering permanent records of that content. At the same time, new media is quickly evolving, making the current state of that media fleeting. Therefore we are unable to perfectly preserve the past. The conflict between these two things is Chun’s “enduring ephemeral.”

Digital media creates archival problems. The essay uses the Internet Wayback Machine as an example. The goal of this service is to provide archival services to the Internet, but the Internet is obviously way too big so it is not possible do this except in a flawed and rudimentary way. Therefore the current state of the Internet will one day fade from the memories of the computers that run it and humans that use it.

Midterm Proposal
----------------

My midterm project will be based on Google's `Quick, Draw! <https://quickdraw.withgoogle.com/data>`_ dataset. Google made a game where they challenge users to quickly draw various items like snowmen or trees. A neural network will try to identify the drawing in real-time. The goal of Google's project is to collect human-drawn sketches to train their machine learning algorithms.

Google makes the project data available for download. Documentation for the data is available `here <https://github.com/googlecreativelab/quickdraw-dataset>`_.

My goal for the project is to explore drawing styles by country. Currently their website shows drawings by category, such as `this one <https://quickdraw.withgoogle.com/data/face>`_, but there is no way to look at pictures from only one country. It would be interesting to see if there are perceivable differences in how faces are represented by people in different countries. I suspect people in France would draw the `Eiffel Tower <https://quickdraw.withgoogle.com/data/The_Eiffel_Tower>`_ better than other people, and perhaps people in polar regions draw better `snowmen <https://quickdraw.withgoogle.com/data/snowman>`_ than people in tropical climates.

The Google dataset is quite large so I will do some filtering before uploading it to a Mongo database. Larger countries are probably over-represented so I will use Python to sample an equal number of drawings for each country.

I made a `wireframe </itp_classes/networked_media/networked_media_midterm_wireframe.pdf>`_ of my design idea.