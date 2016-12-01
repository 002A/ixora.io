.. title: IEM Market Maker
.. slug: iem-market-maker
.. date: 2016-11-24 11:33:13 UTC-05:00
.. tags:
.. category:
.. link:
.. description:
.. type: text

I wrote a computer program that can make money on its own by betting on the outcome of elections.

My computer program buys and sells special securities linked to the outcome of political elections. The real money securities are a part of the Iowa Electronic Markets (IEM), run by the business school at the University of Iowa. Securities linked to the Democratic and Republican candidates are worth $1 or $0 after the election depending on which candidate received the most votes. This market is called a *prediction market*, allowing traders to buy and sell securities based on their belief about the outcome of the election, leading to market prices that are a forecast of that outcome.

The computer knows nothing about politics or elections. Instead, it follows a mathematical model that decides when to buy and sell each security from observed price data. It is a 'market maker,' functioning very much like a bookie taking bets. The program makes thousands of bets, earning a profit of a few pennies each time. I have been doing this in every presidential election since 2004.

In 2004 my program was built in Excel/VBA and Perl and made a profit of only $11. Undeterred, I returned in 2008 with a new system built in Java that made a $550 profit from an initial investment of $150. In 2012 I made some technical improvements with Java and Scala, and in this past election I made $600 with a system rebuilt from scratch in Python. Profits are always donated to charity.

Several years ago I published a research paper in an academic journal explaining the details of my market maker and the results from trading in the 2008 election. That research paper is available on the `Algorithmic Finance`_ journal page. The paper is long and mathematical so I won't ask you to read all of it, but please take a moment to quickly skim through the pages. The abstract is available below.

  The Iowa Electronic Markets are small, real-money financial markets designed to aggregate information about future events. The market microstructure of these markets is studied and a market making model is developed to provide liquidity for one set of securities offered by this exchange. A computer program was created to employ the market making model and profit from the market’s inefficiencies. Using invested capital, the system traded 34% of the total market volume and achieved a Sharpe ratio of 9.9. This paper reveals the details of how this algorithmic trader worked to show how it functioned and the value it added to the Iowa Electronic Markets.

During my 10 or so years working in the finance industry, there isn't anything I have done that means as much to me as publishing this research paper.

For this past election I had to rebuild the computer program because the University of Iowa redesigned the website. The system works by logging into the website and scraping data from the pages so it is dependent on the website design. It imitates a human trader by sending identical web requests to buy and sell securities. I chose Python because I could quickly build a new system with it and it is great at these kinds of tasks. I ran the program on a Raspberry Pi.

The new Python system wasn't ready to go until a few weeks before the election but it was still more profitable than any previous election. Because of the unexpected outcome and the confusion associated with Clinton winning the popular vote but losing the electoral college, I made $350 on election day alone. I donated all of the profits to organizations that are now in need as a result of Trump's victory.

I keep donating the money to charity but know that acquiring knowledge on how to create a reliable system to do something like this is the more valuable achievement. Building a system that can reliably manage real money on its own and be robust to website crashes and unexpected events is a formidable task. In the future, I'd like to explore other automated systems that perform useful tasks according to a specific strategy. The next system I build will do micro-lending through the charity `Kiva <https://www.kiva.org/>`_, lending money to entrepreneurs in other countries.

.. _`Algorithmic Finance`: http://algorithmicfinance.org/1-2/pp157-181/
