/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
  /***
   * iterate over the intervals to compare with newInterval
   * time O(n) spaceO(n)
   * 1. no overlap with current interval, and newInterval is before current interval
   * => res = [NewInterval, interval]
   * 2. overlap with current interval
   * => res = [newInterval with interval]
   *
   * 3. no overlap with current interval, newInterval is after current interval
   * res = [interval]
   * note: pay attention on data type and how to simplify the statements
   */
    let newArr = newInterval
    let res = [];
    for (let i = 0; i < intervals.length; i++) {
      let [start, end] = intervals[i]
      let [addS, addE] = newArr
      if (addE < start) {
        res.push([addS, addE]);
        newArr = intervals[i]
      } else if ((addS <= end)) {
        newArr= [Math.min(start, addS), Math.max(end, addE)];
      } else {
        res.push(intervals[i])
      }
    }
    res.push(newArr)
    return res;
  };