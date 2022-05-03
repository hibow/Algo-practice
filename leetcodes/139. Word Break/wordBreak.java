class Solution {
  public boolean wordBreak(String s, List<String> wordDict) {
    //DP for an array of s.length() -> time O(mxn)
      //iterate over s and wordDict -> if word in wordDic len < s index number
        //if f[s index - word len] is true -> if (s substring(i - word len, i) == word) -> f[s index] = true, break
      //return dp[s.length()]
    boolean[] dp = new boolean[s.length() + 1];
    dp[0] = true;
    for(int i = 0; i <= s.length() ; i ++) {
      for (String word : wordDict){
        if (word.length() <= i) {
          if (dp[i - word.length()]){
            if (s.substring(i-word.length(), i).equals(word)){
              dp[i] = true;
              break;
            }
          }
        }
      }
    }
    return dp[s.length()];
  }
}
