class Solution {
  public int[] searchRange(int[] nums, int target) {
    //input: array, integer
    //ouput: array
    //edge case: if not found, return [-1, -1]
    /**
     * Binary search: time O(logn)
     *
     * if nums is null, return [-1, -1]
     *
     * ex: 5 7 7 8 8 10, get 7 as mid, if mid < target,
     *     l = mid + 1,
     *     if mid > target, h = mid - 1
     *     if mid = target,
     *     if mid + 1 > target ,h = mid
     *
     *     if l = target = h , return [l, h]  no! it can't use [l, h] since it's for searching mid not the [first, last]
     *
     *  result[0] - first
     * if mid > target, h = mid - 1, mid < target, l = mid + 1
     * mid = target, h = mid -> to get the first one
     * when h = l exit -> result[0] = nums[l]
     *  result[1] -  last
     * use original h, with new l
     * create mid = oringial mid + 1 otherwise it won't reach the right side due to the round number
     * if mid > target, h = mid - 1, mid < target, l = mid
     * mid = target, l = mid -> to get the last one
     * when l = h exit -> result[1] = nums[h]
     *
     */
    int[] result = new int[2];
    if (nums.length == 0 || nums == null) return new int[]{-1, -1};
    int l = 0;
    int h = nums.length - 1;
    while (l < h) {
      int mid = l + (h - l)/2;
      if (nums[mid] == target) {
        h = mid;
      }else if (nums[mid] > target) {
        h = mid - 1;
      }else if (nums[mid] < target) {
        l = mid + 1;
      }
    }
    result[0] = (nums[l] == target)? l : -1;
    h = nums.length - 1;
    while (l < h) {
      int mid = l + (h - l)/2 + 1;
      if (nums[mid] <= target) {
        l = mid;
      } else if (nums[mid] > target) {
        h = mid - 1;
      }
    }
    result[1] = (nums[h] == target) ? h: -1;
    return result;
  }
}