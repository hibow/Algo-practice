/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  //input: character[]
  //output: character[]
  //edge case: modify s in -place ->space O(1);
  //s.length >=1
  let len = s.length;
  for (let i = 0, j = len -1; i < len/2; i ++, j--) {
    //time O(n/2)
    //swap s[i] with s[j]
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
  return s;
 };