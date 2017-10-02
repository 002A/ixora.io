.. title: First 3D Print
.. slug: first-3d-print
.. date: 2017-10-01 20:13:45 UTC-04:00
.. tags: itp, 3d printing
.. category:
.. link:
.. description: First 3D Print
.. type: text

My first (mostly) successful 3D print! It is a speaker case for a small speaker I upcycled from a Hallmark greeting card. I intend to use this for my Physical Computing class.

.. image:: /images/itp/3d_printing/week3/result2.jpg
  :width: 100%
  :align: center

Here's how I made it! First, I measured the speaker dimensions with digital calipers and sketched my idea on paper.

.. TEASER_END

.. image:: /images/itp/3d_printing/week3/design.png
  :width: 60%
  :align: center

Then I proceeded to model it in Rhino. I started with some basic shapes to be repeatedly extruded to form the different shapes. The corners of the shapes were rounded with the Fillet command.

.. image:: /images/itp/3d_printing/week3/speaker_case1.jpg
  :width: 100%
  :align: center

Then I created the face of the speakers using the Extrude and Cap commands with boolean operations. I wanted to use the Loft command here but I had difficulty getting Rhino to create a single, solid object with that approach.

.. image:: /images/itp/3d_printing/week3/speaker_case2.jpg
  :width: 100%
  :align: center

I build the wall of the speaker case using the same commands.

.. image:: /images/itp/3d_printing/week3/speaker_case3.jpg
  :width: 100%
  :align: center

Next I built the case's rear cover. The outer dimensions of the part that gets inserted into the main piece is 0.2 mm smaller than the inner dimensions of where it will be inserted. I did this because Xuedi recommended that this might be necessary to make the actual 3D printed objects fit together properly.

.. image:: /images/itp/3d_printing/week3/speaker_case4.jpg
  :width: 100%
  :align: center

I added a hole for the wires to go through.

.. image:: /images/itp/3d_printing/week3/speaker_case5.jpg
  :width: 100%
  :align: center

And the final model:

.. image:: /images/itp/3d_printing/week3/speaker_case6.jpg
  :width: 100%
  :align: center

After the model was completed, I printed it using one of ITP's Ultimaker printers.

.. image:: /images/itp/3d_printing/week3/printing.jpg
  :width: 100%
  :align: center

And the final result. I did some soldering to rewire the speakers so it could easily work with a breadboard.

.. slides::
  /images/itp/3d_printing/week3/result1.jpg
  /images/itp/3d_printing/week3/result2.jpg

Not everything went as well as I would have liked. The biggest problem is that in spite of my careful measurements, the diameter of the speaker opening is a full centimeter smaller than it should have been. Unfortunately I got frustrated with the Loft command and in my frustrations I accidentally drew the circle incorrectly. I didn't notice until after I printed it out. There's an important lesson there.

The other issue is with the printer itself. both pieces took about 3 hours to print. I couldn't figure out the right print settings to lower the resolution settings appropriately to make it go faster. I need to talk to someone about Cura print settings.
