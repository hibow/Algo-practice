/*
 * [Source]
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * [Problem Description]
 *
 * Merge two sorted linked lists and return it as a new list. The new list should
 * be made by splicing together the nodes of the first two lists.
 * Example:
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 *
 * [Comments]
 * test case:
 * l1: 1->1->1->1->1 , l2: 1->2->2->2
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * use a dummy head to get nodes from l1 and l2 and return dummy.next
 * edge case: if l1 && l2 is null return []
 */

//time:O(n)
//space:O(n)
 var mergeTwoLists1 = function(l1, l2) {
  if (l1 === null && l2 === null) return null;
  let cur = new ListNode();
  let dummyHead = cur;
  while (l1 !== null && l2 !== null) {
    //if l1 < l2
    if (l1.val < l2.val) {
      //set cur.next to l1
      cur.next = l1;
      //move l1 to next
      l1 = l1.next;
      //else
    } else {
      //set cur.next to l2
      cur.next = l2;
      //move l2 to next
      l2 = l2.next;
    }
    //move cur to cur.next
    cur = cur.next;
  }
    if (l1 !== null) cur.next = l1;
    //put the rest of l1 into list
    if (l2 !== null) cur.next = l2;
    //cur is already in the back but dummyHead is still the head of list
  return dummyHead.next;
};

//merge recursive method
//time o(n)
//space O(n)
var mergeTwoLists2 = function(l1, l2) {
  if (!l1 && !l2) return [];
  if (!l1 || !l2) return l1? l1:l2;
  //the smaller one becomes the head
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists2(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists2(l1, l2.next);
    return l2;
  }
};