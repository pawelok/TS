# TASTYWORKS.dev QA Engineer Coding Challenge


Hello! Thank you for applying at TastyWorks!.  

In this exercise, you will test that a
Stock API is able to return a single stocks 
information and two stocks information

On a high-level, you'll do this by:

- Getting a list of a single stocks
- Getting an array for two stocks

The APIs you'll be using can be found in this:
[AAPL URL](https://sandbox.iexapis.com/stable/stock/aapl/quote?token=Tsk_456ccaccad6f455886f60ab0529a0345),
[TSLA and FB URL](https://sandbox.iexapis.com/stable/stock/market/batch?symbols=tsla,fb&types=quote,news,chart&range=1m&last=5&token=Tsk_456ccaccad6f455886f60ab0529a0345)

> __NOTE__: If you are unable to complete this exercise, __don't worry__!
> This is designed to be challenging and we expect to hire people who are unable to complete it.
> If you are unable to complete it, please send us your code

On a more detailed level, you should:

1. Unzip the provided sample project.
2. Make sure you have NodeJS 10 or later installed. (`node -v` lets you know your node version).
3. Run `npm i`.
4. Run `npm test` to make sure the test harness is working.
5. Write your tests in `./stocks.js`.
6. Lastly create a github account and push the changes to a repository. Please send the link to the repository to barry.viljoen@tastyworks.com and liudmila.dorzhieva@tastyworks.com 

While our test harness uses particular libraries (mocha, chai & axios), you change
these libraries and include others you are more comfortable with.