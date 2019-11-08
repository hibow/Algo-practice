/*
 * [Source]
 *
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 *
 * [Problem Description]
 *
 * Given a string s and a non-empty string p, find all the start indices of p's
 * anagrams in s.
 * Strings consists of lowercase English letters only and the length of both
 * strings s and p will not be larger than 20,100.
 * The order of output does not matter.
 * Example 1:
 * Input:
 * s: "cbaebabacd" p: "abc"
 *
 * Output:
 * [0, 6]
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 * Example 2:
 * Input:
 * s: "abab" p: "ab"
 * Output:
 * [0, 1, 2]
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 *
 * [Comments]
 *
 * ##sliding windows
 * * Input:
 * s: "cbaebabacd" p: "abc"
 *
 * count = 3
 * put p into obj
 * if meets all the rules and counting down to 0 then push b into result array

                     
  1. hash map -> limit to 26 characters array will save time and space


 * note: possible multiple sliding window at the same time
 * note: p could be repeatable char ex: a a
 * note: ETL with for loop
 * Output:
 * [0, 6]
 *
 *
 *
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  //edge case -> not found -> return []
  //time complexity O (n)
  let result = [];
  let pObj = [];
  for (let i = 0; i < p.length; i++) {
    if (pObj[p[i]]) {
      pObj[p[i]]++;
    } else {
      pObj[p[i]] = 1;
    }
  }

  let count = p.length;

  for (let end = 0; end < s.length; end++) {
    //possible window starts
    //remove from pObj if current char is contained in p
    if (pObj[s[end]] !== undefined) {
      pObj[s[end]]--;
      if (pObj[s[end]] >= 0) {
        count--;
      }
    }
    //reset pObj when end > p.length and add back the value at end - p.length + 1 (the beginning of sliding window)
    if (end >= p.length) {
      if (pObj[s[end - p.length]] === 0) {
        count++;
      }
      pObj[s[end - p.length]]++;
    }
    //check final count, if it is 0 then push to result
    if (count === 0) {
      result.push(end - p.length + 1);
    }
  }
  return result;
};

//TLE
/**
 var findAnagrams = function(s, p) {
  //edge case -> not found -> return []
  //time complexity O (n)
  //variable
  //let b = beginning index
  let b = null;
  //let count = length of p
  //let result = []
  let result = [];
  //put p into hash map
  let pObj = [];
  for (let i = 0; i < p.length; i++) {
    if (pObj[p[i]]) {
      pObj[p[i]]++;
    } else {
      pObj[p[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    //possible window starts
    //create a current window loop
    let count = p.length;
    let obj = Object.assign({}, pObj);
    b = null;
    let j = i;
    while (p.includes(s[j]) && count > 0 && j < s.length) {
      //iterate until ends
      if (b === null) {
        b = j;
      }
      if (obj[s[j]]) {
        obj[s[j]]--;
        if (count === 1) {
          result.push(b);
          break;
        }
      } else {
        break;
      }
      //point to next index
      j++;
      count--;
    }
  }
  return result;
};
 * 
 */

let s1 = "baa";
let s2 = "aa";

let a = findAnagrams(s1, s2);
console.log(JSON.stringify(a));
