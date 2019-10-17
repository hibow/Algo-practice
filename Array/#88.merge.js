/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
 */

/**                 
 *    2   5   6               1   2  3
 *            6            3 
 *                    6
 *        5                  3           
 *                  5  6  
 *    2                      3      
 *                3  5  6
 *    2                       2
 *             2  3  5  6
 *    2                       1
 *            2 2 3  5  6
 *          1 2 2 3 5 6             
 * 
 *  

  
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
  //input: array, number, array, number
  //output: no return, mutate nums1
  //constraints O(n) , O(1) space

  //point1 start from m-1th element of nums
  let idx1 = m - 1;
  //point2 starts from n-1th element of nums2
  let idx2 = n - 1;
  //cur  starts from last elements of nums (n+m -1)
  let curIdx = m + n - 1;
  while (idx2 >= 0) {
    if (nums1[idx1] >= nums2[idx2]) {
      nums1[curIdx] = nums1[idx1];
      idx1--;
      curIdx--;
      console.log(nums1);
    } else {
      nums1[curIdx] = nums2[idx2];
      idx2--;
      curIdx--;
      console.log(nums1);
    }
  }
  //iterate over both arrays when point1 or point2 is not undefined
  //if point1 is greater than point2
  //assign point1 value to cur value
  //decrease 1 to point1's index
  //decrease 1 to cur index
  //else
  //assign point2 value to cur value
  //decrease 1 to point2's index
  //decrease 1 to cur index
  return nums1;
};

/**
 * test case:
 */

var nums1 = [-1, -1, 0, 0, 0, 0],
  m = 4;
var nums2 = [-1, 0],
  n = 2;

var a = merge(nums1, m, nums2, n);
console.log(a);
