.. title: Regular Renderer
.. slug: regular-renderer
.. date: 2015-11-14 13:59:37 UTC-05:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text

Sometimes it is convenient to "turn off" Camera3D and run the sketch without any special effects. It would be somewhat sloppy coding to comment out the lines of code involving Camera3D to deactivate it. A more convenient approach is a Camera3D Generator that doesn't do anything special. This is the purpose of the Regular Renderer Generator.

After creating the Camera3D instance, you can tell it what kind of Generator you want to use. Here, we select the Regular Renderer Generator using the *regularRenderer* method. This is also the default Generator that is selected if your sketch does not explicitly tell it to use something else.

.. code-block:: java

  void setup() {
    size(300, 300, P3D);
    camera3D = new Camera3D(this);
    camera3D.renderRegular();
    camera3D.setBackgroundColor(255);
    ...

The complete example is below. Many of the Generator examples are based on this rotating box sketch.

.. code-block:: java

  import camera3D.Camera3D;

  PGraphics label;
  Camera3D camera3D;

  float rot = 75;
  float rotX = rot * 0.5;
  float rotY = rot * 0.1;
  float rotZ = rot * 0.3;

  void setup() {
    size(300, 300, P3D);
    camera3D = new Camera3D(this);
    camera3D.renderRegular();
    camera3D.setBackgroundColor(255);

    label = createGraphics(120, 20);
    label.beginDraw();
    label.textAlign(LEFT, TOP);
    label.fill(0);
    label.textSize(12);
    label.text("Camera3D Example", 0, 0);
    label.endDraw();
  }

  void preDraw() {
    rot += 1;
    rotX = rot * 0.5;
    rotY = rot * 0.1;
    rotZ = rot * 0.3;
  }

  void draw() {
    strokeWeight(4);
    stroke(0);

    int boxSize = 90;
    int zDepth = -100;

    pushMatrix();
    fill(255, 0, 0);
    translate(width / 5, height / 5, zDepth);
    rotateX(radians(rotX));
    rotateY(radians(rotY));
    rotateZ(radians(rotZ));
    box(boxSize);
    popMatrix();

    pushMatrix();
    fill(0, 255, 0);
    translate(4 * width / 5, height / 5, zDepth);
    rotateX(radians(rotX));
    rotateY(radians(rotY));
    rotateZ(radians(rotZ));
    box(boxSize);
    popMatrix();

    pushMatrix();
    fill(0, 0, 255);
    translate(width / 5, 4 * height / 5, zDepth);
    rotateX(radians(rotX));
    rotateY(radians(rotY));
    rotateZ(radians(rotZ));
    box(boxSize);
    popMatrix();

    pushMatrix();
    fill(128, 128, 128);
    translate(4 * width / 5, 4 * height / 5, zDepth);
    rotateX(radians(rotX));
    rotateY(radians(rotY));
    rotateZ(radians(rotZ));
    box(boxSize);
    popMatrix();
  }

  void postDraw() {
    copy(label, 0, 0, label.width, label.height, width - label.width,
        height - label.height - 10, label.width, label.height);
  }

The result looks like this:

.. image:: /images/camera3D/regular_renderer/fourcubes-final.png
   :align: center
