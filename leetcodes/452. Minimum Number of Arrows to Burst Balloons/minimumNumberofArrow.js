/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
  //input: 2d arrays
  //output: integer
  //edge case:
  /**
   *  Greedy approach: time O(n) = NlogN(sorting), space O(1)
   *  ex: [1,2] and [2,3] is overlapped since they will be burst by arrow
   *  sort the points array with the end point
   *  set prev = points[0], count = 1 (it is the inital value, it will always have one arrow to shot one ballon)
   *  iterate over the points array from i = 1 to the end
   *    if prev[1] >= points[i][0] continue (it won't add up the count since it already counted)
   *    else prev = points[i], count++ (add up the count when it can't find overlapped points, it will need another arrow to shot)
   *
   * return count
   */
  if (points.length === 0) return 0;
  points.sort((a,b) => a[1] - b[1]);
  let prev = points[0];
  let count = 0;
  for ( let i = 1; i < points.length; i++) {
    if (prev[1] >= points[i][0]) continue;
      count++
      prev = points[i];
  }
  return count;
};