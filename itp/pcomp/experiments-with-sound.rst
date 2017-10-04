.. title: Experiments With Sound
.. slug: experiments-with-sound
.. date: 2017-10-03 12:20:54 UTC-04:00
.. tags: mathjax, itp, physical computing
.. category:
.. link:
.. description: Physical Computing - Experiments with Sound
.. type: text

Upcycling a Speaker
-------------------

A year ago someone gave me a birthday card that played a song when the card was opened. As I was interested in learning more about circuits, I took apart the card and saved the electrical components for a time when I could dissect them and learn more about how they work. Last week we learned about sound in our physical computing class, so it seemed like a good time to put the inexpensive speaker to good use.

To upcycle the speaker I rewired it to give it red and black wires for the speaker's positive and negative terminals and a header pin to go into a breadboard. I also built a 3D printed case as an assignment for my `3D printing class <link://slug/first-3d-print>`_.

INSERT PHOTOS

It looks nice but I need to think about how to make this work with an Arduino. This isn't an Arduino provided part so it isn't immediately clear how to use this. If I put too much current through it I could potentially blow out the speaker. If the Arduino can't output enough current the speaker's sound might be inaudible. Will this work at all?

The rear of the speaker has 8 Ω 0.25 W printed on it. This tells me the speaker's resistance and maximum power output. I can use this information to figure out how to use the speaker with an Arduino.

Presumably I need to wire the speaker in series with a resistor of some unknown size. That circuit will look like this:

INSERT CIRCUIT PHOTO WITH VARIABLE NAMES

I need to figure out the resistance of resistor 1 that ensures the electrical power going through the speaker does not exceed 0.25 W. Using the circuit diagram and the below equations, I can figure out if I can safely use this speaker with my Arduino.

.. math::

  V &= I \cdot R \\
  W &= V \cdot I

The total resistance through the circuit is :math:`x + 8` and the maximum voltage of a digital output pin is 5V. Using :math:`V = I \cdot R` I can calculate the current as:

.. math::

  I = \frac{5}{x + 8}

Next I need to calculate the voltage difference across the speaker, :math:`V_s`. The speaker's resistance is 8 Ω (which I confirmed with a multimeter), so using the same equation and my calculation for :math:`I`, I can solve for :math:`V_s`:

.. math::

  V_s &= \frac{5}{x + 8} \cdot 8 \\
      &= \frac{40}{x + 8}

Using :math:`V_s` and :math:`I` I can calculate the electrical power going through the speaker with :math:`W = V \cdot I`.

.. math::

  W_s &= V_s \cdot I \\
    &= \frac{40}{x + 8} \cdot \frac{5}{x + 8} \\
    &= \frac{200}{x^2 + 16x + 64}

The speaker is rated for 0.25 Watts, which is an upper limit on the amount of electrical power that should go through the speaker.

.. math::

  \frac{200}{x^2 + 16x + 64} < 0.25

What is the minimum amount of resistance :math:`x` necessary to keep :math:`W_s < 0.25`? Using basic algebra and the quadratic formula I can calculate :math:`x \cong 21`. Therefore, the resistor I add to the circuit should be at least 21 Ω.

That seems kind of low to me. With a resistor of that size, what is the total amount of current going through the circuit? Using our equations we can calculate that as:

.. math::

  I = \frac{5}{x + 8} = 0.172

The current is 0.172 Amps, or 172 mA. That's more than the maximum amount of current that the `Arduino's Atmel ATmega328P can safely output on a pin <https://playground.arduino.cc/Main/ArduinoPinCurrentLimitations>`_. The limit is 40 mA, and ideally my circuit is not actually near the limit. Therefore, a 21 Ω resistor is not large enough for this circuit. The necessary resistor size :math:`x_2` is:

.. math::

  \frac{5}{x_2 + 8} &= 0.040 \\
  x_2 &= 117

I obtained a 150 Ω resistor from the shop. If I use that resistor, how much current will go through the circuit? Substituting that into my equation for :math:`I`, I get 32 mA. That is a reasonable amount that will not damage the board or the speaker. This current means the wattage used by the speaker is:

.. math::

  W_s &= V_s \cdot I \\
      &= (0.032 \cdot 8) \cdot 0.032 \\
      &= 0.008

That's pretty small, and about 3% of what the speaker is capable of. Nevertheless, when I build the circuit and use it, I can hear a tone from the speaker. Therefore, I was able to successfully upcycle a speaker from a greeting card with an Arduino.

Questions
---------

Why is it that the small circuit in a Hallmark card can play an actual song with its speaker but an Arduino can't play more than one pitch at a time? The card's circuit must be specially made to modulate voltage in a special way
