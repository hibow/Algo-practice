/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  //input: numbers array
  //output: integer
  //edge case: 
  /**
   * 1) time O(n), space O(n)
   *   use map to store count , and check if count > len/2, return current num
   * 
   * 2)timeO(nlogn), space O(1)
   *   sorting the array, return len/2 + 1 th element
   * 
   * 3) time O(n), space O(1)
   *  use count as duplicate counts = 0, maj = nums[0]
   * iterate over the array, 
   *   if count = 0, maj = current num, else maj = maj
   *   if maj = num, count++, else count --
   *  
   * cnt 1 0 1 2 1 2 1 0 1
   *     2 0 1 1 0 1 2 2 2-> maj 
   *  
   * return maj
   * 
   */
  let count = 0;
  let maj = nums[0];
  for (let i = 0; i<nums.length ; i++) {
    maj = (count === 0)? nums[i]: maj;
    count = (maj === nums[i])? count+1 : count-1;
  }
  return maj;
};