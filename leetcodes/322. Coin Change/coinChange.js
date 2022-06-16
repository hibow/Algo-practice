/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//can't use DP = new Array(coins.length) since it always counts the max of the largest coins so it is easy to get -1
var coinChange = function(coins, amount) {
  if (amount === 0) return 0
  coins.sort((a,b)=> a-b)
  //time O(nlogn)
  let n = coins.length;
  let DP = new Array(amount+1).fill(Infinity)
  DP[0] = 0
  //space O(amount)
  for (let i = 0; i <= amount ; i++) {
    coins.forEach(coin => {
      if (coin <= i) {
        DP[i] = Math.min(DP[i], DP[i - coin] + 1)
      }
    });
  }
  //time O(amount * n)
  return DP[amount] === Infinity ? -1 : DP[amount]
  //bottom up from 0 to amount
};
