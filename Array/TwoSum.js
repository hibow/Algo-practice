/**
 *
 *Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  example:
  Given nums = [2, 7, 11, 15], target = 9,
  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].

   */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
//input: an array of numbers, a number
//output: an array of numbers (two numbers)
//constraints: O(n^2), only one solution
//edge case: no null case

//brute force O(n^2)
//iterate over the array
  // for (let i = 0; i < nums.length; i++) {
  //   //for each number (index = i)
  //   //iterate over the array except itself (index = j , i doesn't equal to j)
  //   for (let j = i + 1; j < nums.length; j++) {
  //     //add the current number and check if it equals to target
  //     if (nums[i] + nums[j] === target) {
  //       //if yes, return [i, j]
  //       return [i, j];
  //     }
  //   }
  // }
  //one pass hash table: O(n)
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let remain = target - nums[i];
    if (obj[remain] !== undefined && obj[remain] !== i) {
      return [ obj[target - nums[i]], i ];
    }
    obj[nums[i]] = i;
  }

};

//          2     7    11   15
// add    7 11   2
// sum    9
//obj    obj[2] = i
//if      obj[9-7] exists -> return [i, j] => O(n)


/**
 * Test case
 */
var a = twoSum([3, 2, 4 ], 6);
console.log(a);