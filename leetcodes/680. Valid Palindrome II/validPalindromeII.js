/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    //input: string
    //output: boolean
    //edge case: s.length >=1, lowercase letters
    /**
     * two pointers:  time O(n), space O(1)
     * 
     * if s.length = 1, return true
     * use two pointers to track the head and the tail when h < t
     *    if head is not tail
     *             ansFromH = head ++ , and run checking helper function for current h and t
     *             ansFromT= tail --, and run checking helper function for current h and t
     *     return ansFromH || ansFromT
     * return true
     * 
     * helper function(s, h, t)
     * iterate this action while (h < t) 
     * if (h is not t) return false
     * 
     * return true
     * 
     */
  let h = 0; 
  let t = s.length -1;
  while(h < t) {
    if (s.charAt(h) !== s.charAt(t)) {
      return isPalindrome(s, h+1, t) || isPalindrome(s, h, t-1);
    }
    h++;
    t--;
  }
  return true;
};

const isPalindrome = function(s, h, t) {
  while (h < t) {
    if (s.charAt(h) !== s.charAt(t)){
      return false;
    }
    h++;
    t--;
  }
  return true;
}