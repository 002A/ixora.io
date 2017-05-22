.. title: Miscellaneous Thoughts
.. slug: miscellaneous-thoughts
.. date: 2015-11-04 14:51:05 UTC-05:00
.. tags: processing, art
.. category: 
.. link: 
.. description: Processing - Camera3D library - Performance comments
.. type: text

Here are some miscellaneous thoughts about Camera3D that you might want to know.

**Think carefully about performance**

In Camera3D your *draw()* method is called multiple times. If it is slow, your sketch will become even slower. Also consider the Camera3D Generator execution time, which will add more work for your computer to do for every frame of your animation.
  
The Processing library provides the `frameRate <https://www.processing.org/reference/frameRate.html>`_ variable for you to use to measure how quickly it is rendering frames. The default speed is 60 frames/second, but anything above 25-30 frames/second will be adequate. Television's framerate is 24 frames/second. You probably don't want your sketch to be slower than 20 frames/second.
  
Camera3D provides two methods for you to profile the performance of your sketch. These two methods will report the time in milliseconds to generate the composite image and the time in milliseconds to call the draw method.

.. code-block:: java

  void preDraw() {
    println("Generator Time", camera3D.getGeneratorTime());
    println("Draw Time", camera3D.getDrawTime());
  }

..

In addition, there is a *reportStats()*  method that prints out all of the relevant information for you.
  
.. code-block:: java

  void setup() {
    ...
    camera3D.reportStats();
    ...
  }

If your draw method takes more than a couple of milliseconds, try to move code from the *draw()* method to the *preDraw()* method. If the Generator takes more than a couple of milliseconds, you can use a different Generator or you can reduce the size of the sketch.
  
There is an *enableSaveFrame()* method that will tell Camera3D to listen to keyboard events. The default key is 's', and when it is hit it will save several png images to show you the intermediate steps in the rendering process for the current frame. This is useful if you are making your own Generator and it was useful for writing this documentation.

Do **NOT** call Processing camera functions directly. Use Camera3D instead. For example, if you want to change the perspective of your sketch, do this:

.. code-block:: java

  void setup() {
    ...
    float cameraZ = (height/2.0) / tan(PI*60.0/360.0);

    // DO NOT DO THIS!!!!
    // perspective(PI/3, width/height, cameraZ/10, cameraZ*10);

    // DO THIS INSTEAD
    camera3D.perspective(PI/3, width/height, cameraZ/10, cameraZ*10);
    ...

Camera3D needs to control the Processing camera settings. If you call Processing camera functions directly they will either do nothing or they will ruin your sketch.

You may want to save frames from an anaglyph sketch and make a movie file out of it. To do this, call Processing's *saveFrame* method from the *postDraw* method, like this:

.. code-block:: java

  void postDraw() {
    saveFrame("frames/####-animation.tif");
  }

You'll want to encode the sequence of images into a movie file. You can use Processing's Movie Maker tool, but that does not give you the option to control how the movie is encoded or what the bitrate is. Video encoding can alter the images slightly, which is normally fine, but for an anaglyph, small changes can introduce undesirable artifacts.

To make the animation for my `holiday cards <link://slug/happy-holidays-2015>`_ I used *avconv* with the below parameters. The output was larger than the Movie Maker tool's output but seemed to be higher quality.

.. code-block:: bash

    $ avconv -i spf.mp3 -framerate 29.97 -i %05d-tree.tif -acodec mp3 -vb 10M -vcodec libx264 tree.mpg
