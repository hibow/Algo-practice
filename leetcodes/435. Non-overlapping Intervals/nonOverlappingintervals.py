class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:

      '''
      sort by X[0] -> need to check what to removed with end value
      sort by X[1] -> don't need to check, just remove the current i value
      count the overlapped intervals: when compare invl a1 from (0,0) > intervals[i][0]
      iterate over the array time O(n) space O(1)

      '''
      intervals.sort(key = lambda X: X[0])
      #if sort X[1]-> don't need to change the end in if statement
      count = 0
      end = intervals[0][1]
      for i in range(1, len(intervals)):
        if intervals[i][0] < end:
          count = count + 1
          end = min(intervals[i][1] , end)
          #check 1 index value to see if which one to removed (don't need to add it when sort by X[1])
        else: end = intervals[i][1]
      return count