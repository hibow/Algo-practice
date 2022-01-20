public class Solution {
  // you need treat n as an unsigned value
  public int reverseBits(int n) {
      //unsigned -> after reverse, put 0 in the left
      /**
       * bit by bit :
       * create newInt = 0
       * iterate over 32bits ->
       *    newInt << 1 -> left shift
       *    newInt += n & 1 -> get last bit
       *    n >> 1  -> right shift
       *
       * return newInt >>> 0 -> put 0 in the left if needed
       */
    if (n == 0) return 0;
    int newInt = 0;
    for (int i = 1; i <=32 ; i++){
      newInt <<= 1;
      newInt += (n&1);
      n >>=1;
    }
    return newInt;
  }
}