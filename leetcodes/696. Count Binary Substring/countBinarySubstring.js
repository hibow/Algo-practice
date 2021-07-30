/**
 * @param {string} s
 * @return {number}
 */
 var countBinarySubstrings = function(s) {
    //input: string
    //output: integer
    /**
     * Scan the different group: time O(N), space O(1)
     * ex: 00110011 -> 0011, 01, 10, 1100, 01, 0011 (count 0's == 1's)
     * count = 0, preLen = 0, curLen = 1 (start from 1)
     * iterate over the string,  (start from 1)
     *   get different group length based on if current == previous
     *     curLen ++
     *   else, preLen = curLen and curLen = 1 (recalculate the new group)
     *   if preLen >= curLen, count++ (at least count 10 in 110 group)
     * return count
     */
  let count = 0; 
  let preLen = 0;
  let curLen = 1;
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i - 1)) {
      curLen ++;
    } else {
      preLen = curLen;
      curLen = 1;
    }
    if (preLen >= curLen) {
      count ++;
    }
  }
  return count;
};