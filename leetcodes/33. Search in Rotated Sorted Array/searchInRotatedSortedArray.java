import java.io.*;
class Solution {
    public int search(int[] nums, int target) {
    //input: array, integer
    //output: integer
    //binerary search: time O(logn) space O(1)
    //edge case: len is 1

        if (nums.length == 1) return (nums[0] == target)? 0 : -1;

        int l = 0;
        int h = nums.length - 1;
        while (l < h) {
          if (nums[l] == target) return l;
          if (nums[h] == target) return h;

          int mid = l + (h - l)/2;

          if (nums[mid] == target) return mid;

          //start from l
          if (nums[mid] >= nums[l]) {
            if (nums[mid] > target && nums[l] <= target)
              h = mid;
             else
              l = mid + 1;
          }
          //it will get the same result as above if they are the same condition
          if (nums[mid] <= nums[h]) {
            if (target > nums[mid] && nums[h] >= target)
              l = mid + 1;
            else
              h = mid;
          }
             // Various overloads of println() method
           // System.out.println(mid);
            //System.out.println(l);
           // System.out.println(h);
        }
        return -1;

      }
    }