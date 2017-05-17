.. title: Basic Tutorial
.. slug: tutorial
.. date: 2015-11-04 14:50:50 UTC-05:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text

Here is a simple rotating box sketch using Camera3D.

First, import the library and create a variable for Camera3D:

.. code-block:: java

  import camera3D.Camera3D;

  Camera3D camera3D;

Now create a PGraphics object and some floats. We'll need these for our sketch.
  
.. code-block:: java
  
  PGraphics label;

  float rotX = 0; 
  float rotY = 0;
  float rotZ = 0;

Next, the setup method. Notice in the size method I select *P3D* as the renderer. This is necessary.

Create an instance of Camera3D and tell it what color the background should be. The default color is white. In this example we use *color(192)*, making the background a light gray.

Then use the default anaglyph renderer and configure some options. We are setting the divergence, or the gap between the left and right images, to 1 degree. This is the angle between the camera's target location and the left and right camera positions. Typical values are small positive numbers.

All default camera settings (position, target, perspective, etc) are identical to the regular Processing_ defaults. 

.. code-block:: java

  void setup() {
    size(500, 500, P3D);
    camera3D = new Camera3D(this);
    camera3D.setBackgroundColor(color(192));
    camera3D.renderDefaultAnaglyph().setDivergence(1);

Finish the setup method by adding some text to the *label* PGraphics object.

.. code-block:: java

    label = createGraphics(140, 50);
    label.beginDraw();
    label.textAlign(LEFT, TOP);
    label.fill(0);
    label.textSize(16);
    label.text("Rotating Cube", 0, 0);
    label.endDraw();
  }

Now, something new: an optional *preDraw* method.

If this method is included in your sketch, it will be called **ONCE** before any calls to the *draw* method. Any code that you want to be executed one single time per frame should be located here.

In this case, this function will update the rotation of our box. **IMPORTANT:** code that updates state, such as the position of objects, needs to be moved to this *preDraw* method. If you are adding Camera3D functionality to an existing sketch, you may have some work to do separating out this aspect of your code.

.. code-block:: java

  void preDraw() {
    rotX += 0.5;
    rotY += 0.1;
    rotZ += 0.3;
  }
  
And the draw method.

This looks like an ordinary *draw* method, which it is. Only difference is, in this sketch, the *draw* method will be executed **TWICE**. Processing_ will call the *draw* method once, but Camera3D will call the *draw* method a second time to re-render the scene with different camera settings.

**IMPORTANT:** If the code in the *preDraw* method was in the *draw* method, the cube would continue rotating between the first and second *draw* executions, harming the results. That's why a *preDraw* method is needed.

.. code-block:: java

  void draw() {
    strokeWeight(8);
    stroke(0);
    fill(255, 255, 255);
    translate(width / 2, height / 2, -400);
    rotateX(radians(rotX));
    rotateY(radians(rotY));
    rotateZ(radians(rotZ));
    box(250);
  }

Another optional method: *postDraw*.
  
If this method is included in your sketch, it will be called **ONCE** after all calls to the *draw* method. This is useful for post-generator drawing. Here we add the label to the corner.

.. code-block:: java

  void postDraw() {
    copy(label, 0, 0, label.width, label.height, width - label.width, 
         height - label.height, label.width, label.height);
  }


Both the *preDraw* and *postDraw* methods are optional. Camera3D automatically detects if your sketch has these methods and will call them at the correct times if they are present. They are useful for coping with the multiple calls to the *draw* method, and they are necessary for some libraries like ControlP5 to work correctly in a Camera3D sketch.

Here is an overview of the basic steps that take place for every frame in this sketch:

#. Call *preDraw* method.
#. Update Processing camera position to draw the right image.
#. Call *draw* method.
#. Copy the current rendered image, called a component frame, into a temporary buffer.
#. Erase everything using the selected background color.
#. Update Processing camera position to draw the left image.
#. Call *draw* method again.
#. Copy the new component frame into a second temporary buffer.
#. Send component frames to the Generator to create the composite frame.
#. Replace the current rendered image with the Generator's composite frame output.
#. Call *postDraw* method, rendering the final output.

That's really all there is too it. I designed this to be as simple as possible. There is a lot of stuff happening behind the scenes, but you don't have to worry about that. The main thing I want you to remember is that the draw method is called multiple times. Move code that should only execute once to the *preDraw* method. That, plus a couple of extra lines in the *setup* method, and you've transformed your sketch into an anaglyph animation.

Now have a look at the result. Put on your :doc:`glasses` and be amazed!

.. vimeo:: 144716554
  :height: 500
  :width: 500

.. _Processing: http://processing.org/
