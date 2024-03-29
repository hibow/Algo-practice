/**
 * Given an array of meeting time intervals consisting of start and end times[[s1,e1],[s2,e2],...](si< ei), determine if a person could attend all meetings.

Example 1:

Input:
[[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input:[[7,10],[2,4]]

Output:true
 */

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