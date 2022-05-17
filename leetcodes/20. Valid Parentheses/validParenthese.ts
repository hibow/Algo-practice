function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i: number = 0; i < s.length; i ++) {
    if (s.charAt(i) === '(') stack.push(')')
    else if (s.charAt(i) === '[') stack.push(']')
    else if (s.charAt(i) === '{') stack.push('}')
    else if (s.charAt(i) !== stack.pop()) return false //it will keep stack.pop() til no elem in stack
  }
  return stack.length === 0 //if s = '['
};
//time O(n) space O(n)