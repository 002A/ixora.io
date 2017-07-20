.. title: Beyond the Mirror World, Surveillance and Capture
.. slug: beyond-the-mirror-world-surveillance-and-capture
.. date: 2017-06-13 08:43:04 UTC-04:00
.. tags: itp
.. category: 
.. link: 
.. description: Review of Beyond the Mirror World & Surveillance and Capture
.. type: text

Beyond the Mirror World & Surveillance and Capture
--------------------------------------------------

Philip Agre is a former professor of information studies at UCLA. He wrote extensively about modern technology and privacy. His work `Beyond the Mirror World <http://polaris.gseis.ucla.edu/pagre/mirror.html>`_ presents a discussion of data collection and society’s privacy concerns.
 
Agre defines the mirror world as the world of data. Data is collected from the real world and stored in a database designed by a software engineer. The database contains a representation of the real world, storing characteristics determined by the designer. He points out that the distinction between data objects and the real-life things they represent is being blurred.
 
This mirror world constructed in a computer can be explored, possibly without the consent of the human beings associated with the being data collected. New strategies for protecting privacy must be developed. Keeping personally identifying information out of databases is critical. Pseudoidentifiers can be used instead, allowing businesses to function and privacy to be protected.
 
.. TEASER_END

In `Surveillance and Capture <http://asounder.org/resources/agre_surveillance.pdf>`_, Agre presents a related discussion about privacy and information. He discusses two different cultural models for thinking about privacy. Neither is better than the other, and contemplating both allows us to bring important ideas into the forefront.
 
The more commonly discussed Surveillance model relates to surveillance like that of the Panopticon, as described by Foucault. The alternative Capture model focuses on how our activities are restructured to be tracked in real-time by computers, with data stored in intentionally designed data models. New technologies exist to capture data more thoroughly than before, making the possibility of a total collapse of privacy a very real and grave concern.
 
Agre’s analysis of digital privacy protections was written 20 years ago and seems naive to me today. Anonymizing data is not nearly enough to protect the privacy of individuals. `Data re-identification <https://en.wikipedia.org/wiki/Data_Re-Identification>`_ is a real thing. There are examples of serious privacy breaches, such as the `AOL search leak <https://en.wikipedia.org/wiki/AOL_search_data_leak>`_ in 2006. Organizations responsible for data collection need to be aware of these possibilities and protect the security of their databases.

Midterm Project
---------------

For my `midterm project <http://apps.ixora.io/drawings>`_ I successfully built an online tool for better exploring Google's Quick, Draw! `dataset <https://github.com/googlecreativelab/quickdraw-dataset>`_.

The tool works well but I will add more features for my final project. I like the scrolling feature you see on Google's `page <https://quickdraw.withgoogle.com/data/cookie>`_ that adds new drawings as you scroll down. I would like to implement something similar to that for my page as well. That functionality can be implemented with AJAX, which I am already using, but I believe I need additional functionality on the server to employ streaming database cursors and sessions. There is also some "inappropriate content" that needs to be filtered out, so I should provide users the ability to flag drawings. A "like" button might be useful as well.

I like this project and this dataset. After the class is over I would like to move it to the Google Cloud Platform to use their application server and NoSQL database. I also will attempt to use data science techniques to quantitatively evaluate the country by country differences in how drawings are represented. It seems to me that in general the intra-country differences are larger than the inter-country differences but there are probably a few categories where I would find something interesting.
