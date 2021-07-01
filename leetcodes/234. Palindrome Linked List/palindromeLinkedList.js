/*
 * [Source]
 *
 * https://leetcode.com/problems/palindrome-linked-list/
 *
 * [Problem Description]
 *
 * Given a singly linked list, determine if it is a palindrome.
 * Example 1:
 * Input: 1->2
 * Output: false
 * Example 2:
 * Input: 1->2->2->1
 * Output: true
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
 *
 * [Comments]
 *
 *
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
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  //input: node
  //output: boolean
  //edge case: at least one node -> return true; value is in [0,9]
  //test case:
  /***
   * [0] true; [11] true; [122322] true; [1121] false [null] -> error
   */
  //create new ListNode for slow = head, fast = head
  let slow = head;
  let fast = head;
  //space O(1) some variables and same nodes
  //time O(n) 3 while loops iterating the list ; one more while loop if recovery list is needed.

  //find the middle node by slow pointer
  //move slow and fast pointer to the end while (fast not null and fast.next not null)
  while(fast !=null && fast.next != null){
    //fast moves two steps
    fast = fast.next.next;
    //slow moves one step
    slow = slow.next;
  }
  //if fast not null -> slow moves to next node
  if (fast != null) {
    slow = slow.next;
  }
  //reverse list with head as slow and assign to slow(rightlist, don't need to use new space)
  slow = reverse(slow);
  //assign original head to fast(leftlist)
  fast = head;
  //compare values in leftlist and rightlist til the end of rightlist
  while ( slow != null) {
    //if slow.val not fast.val return false
    if (slow.val != fast.val) return false;
    //move slow to the next node in rightlist
    slow = slow.next;
    //move fast to the next node in leftlist
    fast = fast.next;
  }

  //default return true (one node also returns true)
  return true;
};

  var reverse = function(head) {
    //set pre as the pointer in reversedList as null
    let pre = null;
    //move head to next node in the list until the end
    while (head != null) {
      //create cur and set it to head.next
      let cur = head.next;
      //set head.next to pre
      head.next = pre;
      //set pre to head
      pre = head;
      //set head to cur -> move the cur in the list to the end
      head = cur;
    }
    //return pre as the new head node of the list
    return pre;
  }


//space O(n) or O(n/2), time O(n) -> use queue