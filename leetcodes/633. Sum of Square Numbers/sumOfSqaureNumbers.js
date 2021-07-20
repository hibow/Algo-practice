/**
 * @param {number} c
 * @return {boolean}
 */
 var judgeSquareSum = function(c) {
    /**
     * 1) brute force time O(c) -> c^(-1/2) * c^(-1/2) = c), space O(1)
     *    two for loops for a * a <= c, b * b <= c, a and c from 0, if a*a + b*b = c return true
     * 2) better Brute Force  time O(c), space O(1)
     *    1 + 3 + 5 + ... + (2*n - 1) = n ^2
     *    for a * a <= c, a from 0 , 
     *        b = c - (a^2), 
     *          while sun < b (sum from 0, i = 1, sum += i, i+=2), add 1 + 3 + 5...to sum until sum is b and return true
     *    return false
     * 
     * 3) sqrt function   time O(sqrt(c)*logc)-> loop uses sqrt(c) times and finding sqrt(c-a^2) takes O(logc) time, space O(1)
     *    for a from 0 to a* a <= c, b is Math.sqrt(c-a*a), if b is integer, return true 
     *    return false
     * 4) binary search time O(sqrt(c) * log c), search takes O(logc) space O(logc) for binary search
     *    for a from 0 to a*a <=c, b is c - (a*a), if binarysearch(0, b, b) return true
     *    binarysearch(s, e, n) -> from get mid * mid is n from (s, e), mid is s + (e-s)/2
     * 5) two pointers time O(sqrt(c)), space O(1)
     *     find i *i + j * j = c*c in [0 to c]
     *     while (i <=j) (j is int Math.sqrt(c))
     *         if powSUM = c, return true
     *         else if powSum > c, j --
     *         else if powSum < c, i++
     *     return false
     */
    if (c < 0) return false;
    let i = 0;
    let j = Math.floor(Math.sqrt(c));
    //takes integer only
    while ( i <=j) {
        let powSum = i*i+ j*j;
        if (powSum === c) {
          return true;
        } else if (powSum > c) {
          j--;
        } else if (powSum < c) {
          i++;
        }
    }
    return false;
};