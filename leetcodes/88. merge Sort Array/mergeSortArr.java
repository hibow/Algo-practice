class Solution {
  public void merge(int[] nums1, int m, int[] nums2, int n) {
    // two pointer: track nums1 from m-1, and nums2 from n-1, and replace the
    // nums1[cur = n+m - 1]
    // iterate over this two arrays from the end, and replace the element from the
    // end of the nums1
    // return nums1
    // time: O(n), space O(1)
    int i = m - 1;
    int j = n - 1;
    int cur = m + n - 1;
    while (j >= 0) {
      // j>=0, only cares about the one needs to be merged into
      if (i < 0) {
        nums1[cur--] = nums2[j--];
      } else if (nums1[i] > nums2[j]) {
        nums1[cur--] = nums1[i--];
      } else {
        nums1[cur--] = nums2[j--];
      }
    }
  }
}