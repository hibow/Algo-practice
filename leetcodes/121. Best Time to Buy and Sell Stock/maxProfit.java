class Solution {
  public int maxProfit(int[] prices) {
    //input: array
    //output: integer
    /**
     * one pass:
     * iterate the array,
     *    get the min value,
     *    if not min, get the max(max, current - minvalue)
     * time O(n) space O(1)
     */
    int max = 0;
    int min = prices[0];
    for (int i = 1; i < prices.length; i++) {
      if (min > prices[i]) {
        min = prices[i];
      } else {
        max = Math.max(max, prices[i] - min);
      }
    }
    return max;
  }
}