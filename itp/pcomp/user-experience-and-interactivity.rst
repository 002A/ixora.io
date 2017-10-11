.. title: User Experience and Interactivity
.. slug: user-experience-and-interactivity
.. date: 2017-10-10 22:35:44 UTC-04:00
.. tags: itp, physical computing
.. category:
.. link:
.. description: Physical Computing: User Experience and Interactivity
.. type: text


More reading and Physical Computing experiments!

Sketching the User Experience
-----------------------------

`Sketching the User Experience <https://www.amazon.com/Sketching-User-Experiences-Saul-Greenberg/dp/0123819598/>`_, by Saul Greenberg and Bill Buxton, is a book about design techniques that are useful for user experience design. The main idea is that sketching is an effective tool for designers to quickly develop, communicate, and record ideas. The book first explains the importance of design techniques, and then goes through a variety tools a designer can use. Some are obvious, like a simple quick sketch, but others are not approaches I would have thought of on my own.

The book is clear that reading about sketching user experience is not the same actually going through the process sketching user experience. To explore this, I went through the book and thought about how I could incorporate this into my behaviors.

I (almost) always have my phone with me, and I have Evernote on my phone. Evernote has some neat features for storing hand drawings that I don’t use very often. I thought it would be a good idea to explore this and see how easily I can use it to sketch a design.

.. TEASER_END

I was feeling recursive today so I used Evernote to make a sequence of sketches of the user experience of using Evernote to make a sketch. And since Evernote allows me to share individual notes, you can see that note `here <http://www.evernote.com/l/AazmWNj8IjNO74qLoBvSIlvtZvfEG1ux0_g/>`_. I was able to make several sketches in a single note and then add my own notes below each picture. This was easy to do and I can definitely see myself actually using this. I don’t always have a notebook or pens with me so this will be an effective alternative. The ability to archive and share design ideas publicly or with individual people is a valuable bonus.

An idea in the book that I had never heard of is the Wizard of Oz technique. Like the wizard in the movie, there is smoke and mirrors (but designers are transparent about that). The designer simulates a complex interaction that would be difficult or impossible to prototype right now by having a “hidden human” that will drive the interaction according to a clearly defined set of rules. An example of when this would be useful is in speech recognition in an age when that technology is not yet available.

For this to work the wizard must carefully follow the defined rules of the algorithm, staying within the constrained interaction model. The wizard shouldn’t use their brain or knowledge to interpret the user’s true intent because that would mask mistakes in the design. When strictly applied this can be highly effective technique for exploring cutting edge technologies.

Happy Feedback Machine
----------------------

As an example of user experience design, we review the `Happy Feedback Machine <http://www.kidmang.com/portfolio/projects/hfmDocumentation.html>`_, a project by former ITP student Anh Nguyen. The documentation has great sketches outlining the interaction narrative and the branches the user goes through as they use the machine. Most importantly, it is clear to me as the reader what the machine’s creator imagines adults and children will do when they interact with it. I don’t think I would get this with pictures of the completed device.

The machine itself is quite intriguing. I myself like to push buttons and I know this is something I would be drawn to and play with. I like how it has layers of complexity with the settings of one button impacting others. And no instructions or user manual! Rather than providing clear instructions of what to do, the user can explore this on their own and feel safe that their explorations won’t break something or have unfortunate consequences.

Making Interactive Art: Set the Stage, Then Shut Up and Listen
--------------------------------------------------------------

In Tom Igoe’s blog post, `Making Interactive Art: Set the Stage, Then Shut Up and Listen <http://www.tigoe.net/blog/category/physicalcomputing/405/>`_, Tom writes about interactive art installations. The main idea of the post is that interactive art should not be “explained” or “interpreted” for viewer. Instead, the viewer should figure this out on their own. If interactivity is a two-way conversation between a person and an interactive object, the conversation should stay between those two entities without a third party (the art creator) inserting themselves into the dialogue.

Maintaining this kind of discipline while creating interactive art would force the artist to think about the design of the art. The viewer gets to realize on their own how to interact with it. The viewer then “completes” the work through their own interactions.

Arduino Performance Testing
---------------------------

I did some performance testing of my Arduino board. This information will make the coding easier for some of my ideas. Last week's project left me curious about how much time it takes for the microcontroller's basic operations because for that program it mattered a great deal.

There were some interesting results. I discovered that digital reads and writes to the Arduino's PWM pins take between 3.5 and 4.1 microseconds but for the non-PWM pins it takes just under 3.0 microseconds. I did not expect the PWM pins to be slower for the same command. Analog writes to the PWM pins takes between 7 and 8 microseconds. Analog reads of the analog input pins take about 112 microseconds each.

Other math operations seemed to take between 0.25 to 1.0 microseconds each.

This information is helpful and I will put it to good use in the future.
