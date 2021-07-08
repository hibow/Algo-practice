class Solution {
  public int countPrimes(int n) {
    boolean[] notPrimes = new boolean[n];
    int count = 0;
    for (int i = 2; i < n; i++) {
      if (!notPrimes[i]) {
        count++;
        for (int j = i; j <= (n - 1) / i; j++) {
          notPrimes[i * j] = true;
        }
      }
    }
    return count;
  };
}