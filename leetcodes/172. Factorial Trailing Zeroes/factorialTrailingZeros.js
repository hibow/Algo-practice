/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
    //input: integer
    //output: integer
    //edge case if n <= 1 return 0
    /**
     * 2 x 5 = 10, count how many 5s in n! since 2s is way more than 5s.
     * time O(log_5(N))
     */
    let count = 0;
    while(n> 0) {
      n=Math.floor(n/5);
      count+=n;
    }
    return count;
};