/**
 * An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

Example 1:

Input: [1,2,2,3]
Output: true
Example 2:

Input: [6,5,4,4]
Output: true
Example 3:

Input: [1,3,2]
Output: false
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  //edge case: [1, 1, 1] => true
  //constraints: O(n) or O(2n)
  let decrease = true;
  let increase = true;
  for (let i = 0 ; i < A.length; i++) {
    //check increase order
    if (A[i + 1] > A[i]) {
      increase = false;
    }
    if (A[i + 1] < A[i]) {
      decrease = false;
    }
    //check decrease order
  }
  return decrease || increase
};

/**
 * test case
 */
var arr = [6, 5, 4, 3, 9];
var a = isMonotonic(arr);
console.log(a);