/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
/***note: toString()
 * toString(2) -> binary 
 * toString(8) octal
 * toString(10) decimal
 * toString(16) hexadecimal
 * 
 * xor -> 1 0 0 1 1  with 0 1 1  1 1 ->1 1 1 0 0 -> get the difference between two bits sets
 * 
 * 
 * 1) convert x ^ y toString(2)-> trim 0 -> get length 
 *   time o(n)
 * 2) count all the 1s in x ^ y (count set bits) with Brian Kernighan's algorithm
 *     n & (n - 1) can turn off the rightmost set bit of a number n -> until n === 0
 *   time worse case O(n) 
 */

 var hammingDistance = function(x, y) {
    let num = x ^ y;
    let str = num.toString(2).replace(/0/g,"")
    return str.length;
 };



 var hammingDistance = function(x, y) {
    //input: integers > 0
    //output: integer 
    //edge case: x y should > 0 
    //how to deal with negative integer?
    if (x === 0 && y === 0) return 0;
    let num = x ^ y;
    let count = 0;
    while (num !== 0) {
      count ++;
      num = num & (num - 1);
    }
    return count;
};

