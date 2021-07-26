/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 var findLongestWord = function(s, dictionary) {
    //input: string, list of string
    //output: string 
    //edge case: if more than one ans, return the smallest lexicographical order; if no result, return empty string
    /**
     * two pointers -> time O(s.len * avg. str length in d = n * x), space = O(x)-> max str variable is used
     * 
     * iterate over the the dictionary to get each word
     *    if word can be part of the s (helper function)
     *       if word length > max_str.length -> max_str = word
     *       if word length == max _str.length
     *               compare the lexicographical order, max_str is the smallest one
     * return max_str
     * 
     * helper (wd, s) -> check if wd is part of s
     * iterate over wd and s with i and j from 0
     *       if s[i] = wd[j], j++
     *       i++
     *   return j == wd.length (if they are the same return true)
     * 
     * compareLex(s1, s2) -> worse time O(s1.length)
     * iterate over s1 and s2
     *   if s1[x] > s2[y] return s1
     *   if s1[x] < s2[y] return s2
     *   x++
     *   y++
     *   
     * return s1 
     * 
     * 
     */
  let max_str = '';
  let s_len = s.length;
    for (let idx = 0; idx < dictionary.length; idx ++) {
      let wd = dictionary[idx];
      let wd_len = wd.length;
      if (isSubsequence(s, wd)){
        if (wd_len > max_str.length) {
          max_str = wd;
        }
        if (wd_len === max_str.length){
          max_str = compareLex(wd, max_str)
        }
      }

    }

  return max_str;
};

const isSubsequence = function(s, wd){
  let i = 0;
  let j = 0;
  while(i < s.length  && j < wd.length ){
    if (s.charAt(i) === wd.charAt(j)){
      j++;
    }
    i++;
  }
  return j === wd.length;
}

const compareLex = function(s1, s2) {
  for (let x= 0,y = 0; x < s1.length; x++, y++) {
    if (s1.charAt(x) > s2.charAt(y)) return s2;
    if (s1.charAt(x) < s2.charAt(y)) return s1;
  }
  return s1;
}