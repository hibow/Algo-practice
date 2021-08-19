/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
  public int firstBadVersion(int n) {
    // input: integer
    // output: integer (first bad)
    /**
     * binary search time O(logn), space O(1) l = 1, h = n while (l < n) { create
     * mid if (mid is false), l = mid + 1 if (mid is true), h = mid 3, 4, 5, -> l =
     * h }
     * 
     * return l
     */
    int l = 1;
    int h = n;
    while (l < h) {
      int mid = l + (h - l) / 2;
      if (isBadVersion(mid) == false) {
        l = mid + 1;
      } else {
        h = mid;
      }
    }
    return l;
  }
}