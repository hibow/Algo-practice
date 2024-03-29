/**
 * Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
small: 7 1 
largest: 1 5 6
(but not 7)
difference: 6-1

Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * 
 * 
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let lowest = prices[0];
  let maxPro = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowest) {
      lowest = prices[i];
    } else if (prices[i] - lowest > maxPro) {
      maxPro = prices[i] - lowest;
    }
  }
  return maxPro;
};
