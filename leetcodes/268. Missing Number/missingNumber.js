/**
 * @param {number[]} nums
 * @return {number}
 */
/**
  1) sorting array, 
     iterate over the sorted array to check if it's the same with its index number
     time O(nlogn)-> sorting func
     space O(1 or n) -> depends on if the sorted array is new one or sort-in-place
  2) use hashset to store , and iterate over the expectednumbers to check if it included in hashset
     time O(2n), space (n)-> hashset
     
  3) bit manipulation
    use xor to xor with the expected number, the last one is the missing one
    time O(n) , space O(1)
  
  4) math 
    sum up all the expected number - all num in nums = the last missing one
    use (upper len + bottom len) * nums.lengh /2
    time O(n), space O(1)
 */
 var missingNumber = function(nums) {
   let sum = (1 + nums.length) * nums.length / 2;
   let nSum = 0;
   for (let i = 0; i < nums.length; i++) {
    nSum += nums[i];
   }
   return sum - nSum;
};