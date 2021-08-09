/***
 * Question: N letters and N covers, get the total wrong order arrangement ways.
 *
 * create DP int[] to store the wrong order, DP[i] represents the total wrong arrangement ways of the first i letters and i covers
 * if i letter goes to j cover, j letter goes to k cover
 *
 * 1) i = k, swap i letter and j letter, they are correct now, but the rest i - 2 letters has dp[i-2] wrong arrangement ways
 *                since j has i - 1 possibilities, the wrong arrangement ways is (i - 1) * DP[i-2]
 *
 * 2) i != k, swap i and j, only the ith letter in correct cover, the rest of i - 1 letters has DP[i-1] wrong arrangement ways,
 *                 since j has i - 1 possibilities, the wrong arrangement ways is (i - 1) * DP[i-1]
 *
 * DP[i] = (i - 1) * DP[i - 2] + (i - 1) * DP[i - 1]
 *
 * i is from 1
 *
 * time: O(n), space: O(n)
 *
 */