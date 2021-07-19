class Solution {
  public int[] twoSum(int[] numbers, int target) {
    // 1) hashmap time O(n), space O(n)
    // 2) two pointers time O(n), space O(1)-> two pointers
    // slow points from head to end, fast points from end to head
    // if sum = slow + fast == target, return their index
    // if sum > target, move slow next
    // if sum < target move fast next
    // there should be exactly one solution (default return null)
    // note: it's 1-index
    if (numbers == null)
      return null;
    int i = 0, j = numbers.length - 1;
    while (i < j) {
      // they can't be the same
      int sum = numbers[i] + numbers[j];
      if (sum == target) {
        return new int[] { i + 1, j + 1 };
      } else if (sum < target) {
        i++;
      } else {
        j--;
      }
    }
    return null;
  }
}