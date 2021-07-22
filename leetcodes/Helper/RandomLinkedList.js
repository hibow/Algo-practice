function ListNode(val) {
  this.val = val;
  this.next = null;
  }

var randSingleLinkedList = function(len) {
  let resList = new ListNode(Math.floor(Math.random()*9));
  let write = resList;
  for (i = 2; i <= len; i++) {
    write.next = new ListNode(Math.floor(Math.random()*9));
    write = write.next;
  }
  return resList;
}
//console.log(randSingleLinkedList(5))