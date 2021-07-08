/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
    //input: integer
    //output: boolean
    //edge case: num = [1, 2^31 -1]
    /**
     * 1) use binary search to find it's perfect square root
     *   search until (mid < n/mid -> false, or mid = n/mid -> return true )
     *   time O(logN)
     * 
     * 2) similar to binary search (newton's method)
     *   let r = n/2
     *   iterate while r* r >n
     *   r = (r + x/r)/2
     *   
     *  return r*r == n
     *  time O(logN)
     * 
     * 3) use same diff series 
     *        0- 1-4-9-16-25...
     *  diff  1 3 5 7 9
     * 
     *  let subNum = 1;
     *  while (num > 0), num = num - subNum, subNum = subNum + 2
     *  return num==0
     *  time O(sqrt(n))
     *   this is worse than O(logN)
     * 
     */
  let l = 1;
  let h = num;
  while (l <= h) {
    let mid = l + Math.floor((h-l)/2);
    if (mid === num/mid) return true;
    if (mid > num/mid) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return false;
};