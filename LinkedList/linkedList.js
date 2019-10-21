var ListNode = function(val) {
  this.val = val;
  this.next = null;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a node and add it to tail
    var node = ListNode(value);
    if (this.head && this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    //removes the first node from the list and returns its value
    //if tail&head exists
    if (this.head && this.tail) {
      var removed = this.head;
      this.head = this.head.next;
      return removed.value;
    } else {
      return;
    }
  };

  list.contains = function(target) {
    //returns boolean reflecting whether or not the passed-in value is in the linked list
    //check if head.next.value === target
    //if true, return true
    //if not, check the next value until next value === null
    var node = this.head;
    while (node) {
      if (node.value === target) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };

  return list;
};
module.export = LinkedList;
