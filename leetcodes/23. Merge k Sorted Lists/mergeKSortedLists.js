/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  //time O(nlogn), spaceO(n) -> put them to an array, sort the array, put the elems into a listi
  let nodes = []
  let head = new ListNode(0)
  let cur = head
  for (let list of lists) {
    while (list){
      nodes.push(list.val)
      list = list.next
    }
  }
  for (let node of nodes.sort((a,b) =>a-b)){
    cur.next = new ListNode(node)
    cur = cur.next
  }
  return head.next
};