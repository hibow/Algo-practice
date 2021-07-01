/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix1 = function(strs) {
    //input: an array of string elements
    //output: string
    //edge case: if string is empty return ''
    //test case: ['flower','flow','flight'] -> 'fl' ; ['dog', 'racecar', 'car'] -> '', [] = ''

    //1.compare from the first character of the first string with the rest of strings, initialize prefix as ''
    //if it is common prefix
    //add the next character of the first into the prefix -> repeat the comparison
    //return the prefix
    //time: O(S) -worse case: all string has the same length. O(nxm)
    //space: O(1)
    //let result = '';
    if (strs === null || strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    let first = strs[0];
    for (let i = 1; i <= first.length; i++) {
      let prefix = first.substring(0, i);
      //substring(0,1) -> return first element; substring(0, tail) -> return entire string
      //let count = 0;
      for (let j = 1; j < strs.length ; j++) {
        if (strs[j].indexOf(prefix) !== 0) {
          //not meet, remove the last element from prefix and return it
          return prefix.substring(0,prefix.length -1);
        }
      //} else {
        //  count++;
      }
      //if (count !== 0 && count === strs.length -1) result = prefix;
    }
    //return result;
    return first;
};

  var longestCommonPrefix2 = function(strs) {

    //2. compare the first string as prefix with the rest strings
    //if prefix is not included in any string
    //remove the last character of prefix ->repeat the comparison
    //if prefix is empty return '' or return prefix
    //time: O(s)-> all strings, sum of all characters in all strings
    //space: O(1)
    if (strs === null || strs.length === 0) return '';
    let prefix = strs[0];
    if (strs.length === 1) return prefix;

    //loop thru array from next element
    for (let i = 1; i < strs.length; i++) {
      //compare if contains prefix
      while(strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length -1);
        //remove the last character of prefix
        if (prefix === '') return '';
      }
    }
    return prefix;
  }

//divide and conquer
  var longestCommonPrefix3 = function(strs) {
    if (strs === null || strs.length === 0) return '';
    return divideString(strs, 0, strs.length-1);
  };
//recurrsion function to divide
/***
 * divide   lee   leed  lees leses
 * conquer      /\       /\
 *             lee      le
 *                  |
 *                  le
 */


  var divideString = function(strs, lidx, ridx){
    if (lidx === ridx){
      return strs[lidx];
    } else {
      let mid = (lidx + ridx) /2 ;
      let lString = divideString(strs, lidx, mid);
      let rString = divideString(strs, mid+1, ridx);
      return getCommonPrefix(lString, rString);
    }
  }

//get common prefix result function (conquer)
  var getCommonPrefix = function(lString, rString) {
    let minLen = Math.min(lString.length, rString.length);
    for (let i = 0; i<minLen; i++) {
      if (lString.charAt[i] !== rString.charAt[i]){
        return lString.substring(0, i);
        //remove the last character and return
      }
    }
    return lString.substring(0,min);
    //if all pass, return entire leftstring
  }

//


  //binary search