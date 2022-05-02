import java.util.Arrays;
import java.util.Collection;

class Solution {
  public List<List<Integer>> threeSum(int[] nums) {
    //input: array
    //output: array with triplet
    //edge case: if len < 3, return empty list
    //use SET to avoid duplicates
    //sort the original array
    //iterate over the array
      //start from one element
      //if nums[i] > 0, break;
      //use while loop to adjust two pointers
        //check if sum is 0 then add to the list
          //same i, j++, k--
        //else if sum <0 , j++ (until big enough )
        //else if sum > 0, k-- (until small enough)
    //return new list
    //time O(n^2)(for + while > sort O(logn)), space O(n) (hashset?)
    Set<List<Integer>> res = new HashSet<>();
    if (nums.length < 3) return new ArrayList<>(res);
    Arrays.sort(nums);
    for(int i = 0; i < nums.length - 2; i++) {
      int j = i + 1;
      int k = nums.length - 1;
      if (nums[i] > 0) break;
      while (j < k) {
        int sum = nums[i] + nums[j] + nums[k];
        if (sum == 0) res.add(Arrays.asList(nums[i], nums[j++], nums[k--]));
        else if (sum > 0) k--;
        else if (sum < 0) j++;
      }
    }
    return new ArrayList<>(res);
  }
}