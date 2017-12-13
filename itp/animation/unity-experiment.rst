.. title: Unity Experiment
.. slug: unity-experiment
.. date: 2017-12-12 23:14:54 UTC-04:00
.. tags: itp, animation
.. category:
.. link:
.. description: ITP: Unity Experiment
.. type: text

For our last Animation assignment we created a simple game or experiment in Unity. I created a maze game.

When I was learning how to program a computer many years ago I loved to make mazes. Using our Commodore 64 computer I made games involving mazes and simple characters that would find their way through the mazes. I loved those games. The character moving through the maze would literally be a single character moving up, down, left, and right through a 2D maze. I thought it would be fitting if my first Unity game was also a maze game, but with more advanced graphics.

.. TEASER_END

Some screenshots are below. My game is programmed to follow the character through the maze from behind. I did it this way because I wanted the turn commands to be from the perspective of the character, and therefore the camera. I didn't want them be from the perspective of the global coordinates.

.. slides::

  /images/itp/animation/maze_1.png
  /images/itp/animation/maze_2.png
  /images/itp/animation/maze_3.png
  /images/itp/animation/maze_4.png
  /images/itp/animation/maze_5.png

The character is the default "Ethan" character in the Unity standard assets. I tried creating other characters using Adobe's Fuse but I thought they looked pretty bad from behind. They seemed to have flawed meshes. In any case it doesn't matter because tomorrow we will create 3D scans of ourselves that we can use in Unity. The first thing I am going to do is add the 3D scan of myself to this game.

Programming the camera to behave the way it does was pretty tricky. I used Unity's standard asset ``ThirdPersonUserControl`` Prefab, which comes with animations and C# code to control the character. Then I parented the camera to the character. That sounds simple enough but I ran into problems when I tried to make the character walk in reverse. When I do that the character will turn around. When the character turns around, the camera flips to the other side because it will always be behind the character. As soon as the camera flips, the instruction to turn around becomes an instruction to turn again, facing the original direction. This repeats again and again with the camera flipping back and forth.

I fixed it by changing the Prefab animation and code. First, I added walking in reverse to the Animator's 2D blend tree. Then I changed this line in ``ThirdPersonCharacter.cs``:

.. code::

  // m_TurnAmount = Mathf.Atan2(move.x, move.z);
  m_TurnAmount = Mathf.Atan2(move.x, Mathf.Abs(move.z));

This gives the character the ability to back up without turning around and keeps the camera from flipping to the other side.

It took a while to figure that out. There are probably other solutions, but creating a good character controller from scratch is pretty difficult. Starting with a standard one saved me a lot of time.
