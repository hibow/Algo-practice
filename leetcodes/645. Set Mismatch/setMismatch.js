/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
   //input: numbers array
   //output: array int[2]
   //edge case: if no found [-1, 1]
  //nums[i] is [1,n]
  /**
   * test case: [2 2], [3 2 2], [3 2 3 5 6] [1 2 2 4] [1 2 4 4] [1,5,3,2,2,7,6,4,8,9]
   * 1) sorting the array -> time (nlogN), space[logn] -> from sorting
   *
   * sorting method:
   * function compareNumbers(a, b) {
         return a - b;
      }
   *
   * if len = 2, ans [0] = nums[0], ans[1] = nums[0] -1
   * len >=2
   *  iterate over the array
   *  if //dupicate
   *    nums[i] == nums[i -1]
   *    ans[0] = nums[i]
   *  else if //missing
   *    nums[i] !== i + 1 (based on the len of nums)
   *    ans[1] = i + 1
   *
   * if first element not 1-> ans[1] -> get first missing one
   * else if !ans[1], ans[1] = length -> get last missing one
   * return ans
   */
  var compareNumbers = function(a, b){
    return a-b;
  }
  let ans= []
  nums.sort(compareNumbers);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      ans[0] = nums[i]
    }else if (nums[i] > (nums[i - 1] + 1)){
      ans[1] = nums[i - 1] + 1
    }
  }
  if (nums[0] !== 1) {
    ans[1] = 1
  } else if (!ans[1]) {
    ans[1] = nums.length;
  }
  return ans;
};
