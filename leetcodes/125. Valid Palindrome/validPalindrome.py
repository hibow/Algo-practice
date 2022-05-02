class Solution:
    def isPalindrome(self, s: str) -> bool:
      #two pointers -> start,
      # while (start < end )->s.len()/2 times
        #if not char or digit, move to next start or next end
        #if s[start] != s[end], retrun false
      # return true
      # isalnum() method checks whether all the characters in a given string are alphanumeric or not.
      # time O(n) , space O(1)
      start = 0
      end = len(s) - 1
      while start < end:
        if not s[start].isalnum():
          start += 1
        elif not s[end].isalnum():
          end -=1
        else:
          if s[start].lower() != s[end].lower():
            return False
          else:
            start += 1
            end -= 1
      return True

