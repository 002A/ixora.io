.. title: Things That Fit Together
.. slug: things-that-fit-together
.. date: 2017-09-22 11:25:25 UTC-04:00
.. tags: itp, 3d printing
.. category:
.. link:
.. description: Things that fit together
.. type: text

This week we learned new tools for constructing 3D objects. Our assignment is to use what we learned to build something with two parts that fit together.

My idea for this assignment was to build a phillips-head screw. I had a real screw that I used to model my Rhino screw. I began by making careful observations of the screw with a magnifying glass because I wanted the threads, curvature, and proportions to be as realistic as possible. I used digital calipers to take measurements that I incorporated into my design sketch.

.. image:: /images/itp/3d_printing/week2/design.jpg
  :width: 60%
  :align: center

It took a lot of experimentation to figure out how to do this. I settled on an approach using Rhino's Taper and Helix commands. After tapering a helix shaped line, I can then use that line with the Sweep1 command to make the threads. It is important to taper before adding the threads because the Taper command distorts the threads in an unrealistic way.

.. TEASER_END

One of the alternatives I tried was the Twist command. I can make a cylinder with one straight thread down the side, then use the Twist command to twist it around 10 times. It works but doesn't give me the ability to control the shape of the threads. Using the Helix and Sweep1 commands was more straightforward.

Below is my model after adding a helix shaped line wrapped around a cylinder.

.. image:: /images/itp/3d_printing/week2/screw1.jpg
  :width: 100%
  :align: center

Next I used the Taper command to make the end of the screw pointed.

.. image:: /images/itp/3d_printing/week2/screw2.jpg
  :width: 100%
  :align: center

I could use the tapered helix line as a rail to sweep the threads around the screw's shaft using the Sweep1 command. I remembered to Cap the threads when I was done. I also modeled the threads to overlap the cylinder because Rhino doesn't seem to like coincident surfaces when using boolean operations.

The Sweep1 command has multiple "styles" I can choose from in the dropdown in the modal window that appears after using this command. The default option of "freeform" does not do what I need to do. I needed "Roadlike top." The alternatives seemed to rotate the threads in a weird way as the threads revolved around the helix. I am glad I noticed this option in the dropdown because without it, this whole approach would have failed.

.. image:: /images/itp/3d_printing/week2/screw3.jpg
  :width: 100%
  :align: center

Next I can revolve a simple object to build the screw's head.

.. image:: /images/itp/3d_printing/week2/screw4.jpg
  :width: 100%
  :align: center

To make the screwdriver insertion point I used the Boolean Difference command.

.. image:: /images/itp/3d_printing/week2/screw5.jpg
  :width: 100%
  :align: center

Next I used the Scale1D command to shrink the screw by a factor of 10. The model had been been built at 10x the scale so that I could take advantage of the 1.0 mm grid snapping. In retrospect I should have changed the grid snapping to 0.1 mm in the document properties.

.. image:: /images/itp/3d_printing/week2/screw6.jpg
  :width: 100%
  :align: center

Our assignment was to make two things that fit together, so I need to insert the screw into something. I made a simple block of wood and used boolean operations to make a hole for the screw.

.. image:: /images/itp/3d_printing/week2/screw7.jpg
  :width: 100%
  :align: center

I could easily make a hole for the screw's shaft but Rhino refused to use the threads in a boolean operation. I kept getting an error message indicating that the boolean operation failed. I don't understand what the problem was. The Check command tells me the "Rhino polysurface object is valid." The thread's object type is a "closed polysurface."

The below image shows the wood with the hole in it. I would like to see the thread groves in the hole as well. I will ask our instructor about this at our next class.

.. image:: /images/itp/3d_printing/week2/screw8.jpg
  :width: 100%
  :align: center

And with the Ghosted renderer, which I think looks better:

.. image:: /images/itp/3d_printing/week2/screw9.jpg
  :width: 100%
  :align: center
