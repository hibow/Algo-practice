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
 */
 var addTwoNumbers = function(l1, l2) {
   /**1) reverse list
    * reverse those two list and add to another list
    * time O(3N) spaceO(1)
    *
    *
    * 2) use stack time O(3n) space O(n)(two stacks)
    * use two stacks to hold the value of l1 and l2
    * while two stacks is not none, pop from stacks and add up together to a new list
    *
    *
    */
   let stack1 = buildStack(l1)
   let stack2 = buildStack(l2)
   let head = new ListNode(-1);
   let carry = 0;
   while(stack1.length || stack2.length|| carry){
     let x = (!stack1.length)? 0 : stack1.pop();
     let y = !stack2.length? 0: stack2.pop();
     let sum = x + y + carry;
     let node = new ListNode(sum % 10);
     node.next = head.next;
     head.next = node;
     //reverse the list at the same time
     carry = Math.floor(sum /10);
   }
   return head.next;

};

const buildStack = (l) => {
  let stack = []
  while (l) {
    stack.push(l.val);
    l = l.next;
  }
  return stack;
}