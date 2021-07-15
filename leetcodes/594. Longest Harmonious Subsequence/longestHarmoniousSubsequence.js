/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
  //input: number array
  //output: integer
  //edge case: nums.length >=1
  /**
   * 1) brute force
   *   time O(n^2) space: O(1)
   * 2) soring and count
   *   time O(nlogn), space: O(logn)
   * 3)hashmap
   *   create a map
   *   iterate over the nums
   *     to get its count and store into map
   *   iterate over the map
   *    to get the max count of (current key) + (current key + 1)
   *  return the max
   */
  let map = {};
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]=== undefined) {
      map[nums[i]] = [nums[i], 1];
    } else {
      map[nums[i]][1] ++;
    }
  }
  for (let k in map) {
    let next = map[k][0] + 1;
    if (map[next] !== undefined) {
      ans = Math.max(ans, map[k][1] + map[next][1]);
    }
  }
  return ans;
};