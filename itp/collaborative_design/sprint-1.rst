.. title: Sprint 1
.. slug: sprint_1
.. date: 2018-04-16 20:50:12 UTC-04:00
.. tags: itp, collaborative design
.. category:
.. link:
.. description: ITP class: Sprint 1
.. type: text

Our next assignment for Collaborative Design is to write code for a crude prototype. It doesn't have to look pretty; we just need to vet our ideas and build something to see if things work as we expect.

.. TEASER_END

In class we decomposed our story map to get product features. Below is a picture of our work.

.. image:: /images/itp/collaborative_design/week3/story_map_decomposition.jpg
  :width: 100%
  :align: center

After performing this decomposition, we were able to pick features for our first Agile sprint.

Our first sprint involved the `Large-scale Image Memorability <http://memorability.csail.mit.edu/>`_ model we found in our earlier research. We wanted to feed images into this model and have it evaluate which pictures are the most memorable.

To locate pictures we used Instagram. The idea is that after attending an event someone could use the tag for that event to scrape relevant pictures from Instagram and identify which pictures are the most worthwhile.

Our prototype is built in Python. It gets the Instagram photos associated with a tag and downloads them. Each is evaluated by the LaMem model. The most memorable photos are assembled in a style-less HTML page.

That's it. Basic functionality for us to test and experiment with.
