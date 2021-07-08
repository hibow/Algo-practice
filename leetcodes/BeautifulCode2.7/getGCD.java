/***
 * gcd = f(a,b) 1. if a, b is even number, f(a,b) = 2*f(a/2, b/2) 2. if a is
 * even number, b is odd number, f(a,b)= f(a/2, b); 3. if b is even , a is odd,
 * f(a,b) = f(a, b/2) 4. if a, b is odd number, f(a,b) = f(b, a-b)
 * 
 * use bit operator for *2 and /2
 */
class solution {
  public int gcd(int a, int b) {
    if (a < b) {
      return gcd(b, a);
    }
    if (b == 0) {
      return a;
    }
    boolean isAEven = isEven(a), isBEven = isEven(b);
    if (isAEven && isBEven) {
      return 2 * gcd(a >> 1, b >> 1);
    } else if (isAEven && !isBEven) {
      return gcd(a >> 1, b);
    } else if (!isAEven && isBEven) {
      return gcd(a, b >> 1);
    } else {
      return gcd(b, a - b);
    }
  };

  // regular solution
  int gcdd(int a, int b) {
    return b == 0 ? a : gcdd(b, a % b);
  }
}
