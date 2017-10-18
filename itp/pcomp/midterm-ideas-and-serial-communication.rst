.. title: Midterm Ideas and Serial Communication
.. slug: midterm-ideas-and-serial-communication
.. date: 2017-10-18 02:09:33 UTC-04:00
.. tags: itp, physical computing
.. category:
.. link:
.. description: Physical Computing: Midterm ideas and serial communication
.. type: text

This week we began learning about Serial communication. I knew what Serial communication was but never did the programming for it on a micro-controller or at a low level like this. This relates to other things I've done with USB peripherals I am happy to learn more about how it works. In particular, the ability to send and receive Serial messages with Python opens up a whole new world of project ideas for me.

Questions
---------

I have some questions about Serial communication. First, what is the Serial channel doing when it is not sending a message? The voltage on the wire will be interpreted as either high or low. How does it differentiate between the absence of communication and a series of null bytes?

The second question has to do with communication errors. How important is it for the code to be robust to communication errors? How common are they? What are the programming best practices to minimize the impact of errors?

.. TEASER_END

Midterm Project Planning
------------------------

My midterm project partner is `Camilla Padgitt-Coles <http://www.ivymeadows.net/itp-blog/?tag=Phys+Comp>`_. I am happy to be working with her. Both of us are interested in exploring the use of micro-controllers for audio or musical applications. Our initial idea was to build a MIDI application of some kind and using a computer to do the sound synthesis. After doing some research we discovered that MIDI is a standardized protocol for communicating musical instructions over Serial connections. This fits in well with where we are in the class.

Camilla found a great book on the subject called `Arduino Music and Audio Projects <http://www.apress.com/us/book/9781484217207>`_. I read through it and learned the basics of how it works and did some experimenting. I also spent quite a bit of time helping Camilla understand more about bytes and bitwise operations. MIDI uses binary communication, not ASCII, and programming an Arduino to send MIDI messages requires one to assemble specific byte patterns to send on a Serial channel. In order for Camilla to get the most out of the book and understand the examples, I needed to get her up to speed on that kind of programming.

Camilla also had a variety of sensors we could use in our application. One sensor we were particularly interested in is a heart rate sensor. We had the idea of a micro-controller reading a person's heart rate and somehow incorporating the values into the rhythm or tempo of a song. We also want to make some kind of an enclosure with buttons using a cardboard box that will house our circuitry.

.. image:: /images/itp/pcomp/week5/sketch1.jpg
  :width: 100%
  :align: center

After doing some experimenting with MIDI programming, we were able to get MIDI synthesis on both of our computers. I adapted a simple program from the book that sent random notes. Both of us needed the `hairless MIDI to Serial bridge <http://projectgus.github.io/hairless-midiserial/>`_ to get it working. It is a fickle program and seems to crash frequently. I have some concerns about using it for this project because of that and fear it will let us down next week when we are presenting to the class. Unfortunately an adapter like this is necessary when creating MIDI with an Arduino Uno. There seem to be other Arduino micro-controllers that can be programmed in a way that doesn't require this, but since we aren't using those devices that doesn't help us here.

We did more experimenting and study of the book. The book provides great documentation of the kinds of MIDI commands or messages that can be generated. The messages that seemed most interesting to us channel are voice change (Piano => Trumpet => Guitar, etc), pitch shift (flat <=> sharp), key change (C Major => D Major => E Major, etc), and sustain. We can add buttons or switches to our device along with the heart rate monitor to set the tempo.

.. image:: /images/itp/pcomp/week5/sketch2.jpg
  :width: 100%
  :align: center

The Instrument Change button and the Key Change button will cycle through a range of possible settings. The coding for this will require maintaining state and the ability to cycle through values in an array. I helped Camilla explain how that can be done with code.

We need a song or a sequence of notes for the device to play that would be interesting to be heard at different speeds. I'm imagining the song associated with the `Jack in the Box <https://www.youtube.com/watch?v=EYYoFl8oAkE>`_ toy (Pop Goes The Weasel?), but Camilla might have other ideas.

For our MIDI experimenting we wrote test code to explore the messages we are interested in. Some of that code is below.

Normally MIDI uses a Serial baud of 31250, but for whatever reason the Hairless utility requires a speed of 115200.

Setting the channel voice only needs to be done once so it is placed in the *setup* method.

.. code:: c

  void setup() {
  //  Serial.begin(31250);
    Serial.begin(115200);

    // Change voice to Harpiscord
    commandSend(0xC0, 7);
  }

In the the *loop* method the Arduino will start and stop random notes.

.. code:: c

  void loop() {
    int val = random(20, 100);
    // Note On
    commandSend(0x90, val, VOLUME);
    delay(200);

    // Note Off
    commandSend(0x80, val, VOLUME);
    delay(800);
  }

Notice there are two *commandSend* functions. This is valid c code because they have different function signatures:

.. code:: c

  void commandSend(char cmd, char data1) {
    cmd = cmd | char(midiChannel);
    Serial.write(cmd);
    Serial.write(data1);
  }

  void commandSend(char cmd, char data1, char data2) {
    cmd = cmd | char(midiChannel);
    Serial.write(cmd);
    Serial.write(data1);
    Serial.write(data2);
  }

Interestingly if I remove the Arduino's USB cable while a note is being played by my computer, the note doesn't end. It keeps playing. I think this is an important piece of information that should be considered in our design. We should have an All Off button that can be pressed to stop or pause all sound generation. Happily, MIDI comes with this feature.

Python and PySerial
-------------------

My favorite and best programming language is Python. I've built all kinds of things with it. One thing I've never done is used Python to communicate with an Arduino. Tom suggested that I give it a try using `PySerial <http://pyserial.readthedocs.io/en/latest/pyserial.html>`_.

Getting this to work looked easy but took more time than it should have because I mistyped the Serial baud rate in my Python code. On the plus side, I now know what happens when the baud rate is incorrect. Interestingly most of the incorrectly read bytes were closer to 0xFF than 0x00.

My test Python code reads MIDI messages. The code is not robust to Serial communication errors and will need to be improved. It would be nice if I could write a Python program that replaces the Hairless utility.

.. code:: python

  MESSAGE = 0x80
  VOICE_CHANGE = 0xC0
  PLAY_NOTE = 0x90
  END_NOTE = 0x80

  counter = 0
  cmd = 0
  channel = 0

  while counter < 50:
      b = ser.read()[0]

      if b & MESSAGE:
          # command
          cmd = b & 0xF0
          channel = int(b & 0x0F) + 1
      elif cmd > 0:
          if cmd == VOICE_CHANGE:
              voice = int(b)
              print(channel, 'change voice: ', voice)
              cmd = 0
          if cmd == PLAY_NOTE:
              note = int(b)
              volume = int(ser.read()[0])
              print(channel, 'play note', note, volume)
              cmd = 0
          if cmd == END_NOTE:
              note = int(b)
              volume = int(ser.read()[0])
              print(channel, 'end note', note, volume)
              cmd = 0

      counter += 1

The program produces output like this:

::

  1 change voice:  7
  1 play note 27 127
  1 end note 27 127
  1 play note 69 127
  1 end note 69 127
  1 play note 93 127
  1 end note 93 127
  1 play note 78 127
  1 end note 78 127

I didn't accomplish everything I wanted to accomplish with PySerial. But I have next week, and later this semester I am in the Learning Machines class. Can I come up with a final project idea that fits the goals of both classes? I think I can, and such a thing would be something I'd be very interested in.
