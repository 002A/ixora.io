.. title: Data Progress
.. slug: data-progress
.. date: 2018-02-13 23:58:58 UTC-05:00
.. tags: itp, project development studio
.. category:
.. link:
.. description: ITP class: Data Progress
.. type: text

This week I was busy writing Python code to download and store data and JPG files retrieved from Google's Streetview API. I am happy with my progress. I can reliably download data and images from Google without any problems. My code begins with the latitude and longitude of a start location and will download all of the available Streetview data within a specified radius linked to the start location. It will crawl the dataset from one location to another, testing if a new location is within the given radius, querying neighboring locations, and downloading the panorama images.

Next I need to make sure I am storing the data in an accessible way. I expect to download many images over time and want to organize it in such a way that I don't have to download anything a second time. I am using a SQLite database to store metadata on the downloaded data. This will keep everything organized and retrievable. Once I have this done I will let it start downloading data for multiple locations as I begin stockpiling data.

I am on track to meet next week's milestone of having something ready to feed into a Neural Network for a style transfer.
