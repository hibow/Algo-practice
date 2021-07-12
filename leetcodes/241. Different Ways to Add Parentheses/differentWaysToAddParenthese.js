/**
 * @param {string} expression
 * @return {number[]}
 */
 var diffWaysToCompute = function(expression) {
    //input: string
    //output: array
    //edge case: no expression, return [num]
    /**
     * use divide an conquer  in recursive function : time : Catalan Number O(n!)
     * 
     * recursive func:
     * create ans = []
     * iterate over the string, to find expression ( +, -, *)
     *   if found -> get left substring(0, i before expression) -> run this recursive function 
     *               get right substring(i+1 after expression) -> run this recursive function
     *   iterate over left
     *    iterate over right
     *        do switch based on expression
     *                if +: push (l+r) into ans array, etc.
     * if ans.length is 0, ans.push(parseInt(input))
     * return input
     * 
     * 
     */
  const ans = [];
  for (let i = 0; i < expression.length; i++) {
    let ch = expression.charAt(i);
    if (ch === '+' || ch === '-' || ch ==='*') {
      let left = diffWaysToCompute(expression.substring(0, i));
      let right = diffWaysToCompute(expression.substring(i+1));
      for (let l of left) {
        for (let r of right) {
          switch(ch){
            case '+':
              ans.push(l+r);
              break;
            case '-':
              ans.push(l-r);
              break;
            case '*':
              ans.push(l*r);
              break;
          }
        }
      }
    }
  }
  if (ans.length === 0) {
    ans.push(parseInt(expression));
  }
  return ans;
};
