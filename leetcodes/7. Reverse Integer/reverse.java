public class revSol {
  public int reverse(int x) {
    if (x > Integer.MAX_VALUE || x < Integer.MIN_VALUE)
      return 0;
    long reversedNum = 0;
    // need to use long to store result in case it's too big
    // int in js is big enough
    while (x != 0) {
      reversedNum = reversedNum * 10 + x % 10;
      x /= 10;
    }
    return (reversedNum > Integer.MAX_VALUE || reversedNum < Integer.MIN_VALUE) ? 0 : (int) reversedNum;
    // convert to int for result
  }
}
