/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
  //input: 2d arrays
  //output: integer
  //edge case: intervals.length >=1, intervals[i].length == 2
  /**
   * Greedy approach:  time O(n) = nlogn (sorting) , space O(n) = O(1)
   * Sort the array with the end time
   * set prev is interval[0]
   * iterate over the interval from i = 1 to intervals.length-1
   *   if prev[1] > intervals[i][0], cnt ++
   *   else prev = interval[i]
   *
   * return cnt
   * ex: [1,2] and [2,3] they are not overlapping
   */
  if (intervals.length === 1) return 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0];
  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (prev[1] > intervals[i][0]) count++;
    else prev = intervals[i];
  }
  return count;
};