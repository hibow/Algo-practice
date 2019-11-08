/*
 * [Source]
 *
 * https://leetcode.com/problems/daily-temperatures/
 *
 * [Problem Description]
 *
 * Given a list of daily temperatures T, return a list such that, for each day in
 * the input, tells you how many days you would have to wait until a warmer
 * temperature. If there is no future day for which this is possible, put 0
 * instead.
 * For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76,
 * 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 * Note: The length of temperatures will be in the range [1, 30000]. Each
 * temperature will be an integer in the range [30, 100].
 *
 * [Comments]
 *
 *         73    74   75  71  69  72  76  73
 *
 *  stack  73
 *                74
 *
 *                     75
 *                     75  71  69
 *                     75          72
 *                                    76
 *                                    76    73
 *
 *
 * https://leetcode.com/problems/daily-temperatures/discuss/157886/javascript-stack-solution-with-explaination
 */

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  //edge case if out of boundary
  //constraints: O(n) iterate over the array once
  let result = new Array(T.length).fill(0);
  let stack = [];
  for (let i = 0; i < T.length; i++) {
    //pop when new value is greater than the last one in stack
    //and change result value based on index difference
    while (stack.length > 0 && T[stack[stack.length - 1]] < T[i]) {
      let j = stack.pop();
      result[j] = i - j;
    }
    //push index value into array
    stack.push(i);
  }
  return result;
};
