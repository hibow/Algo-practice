/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    //input: string
    //output: string
    //edge case:
    /***
     * let aIdx = alen - 1; bIdx = blen -1
     * repeat iterations until a.length <=0, b.length <=0, carry =0
     * aInt = parseInt(a[aIdx])
     * bInt = .. 
     *  sum = aInt + bInt+ carry
     *  sInt = (sum >= 2)?
     * carry = (sum >= 2)?
     *  str = sInt + '' + str;
     * 
     * or add carry + 1 when a = 1, b = 1, 
     * use carry % 2 to calculate the sum
     * use carry /2 to get the next carry
     * 
     * return str 
     * 
     */

    let aIdx = a.length -1;
    let bIdx = b.length -1;
    let carry = 0;
    let str = '';
    while(carry || aIdx>=0 || bIdx>=0) {
      let aInt = (aIdx>=0)? parseInt(a[aIdx--]) : 0;
      let bInt = (bIdx >=0)? parseInt(b[bIdx--]) : 0;
      let sum = aInt+ bInt + carry;
      let sInt = (sum ===2)? 0: sum;
      sInt = (sum > 2) ? 2 - carry : sInt
      carry = (sum >= 2)? 1:0;    
      str = sInt + '' + str;
    }
    return str;
};