class Solution {
  public int longestConsecutive(int[] nums) {
    /**
     * 1) brute force: keeps checking if num + 1 in nums
     *      time O(n^3), space O(1)
     *
     * 2) sorting -> O(nlogn) space O(n) or O(1)
     *
     * 3) hashSet and check if in seq -> timeO(n) space O(n)
     *
     */
    Set<Integer> set = new HashSet<>();
    for (int n : nums) {
      set.add(n);
    }
    int best = 0;
    for (int n : set) {
      if (!set.contains(n-1)){
        int m = n + 1;
        while(set.contains(m)) {
          m++;
        }
        best = Math.max(best, m - n);
      }
    }
    return best;
  }
}