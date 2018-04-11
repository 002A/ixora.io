.. title: Feedback Collective Review
.. slug: feedback-collective-review
.. date: 2018-04-11 10:00:03 UTC-04:00
.. tags: itp, project development studio
.. category:
.. link:
.. description: ITP class: Stable Style Transfer
.. type: text

Today I am meeting with ITP's Feedback Collective to discuss this project. I'm going to use this blog post to present what my project is about so this post will provide a review of what I've accomplished.

Overview
========

The basic idea is to take Google Street View photos and stylize them to make them more visually appealing. Although the Google Street View tool is an amazing application the photos taken can be fairly dull looking. `Google is working to address this <https://www.cnbc.com/2017/07/13/google-a-i-makes-pro-level-photos-from-street-view-panoramas.html>`_ but they are aiming for a high degree of realism. My goal is to take a much more artistic approach.

.. TEASER_END

To accomplish this I first use the Google Street View API to download images from various locations. The images are then assembled into a proper sequence to make a video. Then I use a Neural Style Transfer to make the images look like a painting.

Here's what I've accomplished so far:

.. youtube:: iLW-8Qp_APc
    :width: 800
    :height: 400
    :align: center

Google Street View Crawler
==========================

The image acquisition is done using the Google Street View API. I wrote Python code that functions like a web crawler, moving from one location to another and downloading images for all possible directions. I was able to overcome the camera tilt issues and download images that can be stitched together properly.

For the above video I queried images from the highway US 12 in Idaho. I am not limited to linear sequences though.

Data Management
===============

The `Google Street View API <https://developers.google.com/maps/documentation/streetview/intro>`_ allows 25,000 API requests per day so I am acquiring a lot of images quickly. This needs to be organized in a sensible and accessible fashion. I put a lot of work into figuring out how to best do this.

Ultimately I created a convenient user interface using Python and matplotlib. I can visualize the graph of locations I have data for.

For example, here is a graph of the data for the Brooklyn Botanic Garden.

.. image:: /images/itp/project_development_studio/feedback_collective/brooklyn_botanic_garden.png
  :width: 50%
  :align: center

I can interact with the graph to perform activities like view the panoramas or construct paths.

Image Stabilization
===================

This past week I completed the image stabilization code to smooth out the animations. I came up with a clever approach that generalizes properly to 360 video. Over the weekend I re-did the previous style transfer job to see the improvement and make the video shown above.

Short Term Tasks and Questions
==============================

My most important next step is to write my own neural network code to do the style transferring. I need code that fits into my workflow.

Once I have that working I will write something to do style transfers for 360 video.

.. youtube:: H0WtqWAacfg
    :width: 800
    :height: 400
    :align: center

This won't be easy.

I am going to make something that I will submit to the Spring Show. I'd like some ideas for how to use these tools to best making something that is engaging and visually appealing.

Long Term Steps and Questions
=============================

I am going to keep working on this after the class is over. This project has way more potential than what I could ever accomplish during one semester.

The first question revolves around non-linear sequences of images. What other ways can I use these tools and this data if I am not limited to sequential animations?

I'm also not limited to neural style transfers or stylizations of any kind. What other directions can I explore?
