/**
 * @param {number} x
 * @return {number}
 *
 * 10000000000000000000000000000000  --> 2147483648 --> 2^31
 * 01111111111111111111111111111111  --> 2147483647 --> 2^31 -1
 * ^ Sign bit
 *
 *
 */
 var mySqrt = function(x) {
  //input: number (0 <= x <= 2^31 - 1)
  //output: number
  //edge case: x >= 0
  //x = n*n , x/n = n
  //integer part of n -> ans <= n, ans*ans <=x, x/ans >= ans
  //use binary search-> get mid as the answer -> mid = x/mid
  //lower boundary: 1 (if non zero), upper boundary: x
  //run this iteration while l <= h
  //if mid = x/mid -> return mid
  //if mid < x/mid ->   l = mid + 1 ->when h < l, it will exit from the loop and return h as the closest integer
  //else -> mid > x/mid-> mid too big -> h reduce to mid -1

  if (x <=1) return x;
  let h = x;
  let l = 1;
  while (h >=l) {
    let mid = l + Math.floor((h-l)/2);
    let sqrt = Math.floor(x/mid);
    if (mid === sqrt) return mid;
    if (mid < sqrt) {
      l = mid + 1;
    } else if (mid > sqrt) {
      h = mid -1;
    }
  }
  return h;
};