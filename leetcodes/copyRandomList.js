/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 * 138. Copy List with Random Pointer
 * A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.
 * Input:
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
 

 old list:    1 - 2 - 3 - 4 - 5

 clone list:  1 - 2 - 3 - 4 - 5
  
  space O(n)
  hash map [node] = cloned node
  time O(n): 1) clone basic copy 2) get random pointer
          clone

  list: 1 - 1 - 2 - 2 - 3 - 3 - 4 - 4- 5 - 5
  space O(1)
       1.next  = 1.next.next
   time O(n)
       1. copy self to next node
       2. assign random to clone
       3. assign clone next to next next
  
*/

/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  //output: a new list
  //edge case: head is null return head
  //constraints:
  if (!head) {
    return head;
  }
  const newHead = new Node(0);
  let backup = newHead; //new list
  //use map to map old node to clone node
  const map = new Map();

  while (head) {
    //iterate old list
    let current;
    //get current node val
    if (map.has(head)) {
      current = map.get(head);
    } else {
      current = new Node(head.val);
      map.set(head, current);
    }
    //get current random
    if (head.random) {
      if (map.has(head.random)) {
        current.random = map.get(head.random);
      } else {
        const ranNode = new Node(head.random.val);
        map.set(head.random, ranNode);
        current.random = ranNode;
      }
    }
    //get backup next
    backup.next = current;
    backup = backup.next;
    head = head.next;
  }
  return newHead.next;
};
//https://leetcode.com/problems/copy-list-with-random-pointer/discuss/43491/A-solution-with-constant-space-complexity-O(1)-and-linear-time-complexity-O(N)//
var copyRandomList = function(head) {
  if (head) {
    return null;
  }
  let cur = head; //iterator , will change the head list
  //clone to next
  while (cur) {
    let next = cur.next;
    cur.next = new Node(cur.val, next);
    cur = next;
  }
  cur = head;
  //assign random
  while (cur) {
    if (cur.random) {
      cur.next.random = cur.random.next;
    }
    cur = cur.next.next;
  }
  cur = head;
  let copyHead = new Node(0);
  let copyIter = copyHead;
  //assign next
  //extract copy and restore head list
  while (cur !== null) {
    let next = cur.next.next;
    //extract copy
    let copy = cur.next;
    copyIter.next = copy;
    copyIter = copy;

    cur.next = next;
    cur = next;
  }

  return copyHead.next;
};
