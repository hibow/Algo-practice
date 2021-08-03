class Solution {
  public int rob(int[] nums) {
    //DP-> time O(n), space O(n)-> O(1)
    //input: number array
    //output: integer
    //edge case: can't be adj. numbers but it is not odd or even order..
    //iterate over the nums array
    //use DP[i] = Math.max(DP[i-2] + num[i], DP[i-1]), just make sure they won't add up adj numbers and always get the max sum so far
    //return the DP[i]
    if (nums.length == 0) return 0;
    if (nums.length ==1) return nums[0];
    int pre1 = 0;
    int pre2 = 0;
    for (int i = 0; i< nums.length; i++) {
      int cur = Math.max(pre2 + nums[i], pre1);
      pre2 = pre1;
      pre1 = cur;
    }
    return pre1;
  }
}