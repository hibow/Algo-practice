import java.util.PriorityQueue;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
  public ListNode mergeKLists(ListNode[] lists) {
    //priority queue with sorting function
    //create new list with 0
    //put all nodes from lists to queue
    //while queue is not empty
    //poll node from queue to new list
      //if node has next node -> put it into queue
    //return new list
    //time O(nlogk) k is the number of linked lists, spaceO(n)
    if (lists == null || lists.length == 0) return null;
    PriorityQueue<ListNode> queue = new PriorityQueue<ListNode>( lists.length, (a, b) -> a.val - b.val);
    ListNode newList = new ListNode(0);
    ListNode temp = newList;
    for (ListNode node: lists){
      if (node != null) queue.add(node);
    }
    while (!queue.isEmpty()){
      temp.next = queue.poll();
      temp = temp.next;
      if (temp.next != null) {
          queue.add(temp.next);
      }
    }
    return newList.next;
  }
}