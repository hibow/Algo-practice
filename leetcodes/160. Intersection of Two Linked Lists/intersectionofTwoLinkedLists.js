/*          
 * [Source] 
 *          
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 *          
 * [Problem Description]
 *          
 * Write a program to find the node at which the intersection of two singly linked
 * lists begins.
 * For example, the following two linked lists:
 * begin to intersect at node c1.
 * Example 1:
 * Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2,
 * skipB = 3
 * Output: Reference of the node with value = 8
 * Input Explanation: The intersected node's value is 8 (note that this must not
 * be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5].
 * From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the
 * intersected node in A; There are 3 nodes before the intersected node in B.
 * Example 2:
 * Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB
 * = 1
 * Output: Reference of the node with value = 2
 * Input Explanation: The intersected node's value is 2 (note that this must not
 * be 0 if the two lists intersect). From the head of A, it reads as [0,9,1,2,4].
 * From the head of B, it reads as [3,2,4]. There are 3 nodes before the
 * intersected node in A; There are 1 node before the intersected node in B.
 * Example 3:
 * Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
 * Output: null
 * Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B,
 * it reads as [1,5]. Since the two lists do not intersect, intersectVal must be
 * 0, while skipA and skipB can be arbitrary values.
 * Explanation: The two lists do not intersect, so return null.
 * Notes:
 * If the two linked lists have no intersection at all, return null.
 * The linked lists must retain their original structure after the function
 * returns.
 * You may assume there are no cycles anywhere in the entire linked structure.
 * Your code should preferably run in O(n) time and use only O(1) memory.
 *          
 * [Constraints]
The number of nodes of listA is in the m.
The number of nodes of listB is in the n.
0 <= m, n <= 3 * 104
1 <= Node.val <= 105
0 <= skipA <= m
0 <= skipB <= n
intersectVal is 0 if listA and listB do not intersect.
intersectVal == listA[skipA + 1] == listB[skipB + 1] if listA and listB intersect.
 *          
 *          
 */          
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    //input: LinkedList, LinkedList
    //output: LinkedList Node
    //edge case: if no intersection return null
    //how to verify if HeadA is HeadB? use if (headA == headB) in js
    /***
     * test case:
     * 1. same length w intersection return node
     * 2. different length with intersection return node
     * 3. no intersection  return null -> worse case time O(2n) their intersection is null so requires to traverse twice
     * 
     * time: O(n) -> iterate two list
     * space: O(1) -> no extra memory space
     */
    if (!headA || !headB) return null;
    let curA = headA;
    let curB = headB;
    //iterate over listA and listB, until nodeA == node B
    while( curA != curB) {
      //use the difference of length:
      //when shorter one first moves to the end, it will goes to longer list
      //when longer one first moves to the end, it will goes to shorter list 
      curA = (curA == null)? headB: curA.next;
      curB = (curB == null)? headA: curB.next;
    }
    
    //return nodeA or nodeB, it might be null if no inter
    return curA;
};

