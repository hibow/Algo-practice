/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
  //DP[i][j] from recursive (Brute force) to top down DP
  // it was hard to use two for loops to brute force it with DP(n)
  let n = text1.length
  let m = text2.length
  return LCS(text1, text2, n, m)
};
var LCS = function(text1, text2, i, j){
  if (i === 0 || j === 0) return 0
  if (text1[i - 1] === text2[j - 1]) return 1 + LCS(text1,text2, i-1, j-1)
  else return Math.max(LCS(text1, text2, i- 1, j), LCS(text1, text2, i, j - 1))
} //TLE

//DP
var longestCommonSubsequence = function(text1, text2) {
  let m = text1.length
  let n = text2.length
  let dp = []
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {

        
  if (text1.charAt(i - 1) != text2.charAt(j - 1)) {
            // check left and top for longer subsequence length
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
        else {
            // check diag for prev longest subsequence length and add 1
            dp[i][j] = dp[i - 1][j - 1] + 1;
        }
    }
}

return dp[m][n];
};
