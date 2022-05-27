function maxProfit(prices: number[]): number {
  //time O(n) space O(1)
  let maxN: number = 0
  let minN = Number.MAX_VALUE
  let prof: number = 0
  for (let i= 0; i < prices.length; i++ ){
    if (prices[i] < minN){
      minN = prices[i]
      maxN = prices[i]
    } else if (prices[i] > maxN) {
      maxN = prices[i]
    }
    prof = Math.max(maxN - minN, prof)
  }
  return prof
};