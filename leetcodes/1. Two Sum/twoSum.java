import java.util.HashMap;

public class Solution {
  public int[] twoSum(int[] nums, int target) {
    // input: int[], int
    // output: int[] result = new int[2];
    // brute force timeO(n^2), space O(1)
    // iterate over nums from i to nums.length - 1,
    // iterate over nums from j = i+1 to nums.length - 1
    // if target - nums[i] == nums[j] && i != j
    // return [i, j]
    // hashmap one pass time O(n), space O(n)
    // iterate over nums from i to nums.length - 1
    // if map.containsKey(nums[i]) , result = [map.get(nums[i]), i]
    // break
    // else map.put(target - nums[i], i)
    // return result
    // two pointer or binary search time O(nlogn) space O(n)

    int n = nums.length;
    int result[] = new int[2];
    HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
    for (int i = 0; i < n; i++) {
      if (map.containsKey(nums[i])) {
        result[0] = map.get(nums[i]);
        result[1] = i;
        break;
      } else {
        map.put(target - nums[i], i);
      }
    }
    return result;
  }
}

class Solution {
  public int[] twoSum(int[] nums, int target) {
      //brute force-> O(n^2)
      //one pass O(n), space: O(n)
      //two pointer O(nlogn) space:O(1)
    //make a sorted array copy time O(logn)
    //get two integers based on target sum O(n)
    //get original index timeO(n)
    //total time O(2nlogn) = o(nlogn)
    //edge case
    if (nums == null) return nums;

    int [] newArray = Arrays.copyOf(nums, nums.length);
    Arrays.sort(newArray);

    int i = 0;
    int j = nums.length -1;
    int [] res = new int[2];
    //consider duplicate elements:
    res[0] = -1; //when -1, replace it with first duplicated element
    while( i < j) {
      if (newArray[i] + newArray[j] < target) {
        i ++;
      } else if (newArray[i] + newArray[j] > target) {
        j--;
      } else {
        break;
      }
    }
    for (int k = 0; k < nums.length; k++) {
      if (res[0] == -1 && nums[k] == newArray[i]) {
        res[0] = k;
      }else if (nums[k] == newArray[j]) {
        res[1] = k;
      }
    }
    return res;
  }
}