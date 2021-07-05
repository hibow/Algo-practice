/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//1. iteration: time O(n), space O(n) -> new list
 var deleteDuplicates = function(head) {
    //input: listNode
    //output: listNode
    //edge case: if null return null
    if (head == null || head.next == null) return head;
    //assign head to cur
    let cur = head;
    //create new head and points to temp = null
    let newHead = new ListNode(null);
    let temp = newHead;
    //iterate over the list with cur until cur is null
    while(cur != null) {
      //if cur.val != temp.val assign cur to temp.next, move temp to next
      if (cur.val !== temp.val){
        temp.next = cur;
        temp = temp.next;
      }
      //move cur to cur.next
      cur = cur.next;
    }
    //since the last node is temp which is cur, makes sure it points to null as the last node of newlist.
    temp.next = null;
    //return newhead.next
    return newHead.next;
};

//2. mutate the list space O(1)
var deleteDuplicates = function(head) {
  if (head == null || head.next == null) return head;
  //assign head to cur
  let cur = head;
  //iterate over the list with cur until cur is null
  while(cur != null && cur.next != null) {
    //if cur.val != temp.val assign cur to temp.next, move temp to next
    if (cur.val === cur.next.val){
      //  console.log(cur.val)
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  //return head
  return head;
}
//use recursion might introduce stack overflow 