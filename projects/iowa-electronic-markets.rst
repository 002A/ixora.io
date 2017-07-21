.. title: Algorithmic Trading in the Iowa Electronic Markets
.. slug: iowa-electronic-markets
.. date: 2015-04-20 00:30:45 UTC-04:00
.. tags: iem, finance
.. category: 
.. link: 
.. description: Algorithmic Trading in the Iowa Electronic Markets - Market Maker application
.. type: text

During my 10 or so years working in the finance industry, there isn't anything I have done that means as much to me as publishing this research paper.

I built an electronic market maker to trade securities in the Iowa Electronic Markets during the 2008 election. This market offered securities linked to the Democratic and Republican candidates. The securities had real money dollar values of either $1 or $0 after the election, based on which candidate received the most votes. My computer program functioned much like a bookie, taking the other side of human trader's bets on the election while making a small profit at the same time.

The project started with $150 and finished with $700. Everything was donated to charity after the election.

The paper and interactive content are available on the `Algorithmic Finance`_ journal page. The abstract is below. If you prefer slides, you can view a `presentation </presentations/Algorithmic_Trading_in_IEM.slides.html>`__ I made for a group of researchers at Microsoft Research Labs.

Abstract
  The Iowa Electronic Markets are small, real-money financial markets designed to aggregate information about future events. The market microstructure of these markets is studied and a market making model is developed to provide liquidity for one set of securities offered by this exchange. A computer program was created to employ the market making model and profit from the market’s inefficiencies. Using invested capital, the system traded 34% of the total market volume and achieved a Sharpe ratio of 9.9. This paper reveals the details of how this algorithmic trader worked to show how it functioned and the value it added to the Iowa Electronic Markets.

.. _`Algorithmic Finance`: http://algorithmicfinance.org/1-2/pp157-181/

I've been involved with this since 2004. Back then my program was built in Excel/VBA and Perl and made a profit of only $11. In 2012 I made some technical improvements with Java and Scala, and in this past election I made $600 with a system rebuilt from scratch in Python running on a Raspberry Pi. As always, profits are donated to charity.
