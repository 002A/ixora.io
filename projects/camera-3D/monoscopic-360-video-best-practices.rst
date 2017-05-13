.. title: Monoscopic 360 Video Best Practices
.. slug: monoscopic-360-best-practices
.. date: 2017-05-13 08:12:29 UTC-04:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text

Below is the information you need to generate 360 Videos for Facebook, YouTube and Vimeo.

Sketch Workflow
===============

Development
-----------

Here is the Camera3D code I use when developing a new 360 video sketch.

.. code-block:: java

  void setup() {
    size(800, 400, P3D);

    camera3D = new Camera3D(this);
    camera3D.renderMonoscopic360();

    camera3D.setBackgroundColor(color(255));
    camera3D.camera(0, 0, 0, 0, 0, -1, 0, -1, 0);
  }

Notes:
++++++

* The equirectangular projection will be visible in the sketch window. It's obviously distorted but with experience you can understand what's going on and program your sketch accordingly.

* I also tell Camera3D what background color I want and move the camera to the origin, for simplicity.

Testing
-------

When I am ready to test it out with an online 360 player, I change it to this:

.. code-block:: java

  void setup() {
    size(1300, 900, P3D);

    camera3D = new Camera3D(this);
    camera3D.renderMonoscopic360()
      .setOutputSizeAndLocation(4096, "frames/sketch_#####.tiff")
      .skipDisplayingCompositeFrame();
    camera3D.setFrameLimit(30 * 60);

    camera3D.setBackgroundColor(color(255));
    camera3D.camera(0, 0, 0, 0, 0, -1, 0, -1, 0);
    camera3D.reportStats();
  }

Notes:
++++++

* The size of the sketch window increased to improve the output quality.

  - My monitor is HD with 1920x1080 pixels and for whatever reason Processing will crash if the sketch window doesn't fit on the screen, so I must make the height a bit smaller. Note that the aspect ratio of the sketch size is irrelevant when the Generator is saving output to files.
  
  - For 4K video there's no benefit in making the height or width greater than 1300 pixels. I would test with 1300x1300 if I could, or maybe use something a bit smaller to speed up execution.

* The output size is 4K, indicating the width of each saved frame. The height will be half of that as the aspect ratio of the saved equirectangular images is by default 2x1.

  - The files are saved to a subdirectory in \*.tiff format. Any image format Processing supports is fine, but note that \*.tiff files are the fastest to save and take up the most space. Each 4K \*.tiff file will be 24 MB in size; 8K will be 96 MB. This will quickly hose your hard drive if you are not careful.
  
  - To protect users from tragedy, Camera3D now supports a frame limit. This will cause the sketch to exit after the specified number of frames. When the frame limit is used this Generator will check your available hard drive space and will refuse to proceed if enough space is not available.

* To improve performance, I skip displaying the composite frame to the sketch window. The sketch window will be black and the frame rate will be higher. I can observe progress viewing the reported stats.

Final Product
-------------

To produce a final, high quality resolution 360 video, I use this:

.. code-block:: java

  void setup() {
    size(1300, 650, P3D);

    camera3D = new Camera3D(this);
    camera3D.renderMonoscopic360()
      .setPanelXYSteps(1, 2)
      .setOutputSizeAndLocation(4096, "frames/sketch_#####.tiff")
      .skipDisplayingCompositeFrame();
    camera3D.setFrameLimit(30 * 60);

    camera3D.setBackgroundColor(color(255));
    camera3D.camera(0, 0, 0, 0, 0, -1, 0, -1, 0);
    camera3D.reportStats();
  }

Notes:
++++++

* Sketch height is now half the optimal value of 1300.

* The call to ``setPanelXYSteps(1, 2)`` will double up the panels used for each camera orientation, resulting in identical output to a sketch with size 1300x1300. This will double the number of calls to the ``draw()`` method and will therefore be slower but will result in optimal resolution.

Uploading Content
-----------------

Videos
++++++

The Processing Development Environment comes with a Movie Maker tool (Tools => Movie Maker) that you can use to create movie files. This tool can be used to assemble the saved frames into a movie file. I prefer to use the command line so I have more control over the output. The specific command I use is:

.. code-block:: shell

  $ ffmpeg -framerate 30 -i sketch_%05d.tiff -c:v libx264 -crf 12 -pix_fmt yuv444p output.mp4

The next step is to add meta-data to movie file. This step is required for Facebook and YouTube to recognize the video is a 360 video. The meta-data is helpful for Vimeo but there is a 360 video checkbox on in the Video Settings controls if you prefer.

There are utilities available for adding this metadata. Google provides one for Windows and Mac, available on `github <https://github.com/google/spatial-media/releases>`_. As I am a Linux user and Python aficionado I use the `Python script <https://github.com/google/spatial-media/tree/master/spatialmedia>`_:

.. code-block:: shell

  $ python2 ~/INSTALL/spatial-media/spatialmedia -i output.mp4 output_exif.mp4

Upload your video just like you would any other video file. With the meta-data it will be recognized as a 360 video file and will be processed accordingly. You will have to wait a bit for the video processing to complete. While you are waiting, write a helpful description that credits Processing and Camera3D for your video.

There are other meta-data tools available, such as the one offered by `RICOH <https://theta360.com/en/support/download/>`_, a manufacturer of a popular 360 camera.

Pictures
++++++++

To upload a single frame to Facebook, first convert the image format to \*.jpg. Then use `exiftool <http://www.sno.phy.queensu.ca/~phil/exiftool/exiftool_pod.html>`_ to add the appropriate metadata. Either of the below commands will work:

.. code-block:: shell

  $ exiftool -ProjectionType=equirectangular sketch_00001.jpg
  $ exiftool -Make="RICOH" -Model="RICOH THETA S" sketch_00001.jpg

Audio
+++++

Spatial Audio for 360 videos is a feature supported by Facebook, YouTube and Vimeo. I have not yet begun to explore this so I can't speak to that. If you do something cool with this, please let me know.

Blah
====

stuff

Resolution Settings
-------------------

The optimal settings for a 4K equirectangular video 

Width / pi

Resolution test utility

Generator Functions
-------------------

There are other functions available that you may find helpful. Check the Javadocs for more detailed information.

setPanelExplainPlanLocation
+++++++++++++++++++++++++++

The brightly colored images used to show how the Generator panels work found in this tutorial are called explain plans. These explain plans were valuable diagnostic aids when I was developing this tool. It can also be used by you to understand the arrangement of the panels used by the Generator as it renders your sketch.

.. code-block:: java

  ...
  camera3D.renderMonoscopic360()
    .setPanelExplainPlanLocation("frames/explain-plan.png")
    .setOutputSizeLocation(4096, "frames/sketch_#####.tiff");
  ...

setOutputWidthHeightAndLocation
+++++++++++++++++++++++++++++++

If you don't want the output to span the full 360 degrees of rotational range you can replace ``setOutputSizeAndLocation`` with ``setOutputWidthHeightAndLocation``. When the width:height ratio is less than 2:1 this will limit the side-to-side range of the output. When the ratio is greater than 2:1, this will shrink the output, starting from the poles. This will be useful for some platforms that allow for this but may require additional meta-data.

For example:

.. code-block:: java

  ...
  camera3D.renderMonoscopic360()
    .setPanelExplainPlanLocation("frames/explain-plan.png")
    .setOutputWidthHeightAndLocation(4096, 1024, "frames/sketch_#####.tiff");
  ...

Will result in this panel explain plan:

This code:

.. code-block:: java

  ...
  camera3D.renderMonoscopic360()
    .setPanelExplainPlanLocation("frames/explain-plan.png")
    .setOutputWidthHeightAndLocation(2048, 2048, "frames/sketch_#####.tiff");
  ...

Will result in this panel explain plan:

Any panels that aren't found in the explain plan will be discarded, improving performance.

setNearFarLimits
++++++++++++++++

Like all 3D renderings a bounding box is used to set limits for the vertices that are included in the rendered scene. This Generator makes clever use of the `frustum <https://www.processing.org/reference/frustum_.html>`_ function to efficiently render all possible viewing angles from the camera's location. That function has parameters for ``near`` and ``far``. By default those are set to 1 and 1000. You can override those settings like so:

.. code-block:: java

  ...
  camera3D.renderMonoscopic360().setNearFarLimits(1, 500);
  ...

setThreadCount
++++++++++++++

Assembling each frame of the equirectangular projection requires a lot of pixel-by-pixel memory copying. The Monoscopic 360 Video generator will perform that copying in parallel. By default the number of threads used is half the value returned by ``Runtime.getRuntime().availableProcessors()``. You may get a performance improvement by adjusting this setting.

.. code-block:: java

  ...
  camera3D.renderMonoscopic360().setThreadCount(2);
  ...

Helpful Links
=============

* General

  - `Wikipedia - 360 Degree Video <https://en.wikipedia.org/wiki/360-degree_video>`_

* Vimeo

  - `360 Video Home <https://join.vimeo.com/360/>`_

  - `360 Video blog posts <https://vimeo.com/blog/category/360>`_
  
  - `360 Video Channel <https://vimeo.com/channels/360vr>`_
  
  - `360 Video terminology <https://vimeo.com/blog/post/terms-you-need-to-know-to-create-360-video>`_
  
  - `360 Video uploading <https://help.vimeo.com/hc/en-us/articles/115001877167-Uploading-360-video>`_

* Facebook

  - `360 Video Education <https://facebook360.fb.com/learn/>`_
  
  - `Getting Started <https://www.facebook.com/facebookmedia/get-started/360>`_

  - `Facebook 360 Community <https://www.facebook.com/groups/facebook360community/>`_

  - `Facebook 360 <https://www.facebook.com/Facebook360/>`_

* Google (YouTube)

  - `360 Video Help <https://support.google.com/youtube/answer/6178631>`_ 

  - `Spatial Media Tools <https://github.com/google/spatial-media>`_

  - `360 Virtual Reality Channel <https://www.youtube.com/channel/UCzuqhhs6NWbgTzMuM09WKDQ>`_

Future Development
==================

Stereoscopic 360 Video, of course! Stay tuned...
