/**
 * @param {number} n
 * @return {boolean}
 */
 var hasAlternatingBits = function(n) {
    //input: integer
    //output: boolean
    /**
     * 1) convert to string, and compare if charAti is the same as charAti+1
     *  time O(1->32), space: O(1-32)
     * 
     * 2) check each last bit
     *    use n % 2 to get last bit
     *    use n /2 to >> 1
     *    until n = 0, if last bit = next last bit => return false ex: 1111  111
     *    time O(1 < 32), space O(1)
     * 
     * 3) 
     *   use a = n ^ (n >> 1)  it should be all 1s if it has alternating bits
     *   use a & (a + 1) == 0 to check if it's all 1s.
     *   ex: 1010 ^ 101 = 1111
     *    1111 & (1111 + 1) = 0
     *   time O(1), space O(1- 32)
     */
  let a = n ^ (n >> 1);
  return (a & (a + 1) ) === 0;

};