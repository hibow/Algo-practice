class Solution {
  public int[] productExceptSelf(int[] nums) {
      int lenN = nums.length;
      int[] res = new int[lenN];
      int temp = 1;
      for (int i = 0; i < lenN; i++) {
        if (res[i]== 0) res[i] = 1;
        res[i] *= temp;
        temp *= nums[i];
      }
      temp = nums[lenN - 1];
      for (int j = lenN - 1; j >= 0; j --) {
        res[j] *= temp;
        temp *= nums[j];
      }
      return res;
  }
}
//time O(2n) spaceO(1): right anad left two ways