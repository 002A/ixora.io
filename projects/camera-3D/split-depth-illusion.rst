.. title: Split Depth Illusion
.. slug: split-depth-illusion
.. date: 2015-11-14 18:08:18 UTC-05:00
.. tags: processing, art
.. category: 
.. link: 
.. description: Processing - Camera3D library - Split Depth Illusions
.. type: text

Split Depth Animations are inspired by Split Depth GIFs, such as this one:

.. image:: /images/camera3D/split_depth_illusion/captain_america.gif
   :align: center

The white bars serve as a occlusion plane, giving the illusion of depth. Your brain will interpret objects that are behind the bars as farther away. Objects in front of the bars, or objects that occlude the bars, will seem closer.

Camera3D can use the same principles to make objects in your sketch seem to come out of the screen. In this example, we will animate some cubes moving in a spiral pattern. Consider this image:

.. image:: /images/camera3D/split_depth_illusion/spiralsplitdepth-behind-component.png
   :align: center
   
Now re-render that with the scene cut in half, depth-wise. What Camera3D is actually doing here is using the `frustum <https://www.processing.org/reference/frustum_.html>`_ function to clip objects that are far away from the camera. It is also using the `background <https://www.processing.org/reference/background_.html>`_ function to make the background white. Notice that the more distant cubes are now gone.
   
.. image:: /images/camera3D/split_depth_illusion/spiralsplitdepth-front-component.png
   :align: center

From that image, apply a mask to copy out pixels for where the occlusion plane will be. Objects that are in front of the plane will still be visible.
   
.. image:: /images/camera3D/split_depth_illusion/spiralsplitdepth-front-component-modified.png
   :align: center
   
From the first image, apply the inverse mask:
    
.. image:: /images/camera3D/split_depth_illusion/spiralsplitdepth-behind-component-modified.png
   :align: center

Adding the two together, yielding a picture identical to the first but with an occlusion plane. No shadows are cast onto the white occlusion plane, just like split depth GIFs.

.. image:: /images/camera3D/split_depth_illusion/spiralsplitdepth-composite.png
   :align: center

This works because of a clever use of the frustum function.

Here's what the animated sketch looks like:

.. vimeo:: 145787362
  :height: 500
  :width: 500

Neat! 3D effects without the glasses.