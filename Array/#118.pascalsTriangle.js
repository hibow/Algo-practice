/**
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 *  Algorithm -
  Although the algorithm is very simple, the iterative approach to constructing 
  Pascal's triangle can be classified as dynamic programming because we construct each row based on the previous row.
 *
 *   [  [1], [1, 1], [1, 2, 1]]
 *   1            default [[1]]   counter 1
 *   1 1          iterate over [1] ->  push 1, check next element if exist and add onto 1, push to array; if not, push 1
 *   1 2 1
 *   1 3 3 1
 *   1 4 6 4 1
 *   1 5 10 10 5 1
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  //input: number
  //output: an array of multiple arrays based on input
  //edge case: if input is null or 0, then return []
  //constraints: O(n^2)
  //initialize an array [] and push [1] as default and an counter 1
  let result = [];
  if (!numRows) {
    return result;
  }
  let counter = 1;
  //repeat the following until count is equal to numRows
  while (counter <= numRows) {
    //check the previous element, iterate over it
    let newArr = [];
    //push 1 to new array
    newArr.push(1);
    //if other element exist, add to previous element and push it to new array
    if (result.length && counter > 2) {
      let preElm = result[counter - 2];
      for (let i = 1; i < preElm.length; i++) {
        newArr.push(preElm[i] + preElm[i - 1]);
      }
    }
    //push 1 to new array
    if (counter > 1) {
      newArr.push(1);
    }
    result.push(newArr);
    //push new array to result array
    counter++;
  }
  return result;
};

var a = generate(5);
console.log(JSON.stringify(a));
