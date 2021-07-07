/**
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubArray = function(nums) {
  //input: numbers array
  //output: integer
  //edge case: non negative integers in the array , length >= 1
  /**
   * test case: consider mutiple duplicate integers with same frequency
   * get the shortest length
   *
   * use max to track the max duplicate counts
   * use min to track the shortest length of subarray
   * use map to track [startIdx, count, endIdx]
   *
   * iterate over the array,
   *  put startIdx, count, endIdx into map
   *
   * iterate over the map
   *  get the shortest lengh (end - start + 1) when find the max duplicate count in map[key]
   *
   * return min-> shortest length
   *
   */
  let max = 0;
  let map = {};
  for (let i = 0 ; i < nums.length; i++) {
    if (!map[nums[i]]) {
        map[nums[i]] = [i , 1, i]
    } else {
        map[nums[i]][1] = map[nums[i]][1] + 1;
        map[nums[i]][2] = i;
        max = Math.max(max, map[nums[i]][1])
     }
  }
  let min = 0;
  for (let k in map){
    if (map[k][1] === max) {
        min = (min === 0) ? (map[k][2] - map[k][0] + 1) : Math.min(min, (map[k][2] - map[k][0] + 1))
    }
  }
  return min;
 }