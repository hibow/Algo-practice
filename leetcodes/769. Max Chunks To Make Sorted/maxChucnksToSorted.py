class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
      #time case arr = [1,0,2,3,4], output: 4, split to [1,0],[2],[3],[4] -> split to chunk and sort the chunk and then merge to sorted array
      #need to get the most chunks
      #iterate over the array, start from the 1st element, and set it to right ->get the right = max(right, arr[i])-> only get max value
        #if index is right -> means it can be split as a chunk -> chunk + 1
      #return chunk
      #time O(n), space O(1)
      chunks = 0
      right = arr[0]
      for idx, val in enumerate(arr):
        right = max(right, arr[idx])
        if right == idx:
          chunks += 1
      return chunks

    