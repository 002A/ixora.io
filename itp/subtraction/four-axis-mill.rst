.. title: Four-Axis Mill
.. slug: four-axis-mill
.. date: 2018-04-15 12:24:11 UTC-04:00
.. tags: itp, subtraction
.. category:
.. link:
.. description: ITP class: Four-Axis Mill
.. type: text

This week's assignment is the Four-Axis Mill skill builder. Our goal was to get some experience using the machine.

I milled this simple object out of a dowel rod that was left over from a previous assignment.

.. image:: /images/itp/subtraction/week10/11_final_1.jpg
  :width: 100%
  :align: center

Not everything went as expected. I did learn a lot about the limits of the machine though, and that makes me happy.

.. TEASER_END

I started with the below model. This is a cylinder with various cuts taken out out of it. There is one cube extrusion added to one of the cuts.

.. slides::

  /images/itp/subtraction/week10/model_1.jpg
  /images/itp/subtraction/week10/model_2.jpg
  /images/itp/subtraction/week10/model_3.jpg
  /images/itp/subtraction/week10/model_4.jpg

The main idea here is to see how well the machine mills these kinds of surfaces. I was aware that it wouldn't be able to do all of them as designed. I wanted to explore the boundary of what it can and cannot do to better inform my thinking.

I learned about the Vectorworks rendering options to create those pictures. I added a wood texture to the wood. I couldn't figure out how to get the grain pattern to go in the right direction but the color seems about right.

After completing the model I created the job using the milling software in the shop. This was pretty straightforward; I just followed documentation provided on the class website.

When I previewed the final result I saw I had made a few mistakes. Most significantly, the milling software didn't want to mill the gap between the cube extrusion and the side of the cylinder. You can see the problem in the preview below. The mill bit was 0.25" diameter and the gap as modeled in Vectorworks is 0.25". I had to go back to Vectorworks to change the cube extrusion size to 0.24" so it would mill that gap.

.. image:: /images/itp/subtraction/week10/1_create_job.jpg
  :width: 100%
  :align: center

After correcting my model I had to go through the entire setup process again. Everything looked OK so I proceeded to align the Z and X axes after adding my flat-end 0.25" milling bit.

Aligning the Z axis took forever. I forgot what Ben said about how to make this faster and didn't want to fiddle with the machine and mess it up so I decided the best strategy was to be patient.

.. image:: /images/itp/subtraction/week10/2_zero_z_axis.jpg
  :width: 100%
  :align: center

This is the control panel I used to align the two axes. I didn't align the Y axis or the rotation angle.

I went through this alignment process 3 times...

.. image:: /images/itp/subtraction/week10/3_zero_x_z.jpg
  :width: 100%
  :align: center

When I felt ready to begin the milling process I started the job, hopeful that I just had to sit there and watch the machine do my bidding. Unfortunately this was not the case. The machine started milling the air far away from the wood. I did configure it to consider the wood to be slightly larger than it actually was, but not that much larger. What happened? Did I improperly align the Z axis?

After some investigation I discovered the problem was with my Vectorworks model. Before modeling in Vectorworks I measured my dowel rod and found it to have a 1.125" *diameter*. When I created my model I mistakenly created a cylinder with a *radius* of 1". I had stupidly confused radius and diameter. Ouch.

.. image:: /images/itp/subtraction/week10/4_milling_air.jpg
  :width: 100%
  :align: center

At this point I was pretty annoyed with myself. I didn't want to go back to Vectorworks and remodel the entire thing. Instead I used the milling software to scale down the model by 50%. This was going to interfere with my design and undo my effort to fix the gap around the cube extrusion but I didn't want to go back to Vectorworks again.

.. image:: /images/itp/subtraction/week10/5_milling_start.jpg
  :width: 100%
  :align: center

After going through the setup process yet again I was ready to run the job. Finally, I could sit and watch the machine mill the designed object.

.. image:: /images/itp/subtraction/week10/6_milling_wood.jpg
  :width: 100%
  :align: center

The job is configured to be a round job, not a flat job. It quickly became apparent that the machine would only mill by rotating the wood and moving the bit along the X and Z axes. The bit is always pointed directly at the center of the wood.

For my job it would have been a lot faster and more efficient if it also used the Y axis to mill some of the surfaces. It is capable of doing this when milling flat jobs, but when it is milling flat jobs it doesn't rotate the wood.

Bottom line, this machine is called a "four axis mill" but it won't use more than three axes at a time.

.. image:: /images/itp/subtraction/week10/7_milling_progress.jpg
  :width: 100%
  :align: center

The job only took half an hour. If I had a 1.125" *radius* dowel rod it would have taken over two hours.

.. image:: /images/itp/subtraction/week10/8_milling_complete.jpg
  :width: 100%
  :align: center

After removing the wood from the mill I had to cut through the supports with the band saw.

.. image:: /images/itp/subtraction/week10/9_cut_supports.jpg
  :width: 100%
  :align: center

I also sanded down the supports to remove them completely from the object.

.. image:: /images/itp/subtraction/week10/10_sand_supports.jpg
  :width: 100%
  :align: center

Below is the end result. It is smaller than what I had in mind, but it is what it is.

.. slides::

  /images/itp/subtraction/week10/11_final_1.jpg
  /images/itp/subtraction/week10/11_final_2.jpg
  /images/itp/subtraction/week10/11_final_3.jpg
  /images/itp/subtraction/week10/11_final_4.jpg

There are some differences from what I expected.

I knew that because of the round mill bit it might not be able to mill the inside of sharp corners. If it used the Y axis it could have worked around this for some of the cuts and done a better job. Since it didn't do that I'm faced with the same milling limitation it has on the othermill and CNC.

What didn't occur to me but seems obvious in retrospect is that I have a similar limitation for the bottom of the bit. It can't mill down to a point or sharp corner. This, coupled with the lack of Y axis movement, had unexpected implications that added artifacts to the end result.

Ben said that it can do more complicated things than what we are learning in this skill builder. I might be able to mill something with both flat and round jobs at the same time, but I suspect that is easier said than done. I'll ask about this in class this week.
