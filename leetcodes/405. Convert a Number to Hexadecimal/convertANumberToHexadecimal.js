/**
 * @param {number} num
 * @return {string}
 */
 var toHex = function(num) {
  //input: integer
  //output: string
  //edge case: if num < 0, 
  /** 
    1) 
    complement: n + n's complement = 0
    complement = (the max number in the same bits) - n + 1
    2) bit operator

  **/
  if (num === 0) {
    return 0;
  }
  let words = '0123456789abcdef';
  let hex = '';
  if (num > 0) {
    while (num) {
      hex = words[num %16] + hex;
      num = parseInt(num/16);
      }
  } else {
    hex = toHex(0xffffffff - Math.abs(num) + 1);
    //0xffffffff = Math.pow(2,32) - 1
  return hex;
  }
};