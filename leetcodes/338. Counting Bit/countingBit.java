class Solution {
  public int[] countBits(int n) {
    //DP ->time O(n), space O(n)
    /**
     * f[0]   =  f[0>>1 = 0] + 0&1 = 0
     * f[1]   =  f[1>>1 = 0] + 1 & 1 = 1
     * f[10]  =  f[10>>1 = 1] + 10&1 = 1
     * f[11]  =  f[11>>1 = 1] + 11&1 = 2
     * f[100] = f[100>>1 = 10] + 100&1 = 1
     * f[101] = f[101>>1=10] + 101&1 = 2
     *
     * odd number -> last digit is 1
     * even number -> last digit is 0, >>1 will be the same as add >>1

     i >>1 = i /2
     i & 1 = i % 2

     */
    int [] f = new int [n + 1];
    for (int i = 1; i <= n; i ++) f[i] = f[i >> 1] + (i&1);
    return f;
  }
}