/*
 * [Source]
 *
 * https://leetcode.com/problems/single-number/
 *
 * [Problem Description]
 *
 * Given a non-empty array of integers, every element appears twice except for
 * one. Find that single one.
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it
 * without using extra memory?
 * Example 1:
 * Input: [2,2,1]
 * Output: 1
 * Example 2:
 * Input: [4,1,2,1,2]
 * Output: 4
 *
 * [Comments]
 *
 *    no extra memory -> constant space -> bit manipulation
 *      a xor 0 = a
 *      a xor a = 0
 *      a xor a xor b = b
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  //constraints: space O(1), time O(n)
  let a = 0;
  for (let i = 0; i < nums.length; i++) {
    a ^= nums[i];
  }
  return a;
};
