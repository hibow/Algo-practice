/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    //input: integer
    //output: boolean
    //edge case:
    /**
     *   if it's n = pow(2,x), it will has only 1 bit in binary integer
     * 1) JAVA use build in function to check bitcounts
     *   time O(1->32), space O(1)
     * 
     * 2) use n & (n -1) if n has only 1s, the ans is 0 -> get rid of the lowest 1s (itself)
     *    time O(1 -> 32), space O(1)
     * 
     */
  return n > 0 && (n & (n -1)) === 0;
};