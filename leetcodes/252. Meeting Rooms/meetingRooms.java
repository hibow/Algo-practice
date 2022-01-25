/**
 * Definition for an interval.
 * public class Interval {
 *     int start;
 *     int end;
 *     Interval() { start = 0; end = 0; }
 *     Interval(int s, int e) { start = s; end = e; }
 * }
 */
class Solution {
  public boolean canAttendMeetings(Interval[] intervals) {
    //array sorting
    //iterate over intervals
    //time O(nlogn) spaceO(1)
    Arrays.sort(intervals, new Comparator<Interval>(){
      public int compare(Interval a, Interval b){
        return a.start - b.start;
      }
    });
    int end = intervals[0].end;
    for (int i =1; i < intervals.length; i++){
      if (end > intervals[i].start) return false;
      end = intervals[i].end;
    }
    return true;
  }
}