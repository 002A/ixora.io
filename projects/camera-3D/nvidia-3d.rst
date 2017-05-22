.. title: NVidia 3D support
.. slug: nvidia-3d
.. date: 2015-11-14 17:37:43 UTC-05:00
.. tags: processing, art
.. category: 
.. link: 
.. description: Processing - Camera3D library - 3D TVs
.. type: text

This will document what I know about making Processing and Camera3D work on a Windows machine with a NVidia 3D ready monitor. If you have a different setup and can get this to work in a way that is different from below, please let me know.

Of course for any of this to work you must have "Enable stereoscopic 3D" set in the NVidia control panel with the correct Stereoscopic display type.

3D Videos on Youtube
--------------------

There are 3D videos on `Youtube <https://www.youtube.com/results?search_query=3d+side+by+side>`_. You can create similar videos with Camera3D using the Side-by-Side half width Generator.

.. code-block:: java

  void setup() {
    ...
    camera3D = new Camera3D(this);
    camera3D.renderSplitFrameSideBySideHalfWidth().setDivergence(2);
    ...
  }

To make a movie file you will need to save every frame. Do that with Processing's *saveFrame* feature in the *postDraw* method:

.. code-block:: java

  public void postDraw() {
    saveFrame("####-menger.tiff");
  }

You can then make a movie out of the files using Processing's Movie Maker tool and upload that to YouTube. There will be checkbox on the upload screen for you to indicate the content is 3D.

Actually watching a 3D video on Youtube is another story. I have not yet gotten it to work. It might work for some people with the right setup, or perhaps this is something that worked in the past. I know there is supposed to be a 3D option that magically appears in the Gearbox menu in the lower right corner of the screen, but I have only gotten that to appear once. You might have better luck with it.

Stereoscopic Video Players
--------------------------

NVidia provides (provided?) a 3D video player for their customers that you can download `here <http://www.nvidia.com/object/3d-vision-video-player-1.7.5-driver.html>`_. Frustratingly it does not work for me on Windows 10. It might have worked on Windows 7/8 and stopped working in the latest version. Alternatively, you can download the Stereoscopic Player from `3dtv.at <http://www.3dtv.at/Products/Player/Index_en.aspx>`_. I have been able to get this player to work on my machine. NVidia's video player is actually a stripped down version of the Stereoscopic Player. Unregistered users of the Stereoscopic Player have a 5 minute playback limit.

Again you must use Processing's Movie Maker file as above but you can choose from a variety of formats:

.. code-block:: java

  void setup() {
    ...
    camera3D = new Camera3D(this);
    // use ONE of the following lines of code:
    camera3D.renderSplitFrameSideBySide().setDivergence(2);
    camera3D.renderSplitFrameSideBySideHalfWidth().setDivergence(2);
    camera3D.renderSplitFrameOverUnderHalfHeight().setDivergence(2);
    camera3D.renderSplitFrameOverUnder().setDivergence(2);
    camera3D.renderInterlaced().setDivergence(2);
    ...
  }

When you open a file in the Stereoscopic Player you must tell it what the layout of the file is. Choose one of these options:

* Side by Side, Left Image First
* Over/Under, Left Image Top
* Interlaced (field-sequential) Left Line First

For side by side and over under, remember to check "Half width" or "Half height" if necessary. Output must be set to NVidia 3D. Play the video and enjoy.

You will notice that there is also a Frame Sequential option. This means the frames of the movie alternate between the left and right components. To create a movie like that, Processing must save the frames in that order. Camera3D can do that for you:

.. code-block:: java

  void setup() {
    ...
    camera3D = new Camera3D(this);
    camera3D.stereoscopicSequentialFrameSaver("####-menger.tiff").setDivergence(2);
    ...
  }

When you do this the image you see on the screen will be the left component but the right and left frames will be saved to similar files. Create a movie with the Movie Maker tool in the usual manner.

Alternatively you can save the left and right images to two separate directories.
    
.. code-block:: java

  void setup() {
    ...
    camera3D = new Camera3D(this);
    camera3D.stereoscopicLeftRightFrameSaver("left/####-menger.tiff", "right/####-menger.tiff").setDivergence(2);
    ...
  }
    
This time, create two movies with the files in each directory. The Stereoscopic Player lets you enter a movie with separate left and right movie files.

For all of these, they are left image first, left image on top, or left image on the left. If necessary you can swap left and right using the *swapLeftRight* method.

.. code-block:: java

  void setup() {
    ...
    camera3D = new Camera3D(this);
    camera3D.renderInterlaced().setDivergence(2).swapLeftRight(true);
    ...
  }

This is the same as setting the divergence to a negative value. This works for any stereoscopic generator, including the anaglyphs.

If you are going to use the Stereoscopic Player, my advice to you is to use the Frame Sequential format or save the frames to two directories. The image quality will be higher than the half width/height versions and will not have a reduced screen area.
