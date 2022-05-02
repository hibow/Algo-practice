class Solution:
    def maxArea(self, height: List[int]) -> int:
        l = 0
        h = len(height) - 1
        maxA = 0
        while(l < h):
          W = h - l
          maxH = min(height[l], height[h])
          maxA = max(maxA, maxH*W)
          if height[l] > height[h]: h-=1
          else: l += 1
        return maxA