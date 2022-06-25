/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
  //time O(nm) spaceO(n)
    let f = new Array(s.length + 1).fill(false)
    f[0] = true
    for (let i = 1; i <= s.length; i++) {
      for (let str of wordDict) { //based on the data type of wordDict,  if it is map, we can use contains
        if (str.length <= i) {
          if (f[i - str.length]) { //last str length position
            if (s.substring(i - str.length, i) === str) {
              f[i] = true //each length of str
              break;
            }
          }
        }
      }
    }
  return f[s.length]
};
