class Solution {
  public int[][] merge(int[][] intervals) {
    //sort the intervals based on first index
    Arrays.sort(intervals, (o1, o2)->o1[0]-o2[0]);
    //find the pairs which need to merge
    List<int[]> ans = new ArrayList<int[]>();
    //first interval range
    int start = intervals[0][0];
    int end = intervals[0][1];
    int i = 1;
    while(i < intervals.length){
      int s = intervals[i][0];
      int e = intervals[i][1];
      //next interval start is smaller than prev end and array is sorted
      //so these two internal can merge
      if (s <=end) {
        //merge the overlap
        //so merge both intervals
        end = Math.max(end, e);
      } else {
        //if no need -> add prev range to result
        ans.add(new int[]{start, end});
        start = s;
        end = e;
      }
      i++;
    }
    //add the rest to result
    ans.add(new int[] {start, end});
    //return ans.toArray(new int[0][])
    return ans.toArray(new int[ans.size()][]);
  }
}