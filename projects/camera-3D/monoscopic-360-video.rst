.. title: Monoscopic 360 Video
.. slug: monoscopic-360-video
.. date: 2017-05-13 08:13:09 UTC-04:00
.. tags: processing
.. category: 
.. link: 
.. description: 
.. type: text

This Generator creates frames suitable display in a Monoscopic 360 video or picture viewer. It constructs an equirectangular projection of every possible angle emanating from the camera's location. The intended purpose is for you to save each frame and make a movie out of it to play in an online 360 video player.

Here is an example:

.. vimeo:: 216711676
  :height: 300
  :width: 600

If you play the video and look around with your mouse or keyboard cursor keys, you will see the camera is in the center of a column of multi-colored rotating cubes. This video is a pre-recorded Processing sketch that has been uploaded to Vimeo. The frames of that video all look like this:

.. image:: /images/camera3D/monoscopic_360/rotatingcubes360-final.png
  :width: 600

This is distorted, much like the equirectangular world maps we've all seen in school. Visual information for every possible angle is encoded in the image. A 360 video player is programmed to extract that visual information  to construct a new image for all viewing angles in real time. Sometimes 360 video is called VR; this is somewhat misleading as VR usually provides richer user interaction beyond simply changing viewing angles. Nevertheless, 360 video has a lot to offer, and happily the Camera3D library can produce content that works in 360 video players.

To use this effectively you must first understand how it works. Imagine you are in the center of a cube where each face of the cube has a unique color. If every viewing angle from that center location was mapped to an equirectangular projection, it might look like this:

.. image:: /images/camera3D/monoscopic_360/explain-plan.png
  :width: 600

This image illustrates how this Generator works. Camera3D will point Processing's camera in one of six different orientations, each corresponding to one face of the cube. The camera's field of view or perspective will be exactly 90 degrees horizontally and vertically, lining up exactly with one cube face. This ensures that all camera angles are covered with no duplication.

When the camera is pointed up, it will render an image like this:

.. image:: /images/camera3D/monoscopic_360/rotatingcubes360-above-0-component.png
  :width: 300
  :height: 300

That will be added to the equirectangular projection like this:

.. image:: /images/camera3D/monoscopic_360/rotatingcubes360-above-0-component-modified.png
  :width: 600
  :height: 300

Similarly, when the camera is pointed forward it will render an image like this:

.. image:: /images/camera3D/monoscopic_360/rotatingcubes360-front-0-component.png
  :width: 300
  :height: 300

That will be added to the equirectangular projection like this:

.. image:: /images/camera3D/monoscopic_360/rotatingcubes360-front-0-component-modified.png
  :width: 600
  :height: 300

And so on. This will be repeated for all six camera orientations, creating the finished image.

The necessary code to create these equirectangular projections is simple and is similar to the other `Camera3D Generators <link://slug/tutorial>`_. Create a ``Camera3D`` instance, set the background color, and then select the Monoscopic 360 Generator.

In the below example we are also moving the camera to the origin. That isn't necessary but for these kinds of sketches it does make them easier to code.

.. code-block:: java

  void setup() {
    size(500, 500, P3D);
    camera3D = new Camera3D(this);
    camera3D.setBackgroundColor(color(255));
    camera3D.renderMonoscopic360();

    // move camera to origin
    camera3D.camera(0, 0, 0, 0, 0, -1, 0, -1, 0);
  }

Also consider that this Generator will make a minimum of 6 calls to your ``draw()`` method, making performance even more important.

That's the basic idea, but most likely you will want to also save the frames and upload them to a website that supports 360 video like Facebook, Youtube or Vimeo. Refer to :doc:`monoscopic-360-best-practices` for more information on how to do that and best practices for achieving good results.
