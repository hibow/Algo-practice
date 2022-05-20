function isPalindrome(s: string): boolean {
  //set with 26 letters
  //iterate over the string
    //lower case and check if set has it
      //if not, remove it (but I don't know how to use slice to remove it, better use replace)
  //itearte over the string, with two pointers
    //check start and end if they are the sme
    //if not return false
  //return true
  //time O(n), spaceO(1)
  let newS = s.replace(/[^0-9a-zA-Z]/g, '');
  let mid = (Math.floor(newS.length/2))
  for (let i = 0; i < mid; i ++) {
    if (newS.charAt(i).toLowerCase() != newS.charAt(newS.length- 1-i).toLowerCase()) {
      return false
    }
  }
  return true

};