/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumProduct = function(nums) {
    //input: numbers array
    //output: integer
    //edge case: any duplicate number?
    /**
     *  1) brute force-> consider each triplet product and compare the max
     *   time O(n^3) , space O(1)
     *  2) sorting the array
     *     < 0  0 > 0
     *     max( num 0 x 1 x last, num lastx last -1 x last -2)
     *     time O(nlogn)-> sorting,  space O(logn) -> sorting
    *   3) single scan
    *      instead of sorting, just iterate over the array to get the above 5 numbers: min1, min2, max1,max2, max3
    *      
    *      note: default value of min and max based on the requirement, it has to be different for min and max.\
    *           -1000<= n <= 1000 
    *      
    *      time O(N), space O(1)
     */
  let min1 = 1000;
  let min2 = 1000;
  let max1 = -1000;
  let max2 = -1000;
  let max3 = -1000;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= min1) {
      min2 = min1;
      min1 = nums[i];
    } else if (nums[i] <= min2){
      min2 = nums[i];
    }
    if (nums[i] >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = nums[i]
    } else if (nums[i] >= max2){
      max3 = max2;
      max2 = nums[i];
    } else if (nums[i] >= max3) {
      max3 = nums[i];
    }
  }
  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};