/**
 * @param {number} num
 * @return {string}
 */
 var convertToBase7 = function(num) {
   //input: integer
   //output: string
   //edge case: num < 0
   /***
    * 100 -> 202
    * -7 -> -10
    * 
    * 2    0   2
    * 7^2 7^1 7^0
    * 
    * use recursive:
    * if <0 add '-'
    * if < 7 add num + ''
    * return convert(num/7) + num%7
    */
  if (num < 0) {
    return '-'+convertToBase7(-num);
  }
  if (num < 7) {
    return num + '';
  }
  return convertToBase7(Math.floor(num/7)) + num%7;
};