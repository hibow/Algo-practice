/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  //input: string
  //output: boolean
  //edge case: s.length >=1 , if length is odd number return false
  //time: o(n), space:o(n/2) to o(n)
  let len = s.length;
  if (len % 2 !==0) return false;
  //create a stack
  let temp = [];
  //iterate over the string
  for (let i = 0; i < len; i++) {
    //if char is ( -> push ) to stack
    if (s.charAt(i) === '(') {
      temp.push(')');
      //else if char is [ -> push ] to stack
    } else if (s.charAt(i) === '['){
      temp.push(']');
      //else if char is { -> push } to stack
    } else if (s.charAt(i) === '{'){
      temp.push('}');
      //else if stack is empty or char not equals stack.pop() -> return false -> it will run stack.pop() in this line
    } else if (temp.length === 0 || s.charAt(i) !== temp.pop()) return false;
  }
  return temp.length === 0;
    //return stack.length === 0
};