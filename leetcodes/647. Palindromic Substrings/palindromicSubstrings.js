/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    //input: string
    //output: integer
    /**
     * 
     * DP -> time O(N*N)-> iterate over the string and expand based on the center, space O(1)
     * set cnt is 0
     * iterate over the s, 
     *    set start is i, if i < end, 
     *      countpalinString(s, start, start)
     *      countPalinString(s, start, start + 1)
     * return cnt
     * 
     * countPalinString(s, start, end)
     *   while(start >=0, end <s.length; s[start] = s[end])
     *    start--, end++, count ++
     *    get palindrome from the center, make sure having different centers
     *   
     */
   let cnt = 0;
   const countPalinString = (s, start, end) => {
      while(start >=0 && end < s.length && s.chartAt(start) === s.chartAt(end)){
         cnt++;
         end++;
         start--;
      }
   }
   for (let i = 0; i < s.length; i++) {
      countPalinString(s, i, i);
      countPalinString(s, i, i + 1);
   }
   return cnt;
};

