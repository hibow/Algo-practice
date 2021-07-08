/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    //input: string
    //output: string
    //edge case: 
    /**
     * similar to addBinary.js
     */
  let nIdx1 = num1.length - 1;
  let nIdx2 = num2.length -1;
  let carry = 0;
  let str = '';
  while (carry || nIdx1 >=0 || nIdx2 >=0 ){
    let nInt1 = (nIdx1 >=0)? parseInt(num1[nIdx1--]) : 0;
    let nInt2 = (nIdx2 >=0)? parseInt(num2[nIdx2--]) : 0;
    let sum = nInt1 + nInt2 + carry;
    let sInt = sum %10
    carry = (sum > 9)? 1 : 0;
    str = sInt + '' + str;
  }
  return str;
};