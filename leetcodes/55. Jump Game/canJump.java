class Solution {
  public boolean canJump(int[] nums) {
    //DP: store DP value from nums.length - 1 to 0, return DP[0]
    /**
     * ex: 2 3 1 1 4
     *
     * ex: 3 2 1 0 4
     * DP  0 1 2 3 4
     *     if 0 , it will stop DP to move forward -> if (DP[i - 1] < i) return false -> DP[i - 1] is current max steps from idx 0
     * iterate over i = 1 to nums.length - 1
     *   if DP[i - 1] < i  return false
     *   DP[i] = max(i + nums[i], dp[i - 1]) compare the current idx + nums[i] with previous dp value
     *   if DP[i] >= nums.length - 1 (min step is 1 so it will go to the last elem) return true
     *
     * return DP[length - 2] >=length - 1 -> check if last value return true (from last statement)
     * time: O(n), space O(n)
     */
    int len = nums.length;
    if (len == 1) return true;
    int [] DP = new int[len];
    DP[0] = nums[0];
    for (int i = 1; i < len - 1; i ++) {
      if (DP[i - 1] < i) return false;
      DP[i] = Math.max(i + nums[i], DP[i - 1]);
      if (DP[i] >= len - 1) return true;
      //break the loop quicker once requirement is meet
    }
    return DP[len - 2] >= len - 1;

  }
}