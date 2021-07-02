/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    //input: string
    //output: number (length of last word)
    //edge case: if no last word, return 0
    //create len as result and set it to 0
    let len = 0;
    if (s.length === 0) return len;
    //iterate over the string from last character
    for (let i = s.length -1; i >=0 ;i--){
      //if not space, add 1 to lengh
      if (s[i] !== ' '){
        len ++;
      } else if (len !== 0) {
      } //consider there are spaces following by the last word, only return when lastword is counted.
        //else return len
        return len;
    }
    //return len
    return len;
};