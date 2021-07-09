class Solution {
  public int singleNumber(int[] nums) {
    // input: integer
    // output: integer
    // edge case: if only one num -> return nums[0]
    // XOR -> 1 when the corresponding bits of two operands are opposite
    // use xor from the start to the end -> the single number will be the left over.
    if (nums.length == 1)
      return nums[0];
    int ans = 0;
    // better than nums[0], 0 ^ a = a, it runs 0ms vs 1ms (nums[0])
    for (int i = 1; i < nums.length; i++) {
      ans = ans ^ nums[i];
    }
    return ans;
  }
}
/**
 * 1) iterate over the array and add non-duplicate one in the new list, if it's
 * duplicated, remove it from new list. # in JAVA, use ArrayList<>() for add()
 * and remove(), get(0) to get the single number time O(n^2)- iterate the list
 * and search the new list ( check contains), space O(n) new list
 * 
 * 2) hashtable use HashMap<>(), for using put(i, count), iterate over the array
 * to put it into map, and iterate over the map to get count is 1 time O(2n),
 * space O(n)
 */
