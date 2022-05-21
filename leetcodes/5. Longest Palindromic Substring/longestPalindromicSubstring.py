class Solution:
    def longestPalindrome(self, s: str) -> str:
       #two pointers checks from (i, i) start from center the sides to check if it's palindrome
       #two pointers check from (i, i+1) -> consider repeating characters in the row
       #time O(n^2) space O(1)
       longest = ''
       def findLongest(s,l,r):
         while l>=0 and r < len(s) and s[l] == s[r]:
           l -= 1
           r += 1
         return s[l+1:r]

       for i in range(len(s)):
         s1 = findLongest(s, i, i)
         if len(s1) > len(longest): longest = s1
         s2 = findLongest(s, i, i + 1)
         if len(s2) > len(longest): longest = s2
       return longest

       #DP -> use a 2D matrix to store  the start and end index n^2 time O(n^2), space O(n^2)
