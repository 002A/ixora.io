.. title: End of Class Presentation
.. slug: end-of-class-presentation
.. date: 2018-05-01 22:13:45 UTC-04:00
.. tags: itp, project development studio
.. category:
.. link:
.. description: ITP class: End of Class Presentation
.. type: text

The semester is over and I am giving my end of class presentation tomorrow. I decided I'm not going to call it my "final" presentation because this project is nowhere near over. I've built a great platform for working with Google Street View data but haven't done anything with it that demonstrates its potential. I'm going to continue working on this over the summer and beyond.

.. TEASER_END

Summary of Accomplishments
==========================

For the purpose of tomorrow's presentation I will first summarize my accomplishments:

* Crawled locations through the Google Street View API and organized the images and metadata in an accessible way
* Assembled the images into panoramas and sequences of images into stable animations
* Wrote my own Neural Style Transfer code based on the algorithm presented in the research paper `Artistic style transfer for videos <https://arxiv.org/abs/1604.08610>`_
* Built experimentation tools for me to efficiently explore the different parameters and settings of the algorithm
* Used the tools to experiment with style transfers and make a stylized animation

Experimentation Tools
=====================

It's too tedious to try out all the different permutations of algorithm settings and style image combinations. To help myself with this I wrote experimentation code that will run the code repeatedly with different options. I can start an experiment and come back a few hours later to examine and learn from the results.

For example, I wanted to test out some style images on an image from a Google Street View train ride in Switzerland. I had several images of Monet paintings and photos of Switzerland landscapes. I wanted to test 50-50 mixes of all possible permutations of pairs of images between the two categories to see what they look like. Here's the code I used to initiate that:

.. code:: python

  content_filename = '/tmp/swiss_alps_ruegna_tunnel_test.jpg'
  p = Params()
  p.job_max_iterations = 2000

  experiments.style_product_experiments('switzerland_monet_product_test',
                                        p, content_filename,
                                        'switzerland*', 'monet*')

That's it. Here's the image I started with:

.. image:: /images/itp/project_development_studio/final/swiss_alps_ruegna_tunnel_test.jpg
  :width: 100%
  :align: center

And the various outputs:

.. slides::
  /images/itp/project_development_studio/final/experiment_0.jpg
  /images/itp/project_development_studio/final/experiment_1.jpg
  /images/itp/project_development_studio/final/experiment_2.jpg
  /images/itp/project_development_studio/final/experiment_3.jpg
  /images/itp/project_development_studio/final/experiment_5.jpg
  /images/itp/project_development_studio/final/experiment_4.jpg
  /images/itp/project_development_studio/final/experiment_6.jpg
  /images/itp/project_development_studio/final/experiment_7.jpg
  /images/itp/project_development_studio/final/experiment_8.jpg

In addition, the experimentation code records all of the settings in a file so I can reproduce the results later.

.. code:: yaml

  input_filename: experiments/switzerland_monet_mix_test_20180429_221653/swiss_alps_ruegna_tunnel_test.jpg
  input_style_filenames: [experiments/switzerland_monet_mix_test_20180429_221653/switzerland_2.jpg,
    experiments/switzerland_monet_mix_test_20180429_221653/monet_impressions_of_a_river.jpg]
  input_style_weights: [0.5, 0.5]
  job_device: /gpu:0
  job_elapsed_time: 929
  job_max_iterations: 2000
  job_minimizer: lbfgs
  nn_content_layer_weights: [1.0]
  nn_content_layers: [conv4_2]
  nn_content_loss_function: 1
  nn_style_layer_weights: [0.2, 0.2, 0.2, 0.2, 0.2]
  nn_style_layers: [relu1_1, relu2_1, relu3_1, relu4_1, relu5_1]
  weight_content: 5.0
  weight_style: 10000.0
  weight_tv: 0.001

The experiments aren't limited to style choices. I can also adjust the algorithm parameters. By playing around with this I can gain intuition into how the algorithm works and learn to make better decisions about how to get the results I want.

Stylized Videos
===============

I have a two final products to present. First, the previously shown animation from US-12 in Idaho.

.. youtube:: iLW-8Qp_APc
    :width: 1000
    :height: 500
    :align: center

I like this a lot. It was stylized with someone else's `code <https://github.com/cysmith/neural-style-tf>`_ a few weeks ago. I stylized some of the raw images with my code and verified it gives the exact same results.

I could have run my code on the same raw images but that would generate an identical animation. I wanted to have something new to present so I picked an image sequence from the location I experimented with above. This is what I started with:

.. youtube:: gf7Ynt9fLF4
    :width: 1000
    :height: 500
    :align: center

I think I got lucky with the US-12 sequence of images. Not only was the data clean but the style transfer algorithm gave good results on the first try. Perhaps the early success led me to believe that this was easy to do. Other datasets were messy or broken in unexpected ways. Some of this data won't be usable in the way I want it to be.

My first attempt at stylizing it went very badly... I killed it after few hours when I realized it was going to be a disaster.

.. youtube:: A2K_tW6Kc8c
    :width: 1000
    :height: 500
    :align: center

I guessed that my customized style layer weight settings were causing the strange results so I changed them back to the default.

.. youtube:: oPIN6culKMc
    :width: 1000
    :height: 500
    :align: center

This is better but I'm still not pleased with the results. That's OK though, because I can try again and again till I get something I like. I have some ideas about why this didn't work and what I need to do differently. In any case experimenting with this is easy using the tools I've built.

Next Steps
==========

My immediate next step is to do more experimentation with the algorithm. I'd like to gain a better intuition of how it works and how the settings influence the end result. I'll probably read the research paper associated with the VGG convolutional network employed by the style transfer algorithm to learn more about it. I want to be able to use my time and computing resources efficiently.

After that I need to improve the resolution of these animations. The above videos are 1000x500 but most high quality videos are much higher resolution than that. There are algorithms out there that use neural networks to improve the resolution of an image. I can use one of them on each frame to add detail and make it more visually appealing. Some of those algorithms are slow but they would be much faster than trying to run my code on 4K images.

I also very much want to apply the style transfer algorithm to 360 videos. I know it is possible and I want to have that ready by the Spring Show. It is going to require a lot of work for me to pull it off though. If I don't have it ready by then I will continue working on it over the summer.

Future Goals
============

What I've accomplished so far exists solely in the technical realm and does not have real artistic value. Once everything becomes more stable and routine to use I'd like to explore using this to achieve something more notable than an interesting programming accomplishment. The specific artistic direction I have in mind is to address the dichotomy of the world and pair the beautiful locations Google Street View `highlights <https://www.google.com/streetview/>`_ on their website with `places that people might not want to think about <https://www.google.com/maps/@4.6009852,-74.0837091,3a,75y,8.75h,76.94t/data=!3m6!1e1!3m4!1sDgRK-F7csYnxL8IWHCwqUg!2e0!7i13312!8i6656>`_. This duality of the world is a major theme in the work of `William Kentridge <https://en.wikipedia.org/wiki/William_Kentridge>`_, one of my favorite artists. It would be interesting to apply his artistic style of charcoal animations with a style transfer.

I also want to go in directions that are unrelated to style transfers. Specifically, working with compositions. I have a bunch of ideas around this but it's too hard to explain it with words. You'll just have to wait and see.

In any case this has been a lot of fun and I'm excited to keep working on it over the summer and beyond. I've learned a lot, and I'm going to keep learning.
