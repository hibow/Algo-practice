/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  //same to insert interval except it's unsorted interval array
  //sort time O(logN) total time O(nlogn), space O(n)
  //newArr = intervals[0] -> use it to compare from intervals[1] to the end
  //if newArr[1] < intervals[0][0] -> push[newArr] to res and assign intervals[i] to newArr
  // else if they are overlapped () -> assign the [min(start), max(end)] to newArr
  //else newArr > intervals[i] -> push intervals[i] to res
  //push newArr to res
  //return res
  intervals.sort((a,b) => a[0] - b[0])
  let newArr = intervals[0];
  let res = [];
  for (let i = 1; i < intervals.length; i++) {
    let [start, end] = intervals[i]
    let [addS, addE] = newArr;
    if (addE < start) {
      res.push(newArr);
      newArr = intervals[i]
    } else if (addS <= end) {
      newArr = [Math.min(addS, start), Math.max(addE, end)];
    } else {
      res.push(intervals[i])
    }
  }
    res.push(newArr)
    return res;
};