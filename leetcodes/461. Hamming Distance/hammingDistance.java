import jdk.nashorn.api.tree.YieldTree;

class Solution {
  // 1) XOR
  // use xor to get the difference, and count 1s in it
  public int hammingDistance1(int x, int y) {
    int z = x ^ y;
    int cnt = 0;
    while (z != 0) {
      // count 1s
      if ((z & 1) == 1)
        cnt++;
      z = z >> 1;
      // right shift with signed, get 0s in left side
    }
    return cnt;
  }

  // 2) use z & (z -1) to get rid of the rightmost 1s in z
  public int hammingDistance2(int x, int y) {
    int z = x ^ y;
    int cnt = 0;
    while (z != 0) {
      // count 1s
      z &= (z - 1);
      cnt++;
      // right shift with signed, get 0s in left side
    }
    return cnt;
  }
  // time O(1-> 32 iterations) space O(1)

  // 3) JAVA integer.bitcount() to count all 1s
  public int hammingDistance3(int x, int y) {
    return Integer.bitCount(x ^ y);
  }
}
