.. title: Processing: Mouse Tracings
.. slug: processing-mouse-tracings
.. date: 2016-11-24 11:45:10 UTC-05:00
.. tags:
.. category:
.. link:
.. description:
.. type: text

The Mouse Tracings project is a data representation project involving measurements of window, keyboard and mouse activity on my desktop computer at home.

I wrote Python scripts to collect user interface data. For over a year, every time I turned on my computer the Python code would record the mouse position, right and left clicks, mouse wheel use, and key presses. It would also keep track of the active window, identifying the active application.

.. image:: /images/mouse_tracings_small/mouse_trace_by_application_0_2014.10.12_23.38.32_small.png
   :align: center

Using this data, I can create visual depictions of my interaction with my computer using `Processing <https://www.processing.org>`_. Patterns emerge that are visually appealing and informative. This project inspired my interest in mastering keyboard shortcuts.

I got the idea for this project from `Ali Eslami <http://alllesss.com/>`_, a visual artist in Tehran, Iran. I discovered his `tracing mouse movements <http://alllesss.com/?portfolio=tracing-mouse-movements>`_ project while browsing Vimeo.

At ITP camp I met the data artist `Laurie Frick <http://www.lauriefrick.com/>`_ who said that she believed in the metaphysical idea that your data doesn't just represent you, it is you. This project is also inspired by her ideas about data.

The mouse positions are represented as a continuous line. Right and left clicks are represented as right and left semi-circles. Use of the mouse wheel is represented as a ring. Keystrokes are represented as squares, drawn in the location of the mouse at the time of the keystrokes. The shapes are all drawn as partially transparent objects so multiple keystrokes or mouse clicks will appear as brighter colors.

In some cases I can see from the images that I am using my computer inefficiently. For example, in the past I would close windows by clicking on the 'x' in the upper right hand corner. Now I use the keyboard shortcut Alt-F4.

The colors are selected in two ways. The first is by coloring everything based on the active application at the time the data was recorded. The second uses random colors assigned to each kind of computer input. Look in the lower right hand corner of each to see if the colors are random or by application. Below are a few more examples.

.. slides::

    /images/mouse_tracings_small/mouse_trace_random_colors_0_2014.12.19_18.11.38_small.png
    /images/mouse_tracings_small/mouse_trace_by_application_0_2014.12.15_22.55.15_small.png
    /images/mouse_tracings_small/mouse_trace_random_colors_0_2014.11.15_13.42.59_small.png
    /images/mouse_tracings_small/mouse_trace_random_colors_0_2015.01.21_19.27.59_small.png
    /images/mouse_tracings_small/mouse_trace_by_application_0_2014.12.30_18.42.53_small.png
    /images/mouse_tracings_small/mouse_trace_random_colors_255_2015.08.23_11.37.37_small.png

You can see the complete collection `here </galleries/mouse_tracings/>`_.

Finally, I set up my computer to draw these images in real time and display the latest image as the background of my computer. Every 10 seconds the Processing sketch re-reads the data files and creates a visualization of my activity since the computer has been turned on. When I turn on my computer the background is blank. As I use it, the background evolves and explodes with color. Before I turn my computer off, I can see the artwork I have created as a mere by-product of my interaction with my machine.

In the future I would like to expand this project to include animations, showing how the images grow over time. Also, the data can be represented in completely different ways. Since I have a long history of data, I can make heat maps of the probability distribution of the mouse position. Less artistic projects include scientific study of the efficiency of my computer interactions and quantitative measurements of input speeds with tests of alternate computer accessories, such as a gaming keyboard and mouse.
