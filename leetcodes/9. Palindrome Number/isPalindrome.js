/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    //input: integer
    //output: boolean
    //edge case if less than 0, it is false
    //test case:
    /**
     * 121 : true, -121: false, 10: false, -101: false
     */
    //if x < 0, x %10 == 0 but x != 0 return false
    if ((x < 0) || (x%10 == 0) && (x!= 0)) return false;
    //convert int to array -> take extra space
    //partition this array to p = floor(x.length >> 1)
    //set r and l as pointers moving from right and left sides of the array
    //r as p-1, l as arr.length - 1
    //iterate over the array while r < p and l >= p
      //if (arr[r] !== arr[l]) return false
      // r++ move to next one
      // l -- move to previous one
    //return true
    
    //use o(1) space but modify x
    //partition x -> use half of x to compare with the other half
    //reversedNum ex: 123 -> 321 
    //get half of x and half of reversedNum -> x = 1221 -> x = 12 ; reversedNum = 12
    //set reversedNum = 0
    let reversedNum = 0;
    //continuing the iteration until x > reversedNum -> x might not equal to r, if x > r it has to keep doing it; 
    //x < r, it might be two cases: 1. x is way smaller than r will return false 2. x is r/10 don't care the last digit of r and it return true
    while(x > reversedNum) {
      //reversedNum = reversedNum x 10 + x%10
      reversedNum = reversedNum * 10 + x % 10;
      //set x: 121 -> 12
      x = (x - (x%10))/10;

    }
    return x == reversedNum || x == (reversedNum - (reversedNum %10))/10;;
};