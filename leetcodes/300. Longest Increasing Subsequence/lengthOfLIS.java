class Solution {
  public int binarySearchPosition(int[] sub, int val, int len) {
    int low = 0;
    int high = len - 1;
    while (low <= high) {
      int mid = low + (high - low) / 2;
      if (sub[mid] < val)
        low = mid + 1;
      else if (val < sub[mid])
        high = mid - 1;
      else
        return mid;
    }
    return low;
  }

  public int lengthOfLIS(int[] nums) {
    // dp -> use sub[] to get the correct length (but not correct elements)
    // O(n*m), m is len(sub) -> use while (pos <= sub_len) to get the pos and the
    // sub array
    // O(nlogn), use binary search to find the correct insertion position,
    // space O(n)
    int n = nums.length;
    int len = 0;
    int[] sub = new int[n];
    sub[len++] = nums[0];
    for (int i = 0; i < n; i++) {
      if (nums[i] > sub[len - 1]) {
        sub[len++] = nums[i];
      } else {
        int pos = binarySearchPosition(sub, nums[i], len);
        sub[pos] = nums[i];
      }
    }
    return len;
  }
}