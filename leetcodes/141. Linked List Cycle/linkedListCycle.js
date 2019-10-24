/*
 * [Source]
 *
 * https://leetcode.com/problems/linked-list-cycle/
 *
 * [Problem Description]
 *
 * Given a linked list, determine if it has a cycle in it.
 * To represent a cycle in the given linked list, we use an integer pos which
 * represents the position (0-indexed) in the linked list where tail connects to.
 * If pos is -1, then there is no cycle in the linked list.
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where tail connects to the
 * second node.
 * Example 2:
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where tail connects to the
 * first node.
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 * Follow up:
 * Can you solve it using O(1) (i.e. constant) memory?
 *
 * [Comments]
 *
 *  #1 hashmap
 *   time(O(n) to store data in the map)
 *   space O(n)
 *  #2 two pointer
 *     1  2  3   4  5  2
 *        fp
 *     sp
 *   time O(n) = O(n + cycle length)
 *   space O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  //output: boolean
  if (head === null || head.next === null) {
    return false;
  }
  const map = new Map();
  let pt = head;
  while (pt !== null) {
    if (map.has(pt.next)) {
      return true;
    }
    map.set(pt.next);
    pt = pt.next;
  }
  return false;
};

var hasCycle = function(head) {
  //output: boolean
  if (head === null || head.next === null) {
    return false;
  }
  // let startPoint = new ListNode(0);
  //first pointer
  let fp = head.next;
  //second pointer
  let sp = head;
  while (fp !== sp) {
    //if fp is null or its next is null
    //no cycle
    if (fp === null || fp.next === null) {
      return false;
    }
    //keep running with different speed
    sp = sp.next;
    fp = fp.next.next; //speed up
    //has cycle
  }
  return true;
};
