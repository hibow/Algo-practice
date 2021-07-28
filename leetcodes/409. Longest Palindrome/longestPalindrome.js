/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    //intput: string
    //output: number
    //edge case: it only contains upper case or lower case english letters, at least length =1
    if (s.length === 0) return 0;
    //use hashmap to get letter counts,
    const strMap = {}; 
    let sum = 0;
    let addOdd = false;
    for (let i = 0; i < s.length; i++) {
      if (!strMap[s[i]]){
        strMap[s[i]] = 1;
      }  else {
        strMap[s[i]] ++;
      }
    }
    //if counts is even number -> add into sum
    //if counts is odd number -> if >= 1 -> add the count - 1 to sum
    for (let c in strMap) {
      if (strMap[c] % 2 === 0 ) sum = sum + strMap[c];
      if (strMap[c] %2 !== 0 && strMap[c] > 2) {
        sum = sum + strMap[c] - 1;
        addOdd = true;
      }
      if (strMap[c] === 1) addOdd = true;
    }
    //add 1 as the last odd counts
    return addOdd? sum + 1 : sum ;
    //return sum
    //time: O(n) , space: O(n) -> strMap
};

//2. one for loop solution, only count to 2 and then add into sum and reduce 2 in counts
//if there is more than one count left, add one in final sum