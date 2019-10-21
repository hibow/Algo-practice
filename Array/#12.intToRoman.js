/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
 */
/**
 * @param {number} num
 * @return {string}
 */



var intToRoman = function(num) {
  if(num > 3999 || num == 0 ){
      return 'No roman number';
  }
  let numLength = num.toString().length;
  let base = Math.pow(10, numLength -1);
  let ans ="";
  while(base > 0){
      let digit = parseInt(num/base)%10;
      ans+= getRoman(digit, base);
      base = parseInt(base/10);
  }
  return ans;
};

let romanMap = {
  "1": "I",
  "5": "V",
  "10": "X",
  "50": "L",
  "100": "C",
  "500": "D",
  "1000": "M"
}

function getRoman(digit, base){
  switch(digit){
      case 2:
          return getRoman(1, base) + getRoman(1, base);
      case 3:
          return getRoman(2, base) + getRoman(1, base);
      case 4:
          return getRoman(1, base) + getRoman(5, base);
       case 6:
          return getRoman(5, base) + getRoman(1, base);
      case 7:
          return getRoman(6, base) + getRoman(1, base);
      case 8:
          return getRoman(7, base) + getRoman(1, base);
      case 9:
          return getRoman(1, base) + getRoman(1, base*10);
       default :
          return (digit*base in romanMap) ? romanMap[digit*base] : "";

  }
}