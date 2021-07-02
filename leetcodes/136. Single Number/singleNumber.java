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