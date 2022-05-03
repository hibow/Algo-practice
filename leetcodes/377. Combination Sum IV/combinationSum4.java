class Solution {
  public int combinationSum4(int[] nums, int target) {
    //DP -> iterate over the 1 to target
      //iterate over num in nums
       //DP(target) = DP(target) + DP(target - num)
    //return DP(target)
    //time O(n*m) space O(n)
    int[] DP = new int[target + 1];
    DP[0] = 1;
    for (int i = 1; i <= target ; i ++){
      for(int j = 0; j <= nums.length; j ++) {
        if (nums[j] <= i) {
          DP[i] += DP[i - nums[j]];
        }
      }
    }
    return DP[target];
  }
}
