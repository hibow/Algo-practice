/*
 * [Source]
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * [Problem Description]
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * Example 1:
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * Example 2:
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * Example 3:
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Note that the answer must be a substring, "pwke" is a subsequence
 * and not a substring.
 *
 * [Comments]
 *
 *
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  //input string
  //output number
  /**
   *                 a  b  c a b c b b
   *  obj
   *   s(substring)
   *   e
   *  ans
   *
   */
  //decalare the obj store the
  //iterate over the string
  //
};

/**
   *
  var lengthOfLongestSubstring = function(s) {
      let ans = 0;
      let start = 0;
      let data = {};
      let arr = s.split('');

      for(end = 0; end < s.length; end++){
         let curr = data[arr[end]];
         if(curr != null && start <= curr){
             start = curr + 1;
         }else{
             ans = Math.max(ans, end-start+1);
         }
          data[arr[end]] = end ;
      }
      return ans;
  };

   */
/**
 * Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  //input string
  //output number
  /**
   *                 a  b  c a b c b b
   *  obj
   *   s(substring)
   *   e
   *  ans
   *
   */
  //decalare the obj store the
  //iterate over the string
  //
};

/**
     *
    var lengthOfLongestSubstring = function(s) {
        let ans = 0;
        let start = 0;
        let data = {};
        let arr = s.split('');
    
        for(end = 0; end < s.length; end++){
           let curr = data[arr[end]];
           if(curr != null && start <= curr){
               start = curr + 1;
           }else{
               ans = Math.max(ans, end-start+1);
           }
            data[arr[end]] = end ;
        }
        return ans;
    };
    
     */
