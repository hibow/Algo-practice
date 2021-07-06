/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
  //input: integer (number)
  //output: integer (nuber)
  //edge case: if n = 1, bad = 1
  //constraints: n <= 2^31-1, minimize the calling times of API
  /***
   * [good..., first bad, bad ...]
   * while l < h
   * if mid is bad, check right side -> [l, mid]
   * if mid is good, check left side -> [mid + 1, h]
   * exit when l = h, return l
   *
   * time: O(logN), space(1)
   */
  if (n === 1) return 1;
  let h = n
  let l = 1;
  while (l < h) {
    let mid = l + Math.floor((h-l)/2);
    if (isBadVersion(mid)) {
      h = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
 };
};