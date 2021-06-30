/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
   //similar to no9.
   //input: int 
   //output: int
   //edge case: if ans > int_max or ans < int.min return 0
   if (x>2**31 - 1 || x < -(2**31)) return 0;
    let ans = 0;
    while( x != 0){
      ans = 10 * ans + x % 10;
      x = (x - x%10) /10;
    }
    return (ans > 2**31 -1 || ans < -(2**31))? 0 : ans;
};