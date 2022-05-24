from re import S

from regex import R


class Solution:
    def reverse(self, x: int) -> int:
      '''
      reverse integer:
      iterate over when abs(x) still exist
        r = x % n
        x = x/n
        s += r.string()
        n = Numbers(s)
        if x < 0 -> return -n else n
      '''
      result = 0
      if x < 0:
        symbol = -1
        x = -x
      else: symbol = 1
      while x:
        r = x %10
        result = result*10 + r
        x = x //10
      return 0 if result > pow(2,31) else result * symbol