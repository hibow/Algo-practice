/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
   //input: array
   //output: integer (largest sum)
   //edge case: nums.length >=1 return nums[0]
   //test case: [-3,-2,-1] -1, [-2,1,-3,4,-1,2,1,-5,4] 6
  //time: O(n), space O(1)
  //don't need to use negative sum to keep adding up
  if (nums.length === 1) return nums[0];
  let sum = nums[0];
  let max = nums[0];
  for (let i = 1; i<nums.length; i++) {
    //if sum < 0, use next elem as sum
    if (sum < 0) {
      sum = nums[i];
      //if sum > 0, sum adds next elem into sum
    } else {
      sum += nums[i];
    }
    //compare max and sum and replace max as the largest one
    max = Math.max(max, sum);
  }
  return max;
 };