/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
    //input: integer array
    //output: integer array
    //edge case: if can't find the ans, put -1 instead-> we can fill -1 as default answers
    /**
     * time O(n), space O(2n)
     * 
     * create answer array and fill with -1
     * create stack for index
     * iterate over the nums twice (search the ans circularly)
     *   do this while stack is not empty and nums[index] > nums[stack.peek()]
     *      put ans[stack.pop() -> preIdx] = nums[index]
     *   push index to stack
     * return answer
     */
    let n = nums.length;
    let answer = new Array(n).fill(-1)
    let stack = [];
    for (let i = 0; i < 2*n; i++) {
      let num = nums[i % n];
      //avoid counting i twice
      while( stack.length && num > nums[stack[stack.length - 1]]){
        let j = stack.pop();
        answer[j] = num;
      }
      if (i < n) {
        stack.push(i)
      }
    }
    return answer;
};