/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  //input:number array
  //output: boolean
  //edge case: nums.length >=1
  /**
   * 1) brute force- time O(n^2), but it will get TLE , space O(1)
   * 2) sorting, and iterate over to check if adj element is the same
   *    time O(nlogn) space O(1)
   * 3) use hashset to store
   *    iterte over the array and check if it contains in the set
   *
   */
  let set = new Set(nums);
  return set.size !== nums.length
};