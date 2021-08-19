class Solution {
  public int findMin(int[] nums) {
    // input: array
    // output: integer (minimum)
    /**
     * ex: 4 5 6 7 0 1 2 ex: 4 sort the array time O(nlogn) required time O(logn) ->
     * binary search
     * 
     * l = 0, h = n - 1 while ( l < h) { create mid if (mid > h), min is in right
     * side, l = mid + 1 if mid <= h, h = mid (left side) how about l? -> no need
     * max return nums at l }
     * 
     */
    int l = 0;
    int h = nums.length - 1;
    while (l < h) {
      int mid = l + (h - l) / 2;
      if (nums[mid] <= nums[h]) {
        h = mid;
      } else {
        l = mid + 1;
      }
    }
    return nums[l];
  }
}