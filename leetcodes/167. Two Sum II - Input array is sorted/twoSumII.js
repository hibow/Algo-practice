/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    //input: array of numbers, target integer
    //output: array of numbers(1-indexed of indices)
    //edge case: there is exactly one
    //test case: worse case: [0,1,2,3,4,5,6,7] target = 1 -> time O(n), space O(1)
    //create a result array int[2]
    //let result = [];
    //set left pointer from 0, set right pointer from the last one of array
    let left = 0;
    let right = numbers.length -1;
    //iterate over the sorted array while left is less than right
    while( left < right) {
      //create curVal as numbers[left] + numbers[right]
      let curVal = numbers[left] + numbers[right];
      //if curVal = target return [left +1, right + 1]
      if (curVal === target) return [left +1, right +1];
      //move those pointers
      //if curVal > target, right move the prev one
      if (curVal > target) right --;
      //if curVal < target , left move the next one
      if (curVal < target) left ++;
    }

};