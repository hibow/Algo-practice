/**
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,|3  → 1,3,2
3,2,1 → 1,2,3
1,1,| 5 → 1,5,1
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
   *                  7   2   5   2   |  3   1
   *    check right                    |  3   1
   *    preIdx = 3                ^
   *    compare with suffix       2    |  3
   *    replace      7   2    5   3      2   1
   *
   *    arrange       7   2 |  5   3    2   1
   *    check right         |  5   3    2   1
   *    preIdx = 1          |   5   3   2  1
   *                      2  |      3
   *
   *    replace        7  3   5  2  2  1
   *
   *    revert         7   3  1 2  2  5
   *
   *    check right                5   5
   *    check suffix               [5]
   *    replace        7   3  1  2  5 | 2
   *    revert /arrange 7  3  1  2  5  2
   */

     //find suffix
    //no suffix
     //reverse
   //has suffix
     //swap with last prefix
     //reverse suffix


  let n = nums.length;
  if (n < 2) {
    return nums;
  }
  let idx = nums.length -1;
  while (idx > 0) {
    if (nums[idx - 1] < nums[idx]) {
      break;
    }
    idx --;
  }
  if (idx === 0) {
    reverseSort(nums, 0, n-1);
    return;
  } else {
    let val = nums[idx -1];
    let sIdx = n - 1;
    while( sIdx >= idx) {
      if (nums[sIdx] > val) {
        break;
      }
      sIdx --;
    }
    //swap
    swap(nums, idx - 1, sIdx);
    //reverse
    reverseSort(nums, idx, n -1)
    return;
  }
}

var swap = function(arr, idx1, idx2) {
  let temp = arr[idx2];
  arr[idx2] = arr[idx1];
  arr[idx1] = temp;
}
var reverseSort = function(arr, start, end) {
  if (start > end) {
    return;
  }
  for ( let i = start ; i <= (start + end)/2; i++) {
    swap(arr, i, start + end - i);
  }

}


var data = [7, 2, 5, 3, 2, 1];
var a = nextPermutation(data);
console.log(data);
