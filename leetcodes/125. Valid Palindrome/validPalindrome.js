/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    //input: string
    //output: boolean
    //edge case: at least one character in string but if null -> return true
    //create front and back
    //time(O(2n)) , space O(n)
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    let front = 0
    let back = s.length -1;
    //iterate over the string with front and back
    while(front <= back) {
    //time O(n/2)
      if(s.charAt(front) !== s.charAt(back)) return false;
        front ++;
        back --;
    }
      //return true as defaul
      return true;
};