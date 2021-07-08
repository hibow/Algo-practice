/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    //input: integer
    //output: boolean
    //edge case: n < 0 false
    /**
     * 1) loop iteration
     *    while n% 3 == 0 -> n = n/3 --> n will be 1 if it's power of 3 
     *    return n == 1
     *   time O(log3_n), space O(1)
     * 
     * 2) base conversion
     *     JAVA: integer.toString(number, base).matches('^10*$') 
     *   time O(log3_n) space O(log3_n) = toString(num, base)(O(log3_n)) + regular exp (O(1)) 
     * 
     * 3)integer limitations
     *    JAVA: int -> 4 bytes signed integer, maxint = 2**31 - 1
     *    get the max value with power of 3 = 3 **(log3_maxint)= 3**19.56 = 3**19 = 1162261467
     *    this maxpower3 % any 3**x is 0 
     *    ex: 3**5 % 3**2 == 0
     *    return n > 0 && maxpower3 % n == 0
     * time O(1), space O(1)
     * 
     */

    return n > 0 && ((3**19) % n === 0);
};