class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
      #time O(n), space O(n)
      dataMap = {}
      start = maxLength = 0
      for end in range(len(s)):
        if s[end] in dataMap:
          start = max(start, dataMap[s[end]] + 1)
        dataMap[s[end]] = end
        maxLength = max(maxLength, end - start + 1)

      return maxLength

