/**
 * Initialize your data structure here.
 */
 var MyStack = function() {
   this.inQ = [];
   this.outQ = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 * 
 * time O(1)
 */
MyStack.prototype.push = function(x) {
  this.inQ.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 * 
 * worse time O(n)
 */
MyStack.prototype.pop = function() {
  while (this.inQ.length > 1) {
    this.outQ.push(this.inQ.shift());
  }
  const lastItem = this.inQ.shift();
  //it removes the last item
  [this.inQ, this.outQ] = [this.outQ, this.inQ];
  return lastItem
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  while (this.inQ.length > 1) {
    this.outQ.push(this.inQ.shift());
  }
  const lastItem = this.inQ[0];
  this.outQ.push(this.inQ.shift());
  [this.inQ, this.outQ] = [this.outQ, this.inQ];

  return lastItem;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.inQ.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */