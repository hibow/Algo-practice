/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
    //input:integer
    //output: string
    //edge case: num >=1
    /**
     * int[27] = ZABCDEFGHIJKLMNOPQRSTUVWXYZ 
     * let col = ''
     * if num > 0,
     *   col = words[num%26] + col
     *   num = Math.ceil(num/26) -1
     *   50/26 = 1.xx -> 2
     *   52/26 = 2 -> 2
     *   53/26 = 2.xxxx ->3
     *   
     * test case: 26 
     *            52-> AZ 
     * 
     */
    let chars = 'ZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //use Z to replace 0 since it starts from 1 to 26
    let col = '';
    while(columnNumber) {
      col = chars[columnNumber%26] + col;
      columnNumber = Math.ceil(columnNumber/26) - 1
    }
    return col;
};