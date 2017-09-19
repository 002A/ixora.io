.. title: First Electronics Lab and Weekly Readings
.. slug: first-electronics-lab-and-weekly-readings
.. date: 2017-09-18 14:03:08 UTC-04:00
.. tags: itp, physical computing
.. category:
.. link:
.. description: First Electronics Lab and readings on Design and Physical Computing
.. type: text

Electronics Lab
---------------

Our assignment was to create something using switches. My goal was to use 3 switches and a 3 color LED to make a circuit that can produce any color.

First I wired a circuit with a 3 color LED, 3 1K Ω resistors, and 3 buttons, like so:

.. image:: /images/itp/pcomp/week2/three_buttons_equal_resistance.jpg
  :width: 100%
  :align: center

I am using my Arduino to power the board. Each button can be on or off, so this can produce 8 different colors. In the picture below I am activating the blue and red colors, making magenta.

.. image:: /images/itp/pcomp/week2/three_buttons_equal_resistance_on.jpg
  :width: 100%
  :align: center

.. TEASER_END

It works, but there is a slight problem. When I activate red and green, I want to see yellow, but I get something that is closer to lime green. The green component of the 3 color LED is more luminous than the red and blue components. It drowns out the other colors.

The 3 color components of the LED must produce different quantities of light for the same amount of current and voltage.  To balance this out I adjusted the resistors. I increased the resistor in series with the green component to 4.7K Ω. I decreased red to 560 Ω and blue to 220 Ω.

.. image:: /images/itp/pcomp/week2/three_buttons_unequal_resistance.jpg
  :width: 100%
  :align: center

Now the luminosity of the 3 color components looks more balanced. When I push the buttons for both red and green, I get a nice yellow color. No color component overpowers the others, allowing me to properly produce primary and secondary colors.

.. image:: /images/itp/pcomp/week2/three_buttons_equal_resistance_on.jpg
  :width: 100%
  :align: center

Finally, I replaced the buttons with the 3 potentiometers that came with my Arduino kit. I did some experimentation with a multimeter to see how they work. The minimum resistance of the potentiometer is zero so I must leave the other resistors in place to avoid breaking the LED. I can adjust the potentiometer dials to make any color within the color gamut of the LED. Below I am making a nice pink color.

.. image:: /images/itp/pcomp/week2/three_potentiometers.jpg
  :width: 100%
  :align: center

Questions
---------

I have one important question about Physical Computing that I would like to discuss in class this week. My question is about how to read resistor bands, and I don't want the answer to be look at that resistor color band table. There are a million `color band tools <https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-resistor-color-code-4-band>`_ online that teach you how to read resistor bands or do it for you, and none of them seem to help when I have a resistor in front of me and I am trying to read it. There are complications: what do I do if I can't actually parse what colors are on the resistor? Sometimes a band looks like red, but then I see a different resistor with a color that is closer to red, so maybe that first band was actually orange. Do all resistor manufacturers have the same pigmentation for their color bands? How do you tell which direction to read the bands? Why do we have to use this color system anyway? Surely it is possible to print an actual number on these small components.

Whenever I get resistors I write the resistance setting on the tape holding the resistors together. When I pull a few resistors out I have reference for comparison. I just need to find the group of resistors that looks like the one I have, and then I know the resistance.

.. image:: /images/itp/pcomp/week2/resistors.jpg
  :width: 100%
  :align: center
