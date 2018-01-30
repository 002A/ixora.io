.. title: Plan
.. slug: plan
.. date: 2018-01-30 15:21:57 UTC-05:00
.. tags: itp, project development studio
.. category:
.. link:
.. description: ITP class: Project Development Studio Plan
.. type: text

Dream
-----

My conceptual motivation for this project is to create visually compelling animations using large amounts of spatial data.

Data by itself is formless. Our present technology community collects vast amounts of data. Some of that data is a record of the physical space we humans live in. My dream is to access that data and reimagine it in a way that maintains the integrity of the data and inspires viewers to appreciate the beauty of the originating physical space.

.. TEASER_END

Vision
------

My vision for the specific project I will work on is to create 3D models and renderings of publicly available spatial datasets and enhance them using cutting-edge neural networks. I will create flexible and reusable tools so I can execute my code on multiple datasets with multiple visual interpretations. This will allow me to experiment and learn to create compelling animations that have artistic merit in addition to being worthy technical achievements.

Goal
----

I am going to access publicly available LiDAR data and Google Streetview data (which includes depth information) and will make 3D models using appropriate tools. I will render the 3D models and will enhance the output using style transfers. I intend to write code for much of the project myself (in particular, the style transfers) but will use software packages as needed and where appropriate.

I am inspired by the work of `Julius Horsthuis <http://www.julius-horsthuis.com/>`_, an artist who uses VFX and style transfers to create beautiful renderings of 3D fractals.

Plan
----
A critical success factor for this plan is my ability to create usable 3D models with data. The data I will be working with may be messy, erroneous, or otherwise hard to work with. It’s possible that I struggle with the data and spend too much time trying to get it to work.

I have more confidence in my ability to work with LiDAR data given the existence of Python libraries for reading the data. Google Streetview data will not be organized in the way I will need it to be so I will need to spend some time structuring the data in Python. I will need to evaluate both avenues quickly to determine if either are feasible.

The raw data for both will be 3D point-clouds. This is essentially a discrete set of points in 3D space and is not the same as a proper 3D mesh. I expect I will need to convert the point cloud data to a 3D mesh. Happily there are some software packages like MeshLab and Autodesk’s ReCap that might help. I also found some research papers detailing algorithms for converting point clouds to meshes, if I have to code something myself.

Rendering point-clouds or meshes can be done with a 3D modeler. I am considering Blender, VisPy, Open Frameworks, and Processing. A game engine might also be a good choice. The best tool will depend on the performance of the tool and how well it works with the data.

There are already many tools and research papers focused on neural networks and style transfers. I have experimented with these in the past and have coded neural networks before. I am going to read the papers and learn more about how they work. This is probably the most fun part of the project because I will be experimenting with the visuals and trying to find something that is visually compelling. This might take a lot of time and experimentation because I want to create something that has artistic merit in addition to the technical achievement.

I expect there to be unforeseen difficulties with this project. It is in my best interest to discover those problems as soon as possible. Therefore, I’d like to quickly make a crude prototype that demonstrates the flow of data from beginning to end. That will help validate my idea and show me which aspect of the project needs the most work.

With these thoughts in mind, I present my plan for our class.

* February 7 - explore Google Streetview and LiDAR data options and have code to put at least one of them into a manageable, workable form
* February 21 - move data into a modeling and rendering environment and produce a suitable output for a neural network style transfer
* February 28 - create minimal prototype of final result to evaluate problems and next steps
* March 21 - explore research papers studying neural networks applied to computer graphics; integrate ideas into project (mid term full class feedback session)
* April 11 - streamline data pipeline to explore multiple datasets and styles, develop intuition for using tools efficiently and artistically
* May 2 -  produce multiple compelling spatial data visualizations (final presentation)
