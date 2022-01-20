class Solution {
  public int missingNumber(int[] nums) {
    /**
     * 1) sort the array, iterate the array to get missing num
     *    time O(nlogn), space O(n)
     * 2) store it into hashmap, iterate the expected array (nums.length + 1)
     *    time O(2n), spaceO(n)
     * 3) start from 0 to n, get the area = ((1 + n)/2) * n
     *    area minus i in nums, the last digit is answer
     *    time O(n), space O(1)
     * 4) bit manipulation
     *    xor => same ^ same = 0 ; bit ^ 0 = 1
     *    iterate over the expected array i, use nums[i] ^ i til the end
     *    time O(n), space O(1)
     *
     */
    int ans = nums.length;
    for (int i = 0; i < nums.length; i++) {
        ans = ans ^ i ^ nums[i];//a = a^b^b
    }
    return ans;
  }
}