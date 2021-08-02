class Solution {
  public int climbStairs(int n) {
    // DP: original DP was using int [] but we can use variable instead to save the
    // space
    // DP[n] = DP[n-1] + DP[n-2] -> the combination of the ways to go to the
    // destination since it requires to take one or two steps at a time.

    if (n <= 2)
      return n;
    int pre1 = 2; // DP[2]
    int pre2 = 1;// DP[1]
    for (int i = 3; i <= n; i++) {
      int cur = pre1 + pre2;
      pre2 = pre1;
      pre1 = cur;
    }
    return pre1;
  }
}