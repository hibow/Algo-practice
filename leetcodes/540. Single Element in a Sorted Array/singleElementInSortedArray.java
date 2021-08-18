class Solution {
  public int singleNonDuplicate(int[] nums) {
    //linear search time O(n), space O(1)
    //binary search
      /**
       * ex: [3,3,7,7,10,11,11] [1,1,2,3,3,4,4,8,8]
       * if target is k, k is mid
       *
       * it depends on the position of mid, if it's even, proceed the next step, if it's odd, mid -- change to even then next step
       * mid can't decide where to go when it's at odd position
       *
       * since there is only one non duplicate, we assume we will find the answer in mid
       * if cut the array to half, the middle should not be the same with left and right
       * if find the same thing on one side, the singular should be in the same side
       *
       * if k is l or h
       *    ex: 122, mid is 2, so same side theroy is wrong.
       *     mid = mid + 1, l can't be mid(it won't exit the loop), l = mid + 2, if exit the loop, return l
       *    ex: 112 mid = mid - 1 h = mid (mid = l = 1, so l = mid +2, l > h exit)
       *
       * while (l < h)
       *    create mid
       *    if mid is even or odd, change it to even position
       *    if (mid == mid + 1) l = mid + 2
       *    else h = mid
       *    else return nums[l]
       * time O(logn), space O(1)
       */
    int l = 0;
    int h = nums.length - 1;
    while (l < h) {
      int mid = l + (h - l)/2;
      if (mid % 2 == 1) mid--;
      if (nums[mid] == nums[mid + 1]){
        l = mid + 2;
      } else {
        h = mid;
      }
    }
    return nums[l];
  }
}