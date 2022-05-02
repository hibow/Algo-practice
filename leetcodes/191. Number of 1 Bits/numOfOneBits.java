public class Solution {
  // you need to treat n as an unsigned value
  public int hammingWeight(int n) {
    // AND & -> check the last bits if it's 1
    // >>> unsigned right shift, until n is 0
    // run 32 times -> O(1) since integer is 32 bits
    int ones = 0;
    while(n != 0) {
      ones += (n & 1);
      n = n  >>> 1;
    }
    return ones;
  }
}