import java.util.Collections;
import java.util.Comparator;
import java.util.PriorityQueue;

/**
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],…] (si < ei), find the minimum number of conference rooms required.

For example, Given [[0, 30],[5, 10],[15, 20]], return 2.
[0,30]
[5,10], [15,20] 2 rooms
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
public class Solution {
  public int minMeetingRooms(Interval[] intervals) {
    //sort the intervals
    //use min heap to add the earlier ending time schedule
    //  add first end time
    //  iterate over the intervals list
    //    if start time of current schedule >= end time in queue, take the current elem out from queue
    //    add the end time of current schedule
    // return queue size -> meeting rooms
    //time O(nlogn) space O(n)
    if (intervals == null || intervals.size() == 0 ){
      return 0;
    }
    PriorityQueue<Integer> pq = new PriorityQueue<Integer>(); //min heap

    Arrays.sort(intervals, new Comparator<Interval>() {
      public int compare(Interval a, Interval b) {
        return a.start - b.start;
      }
    }); //time O(nlogn)
    pq.add(intervals[0].end);

    for (int i = 1; i < intervals.length; i++) {
      if (intervals[i].start >= pq.peek()) pq.poll();
      pq.add(intervals[i].end);
    }
    return pq.size();
  }
}