/**
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  //input: array
  //output: array
  //constraints: O(n)
  //edge case: if no next permutation, return the lowest possible order
  /**
   *                  7   2   5   2   3   1
   *    check right               3    3   1
   *    arrange       7   2   5   3    2   1
   *    check right       5   5   3    2   1
   *    check suffix      5   3   2  1
   *    replace        7  3   5 2  2  1
   *    revert         7   3  1 2  2  5
   *    check right                5   5
   *    check suffix               [5]
   *    replace        7   3  1  2  5 | 2
   *    revert /arrange 7  3  1  2  5  2
   */
  //initialize an object to store the last prefix number and its index
  let preLast = []; //idx, value
  //iterate over the array from the right (end)
  let idx = nums.length - 1;
  let suffix = 0;
  //for each number
  //until the number is the less than previous number
  while (nums[idx] >= suffix && idx > 0) {
    suffix = nums[idx];
    idx--;
  }
  console.log(suffix);
  if (idx === 0 && nums[idx] >= suffix) {
    //next premutation has to be lowest order
    //sort
    nums.sort(function(a, b) {
      return a - b;
    });
    //return nums
    console.log(nums);
    return;
  } else {
    //save the last prefix number and its index
    preLast = [idx, nums[idx]];
    console.log(preLast);
    //replace:
    //iterate over the array from the suffix index to the end
    for (let i = idx + 1; i < nums.length; i++) {
      //compare the number with last prefix number

      //if it is greater than or equal to the number
      if (preLast[1] >= nums[i]) {
        let temp = preLast[1];
        //swap the previous number with last prefix number
        nums[preLast[0]] = nums[i - 1];
        nums[i - 1] = temp;
        console.log(nums);
        break;
      }

      if (i === nums.length - 1) {
        let temp = preLast[1];
        nums[preLast[0]] = nums[i];
        nums[i] = temp;
        break;
      }
    }
    console.log(nums);
    //revert:
    let right = nums.length - 1;
    let left = preLast[0] + 1;
    //iterate over the nums from suffix to the end
    //repeat until left index is equal to right index
    while (left !== right && right > left) {
      let temp = nums[left];
      //swap left with right
      nums[left] = nums[right];
      nums[right] = temp;
      //left ++
      console.log(nums);
      left++;
      //right --
      right--;
    }
    return;
  }
};

var data = [5, 1, 1];
var a = nextPermutation(data);
console.log(a);
