/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
  //input: numbers array
  //output: integer
  //edge case: if not 1 or not 0
  /**
    use max to track max, use count to track whenever 0 comes = 0
    iterate over the array,
    if i = 1, count +=1
    else i = 0, max = max(max, count), count = 0
    return max
  */
  let max = 0;
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    count = (nums[i] === 0) ? 0 : count += 1;
    max = Math.max(max, count);
  }
  return max;
};