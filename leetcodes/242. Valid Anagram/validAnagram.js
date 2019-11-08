/*
 * [Source]
 *
 * https://leetcode.com/problems/valid-anagram/
 *
 * [Problem Description]
 *
 * Given two strings s and t , write a function to determine if t is an anagram of
 * s.
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 *
 * [Comments]
 *
 *
 *
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  //edge case : if s len not equals t len return false
  //hash map or array for character's index
  if (t.length !== s.length) return false;
  const dict = {};
  for (let c of s) {
    dict[c] = (dict[c] || 0) + 1;
  }
  for (let c of t) {
    if (!dict[c]) return false;
    dict[c]--;
  }
  return true;
};
