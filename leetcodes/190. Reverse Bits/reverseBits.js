/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

/**
 * 1) bit by bit
 *   right shift n until it is 0 , put the right bit into the newinteger
 *     right bit -> add left-shifted left bit of n into new integer
 *    (n&1) -> to get the rightmost bit 
 *    << (power from 32 to ) -> left shift this bit 
 *    n = n >> 1-> right shift the original integer (32bit unsigned)
 * 
 *   or
 *     set newInteger = 0
 *     new integer << 1, newInt | (n &1), to get the right most bit, n >>> 1 right shift(no sign)
 *     until 31 times.
 *  
 *  time O(1) -> it is 32 bits so the iteration is fixed
 *  space O(1) -> it is 32 bits so the space is fixed
 * 
 * 2) bytes to bytes
 *    reverse bytes and call reverse bit(n &) in the process
 *    use memoization(cache) to store the repeated processes
 *      reverse byte -> same as reverse bit, but left shift or right shift 8, and n & 1-> 0xff or 0b11111111 by calling reverseByte(b)
 *      reversebyte -> check if cahce includes b, if not store b and ret (default was 0, stored the final result) and return the result
 *   time O (1) -> fixed iteration times, space O(1) -> fixed cache size (2**8 = 256)
 *
 * 3) mask and shift - no loop - the idea of divide and conquer
 *    1. break the 32bit into 2blocks of 16 bits , switch them
 *      use  n >> 16 n << 16 to divide , use | to merge them 
 *    2. break 16bits into 2 blocks of 8 bits, switch them
 *     use mask
 *     n = ((n & 0xff00ff00) >> 8) | ((n & 0x00ff00ff) << 8);
 *     n = ((n & 0xf0f0f0f0) >> 4) | ((n & 0x0f0f0f0f) << 4);
 *  n = ((n & 0xcccccccc) >> 2) | ((n & 0x33333333) << 2);
 *    3. break until it is 1bit
 *     n = ((n & 0xaaaaaaaa) >> 1) | ((n & 0x55555555) << 1); return n
 *    4. at each of the above steps, merge the intermediate results into a single integer which serves as the input for next step
 * 
 *     time O(1), space O(1) -> all fixed
 *    
 *   similar questions: swap alternating bits of a number", "converting endianness of a number"
 *  
 */
 var reverseBits = function(n) {
  if (n === 0) return 0;
  let newInt = 0;
  for (let i = 0; i < 32; i ++) {
    newInt <<= 1;
    if (n & 1 === 1) newInt += 1;
    n >>= 1;
  }  
  return newInt >>> 0;
  //in js to get unsigned integer
  ///>>> unsigned right shift and put 0 in left
};
