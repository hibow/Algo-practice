public class Solution {
  public boolean isPalindrome(int x) {
    if (x < 0 || (x % 10 == 0 && x != 0))
      return false;
    int reversedNum = 0;
    while (x > reversedNum) {
      reversedNum = reversedNum * 10 + (x % 10);
      // x = (x - x%10)/10;
      x = x / 10;
      // difference between java and js
    }
    // return x == reversedNum || x == (reversedNum - reversedNum % 10)/10;
    return x == reversedNum || x == reversedNum / 10;
  }
}
