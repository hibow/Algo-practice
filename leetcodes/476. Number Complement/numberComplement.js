/**
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
    //input: within 32bit signed integer
    //output: integer
    //edge case: num >0
    /**
     * 00000101 
     * xor 00000111 to get complement
     * how to get this mask?
     * 11111111111111111... -> << 30 -> 10000...
     * while (num & mask == 0), mask >> 1 -> move 1 to first 1s in num
     * mask = 00000100
     * mask << 1 = 00001000
     * - 1 = 00000111
     *  -> return num ^ mask 
     * 
     * time O(1->32), space O(1)
     * 
     * 
     * 2) JAVA mask = Integer.highestOneBit(num);
     *    mask = (mask << 1) -1
     *    return num ^ mask
     * 
     * 3) don't use binary 
     *    the Integer.highestOneBit is the max 2**x <= num
     *   return bigINt - num -1
     * 
     */
  if (num === 0) return 1;
  let mask = 1 << 30;
  while ((num & mask) === 0) {
    mask >>= 1;
  }
  mask = (mask << 1) -1;
  return num^mask;
};