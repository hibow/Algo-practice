class Solution {
  public int eraseOverlapIntervals(int[][] intervals) {
    //The problem asks for minimum removal.
    //We only need to remove [1,100] and [2,12] to get rid of over-lapping interval
    //sort the array
    //iterate over the list, to count overlapping part
    //  else set start, end to cur index
    //time O(n) = nlogn (sorting) space O(1)
    if (intervals.length == 1) return 0;
    Arrays.sort(intervals, (o1, o2)->o1[0]-o2[0]);
    int count = 0;
    int end = intervals[0][1];
    for (int i = 1; i<intervals.length; i++) {
      if (intervals[i][0] < end) {
        count++;
        end = Math.min(intervals[i][1] , end);
      } else {
        end = intervals[i][1];
      }
    }
    return count;
  }
}