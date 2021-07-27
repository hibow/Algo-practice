/***
 * 
 * s1 = AABCD, s2 = CDAA
    Return : true
 * 
 */
const rightShift = function(s1, s2) {
  //input: two strings
  //output: boolean
  /**
   * time O(2n), space O(1)
   * s2 should be included in s1s1 
   *  iterate over s1s1, 
   *    if s1s1[i] == s2[j]
   *         c++
   *    if c==s2.length return true
   *  return false
   */
  s1 = s1+s1;
  let j = 0;
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
     if (s1.charAt(i) === s2.charAt(j)) {
      count++;
     }
     if (count === s2.length) return true;
  }
  return false;
}