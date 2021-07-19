/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
 var splitListToParts = function(head, k) {
  /**
   * 1) create new array time O(N+K), space O(max(N,k)) -> the space for the answers
   *   count the N nodes in the list
   *   we will have k sublists in a new array ans
   *   at least each sub has w = N/k nodes, and it should have rem = N %k nodes difference between largest one and smallest one
   *   use cur to track the input list value
   *   for k sublists( 0 -> k)
   *     create a head for a new list to write sub list
   *       for writing 0 to w + (i < rem? if i is in valid sublist? 1:0) times into sublist
   *            write = write.next = new value -> the way to write new node
   *            track cur value if not null cur = cur.next
   *     ans[i] is head.next
   *   return ans
   * 
   * 2) split input list  time O(N + k) space O(k)
   */
  let N = 0;
  let cur = root;
  while(cur !== null) {
    N++;
    cur = cur.next;
  }
  let diff = N %k;
  let size = Math.floor(N/k);
  let ans = new Array(k);
  //if JAVA, use ListNode[] ans = new ListNode[k] as static array, then we need to modify the below condition of cur !== null
  cur = root;
  for (let i = 0; i < k; i ++) {
    ans[i] = cur;
    let curSize = size + (diff-- > 0? 1: 0);
    for (let j = 0; j < curSize - 1; j ++){
      if (cur !== null) cur = cur.next;
    }
    if (cur !== null) {
      let next = cur.next;
      //disconnect next node from original cur node
      cur.next = null;
      cur = next;
    }
    //if cur is null it will be included as null in the ans
  }
  return ans;
};
