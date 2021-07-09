/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
    //input: integer, integer
    //output: integer
    //edge case: -1000<=a,b <=1000
    /**
     * bit manipulation:
     * how to add numbers? xor
     *  0 ^ 1 = 1, 1 ^ 1 = 0
     * how to carry numbers? &
     * 0&1 = 0, 1 & 1 = 1
     * ans  << 1 -> left shift as carry
     * 
     * while (b is not 0)
     * c = a & b -> to get carry 
     * a = a ^ b -> to add together
     * b= c << 1 　　
     *
     * return a
     *
     * what to return? a
     * 
     * it can be expressed by recursive function
     * time O(1-32), O(1)
     * 
     */
  return b === 0? a : getSum((a^b), (a&b) << 1);
};