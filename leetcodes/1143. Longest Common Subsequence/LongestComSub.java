class Solution {
  public int longestCommonSubsequence(String text1, String text2) {
    //time O(mn) space O(mn)
    //match the dp[s][t] if it matches the current position then dp++
    //else get the max of dp[s+1][t] and dp[s][t+1]
    int tLen = text1.length();
    int sLen = text2.length();
    int[][] dp = new int[tLen + 1][sLen + 1];
    for (int t = 0; t <= tLen; t++) {
      for (int s = 0; s <= sLen; s++) {
        if (text1.charAt(t) == text2.charAt(s)) dp[t+1][s+1] = 1 + dp[t][s];
        else dp[t+1][s+1] = Math.max(dp[t+1][s], dp[t][s+1]);
      }
    }
    return dp[tLen][sLen];
  }
}