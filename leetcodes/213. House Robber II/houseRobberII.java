class Solution {
  private int rob2(int[] nums, int start, int end){
    int pre1 = 0;
    int pre2 = 0;
    for (int i = start; i < end+ 1; i++) {
      int cur = Math.max(pre2 + nums[i], pre1);
      pre2 = pre1;
      pre1 = cur;
    }
    return pre1;
  }
  public int rob(int[] nums) {
    //DP: time O(2n) -> O(n) space O(1)
    /***
     * ex: 2111224 -> compare two order for the max (from idx 0 to len - 2) and (from idx 1 to len -1)
     */
    if (nums.length == 1) return nums[0];
    return Math.max(rob2(nums, 0, nums.length - 2), rob2(nums, 1, nums.length - 1));
  }

}