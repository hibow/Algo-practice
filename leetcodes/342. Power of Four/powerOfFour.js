/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
    //input: integer
    //output: boolean
    /**
     * n is pow(4,x), only 1 bit and in odd location  
     * 16 10000
     * 4 0100
     * 64 10000000
     * 256 100000000
     * 
     * 0x55555555 
     * 5 = 0101 odd location mask
     * & with odd location mask != 0 
     * 
     * time O(1), space O(1)
     * 
     * or use integer.toString(num, 4).matches("10*")
     */
  return n > 0 && ((n & (n -1)) === 0) && (( n & 0x55555555) !== 0)
};