/**
 * s = "I am a student"
Return "student a am I"
 * 
1) reverse string:
   time O(2n), space O(2n)
   iterate over the string and push it into stack
   add the stack.pop() into a new string
2) reverse string and words
   time O(2n), space O(2n)
   split s into array with ' '
   pop the array and join them with ' ' into a new string

 */
const reverseString = function(s) {
  let res = '';
  let arr = s.split(' ');
  for (let i = 0; i < arr.length; i ++) {
    if (i !== arr.length -1) {
      res += arr.pop() + ' ';
    } else {
      res += arr.pop();
    }
  }
  return res;
}
