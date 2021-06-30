import java.util.HashMap;

public class Solution {
  public int[] twoSum(int[] nums, int target) {
    // input: int[], int
    // output: int[] result = new int[2];
    // brute force
    // iterate over nums from i to nums.length - 1,
    // iterate over nums from j = i+1 to nums.length - 1
    // if target - nums[i] == nums[j] && i != j
    // return [i, j]
    // hashmap
    // iterate over nums from i to nums.length - 1
    // if map.containsKey(nums[i]) , result = [map.get(nums[i]), i]
    // break
    // else map.put(target - nums[i], i)
    // return result
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
