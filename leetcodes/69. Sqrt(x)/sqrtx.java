class Solution {
  public int mySqrt(int x) {
    //binary search time O(logn) space O(1)
    /**
     * set l and h, l = 1, h = x
     *
     * while (l <= h)
     *    create mid = l + (h-l)/2
     *    create sqrt = x / mid
     *    if mid is sqrt, return mid
     *    if mid < sqrt, l = mid + 1
     *    if mid > sqrt, h = mid - 1
     * return h -> since l exit when l > h, so return h
     */
    if (x <= 1) return x;
    int l = 1;
    int h = x;
    while (l <= h) {
      int mid = l + (h - l) / 2;
      int sqrt = (x/mid);
      if (mid == sqrt) return mid;
      if (mid < sqrt) {
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }
    return h;
  }
}