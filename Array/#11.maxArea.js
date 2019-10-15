/**
 * #11
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
 * Find two lines, which together with x-axis forms a container, such that the container contains the most water.

     Note: You may not slant the container and n is at least 2.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  //input: an array of numbers
  //output: number
  //                 1     8      6     2    5    4    8    3     7
  // [l,r] =        [0,8]
  //                    [1, 8]                        [1, 6]    [1,8]
  // h =             1      7                            8
  // area=                49                            40
  // max =                 49
  //constraint O(n)
  //default max = 0
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  let array = [left, right];
  // two pointer in one loop, left and right
  while (array[0] !== array[1]) {
    //push the indexes of max left and max right in array

    //assign the min of max left and max right to h
    let h = Math.min(height[array[0]], height[array[1]]);
    //assign h * (array[1] - array[0]) to area
    let area = h * (array[1] - array[0]);
    //if area is greater than max, assign area to max
    if (area > max) {
      max = area;
    }
    //check min value of height[array[0]] and height[array[1]]
    //if array[0], check height[array[0] + 1]
    if (height[array[0]] < height[array[1]]) {
      array[0] = array[0] + 1;
      //if array[1], check height[array[1] -1]
    } else if (height[array[0]] >= height[array[1]]) {
      array[1] = array[1] - 1;
    }
  }
  //repeat until array[0] is equal to array[1]

  return max;
};

/**
 * Test Case
 */
var h = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var a = maxArea(h);
console.log(a);
