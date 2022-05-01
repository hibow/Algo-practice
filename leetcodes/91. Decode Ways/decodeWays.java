class Solution {
  public int numDecodings(String s) {
    //DP -> find the pattern to get the nums of ways to decode..
    /**
     * ex: 206 -> 2
     *     226 -> 3
     *     1006 -> 0
     *     110-> 1
     *      12-> 2
     *             DP(n+1) = 0
     *         DP(n) = 1
     *       DP(n-1) = s.charAt(n-1) = '0'? 1: 0
     *      DP(n-2 ->i) = Integer.parseInt(s.substring(i, i+2) <= 26) ? DP(i+1) + DP(i+2): DP(i +1)
     *    return DP(0)
     * time: O(n), space O(1)
     */
    int n = s.length();
    if (n == 0) return 0;

    int [] DP = new int[n +1];
    DP[n] = 1;
    DP[n-1] = s.charAt(n-1) != '0'? 1:0;
    for (int i = n-2 ; i>=0; i--) {
      if (s.charAt(i) =='0') continue;
      else DP[i] = (Integer.parseInt(s.substring(i, i+2)) <= 26) ? DP[i +1]+DP[i + 2]: DP[i+1];
    }
    return DP[0];
  }
}