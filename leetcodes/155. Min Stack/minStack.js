/**
 * initialize your data structure here.
 * javascript => use this
 * getMin -> use map to store: space O(n) -> time O(1)
 *        -> use sort : time O(nlogn) (merge sort)
 * use array to implement stack
 */
 var MinStack = function() {
    this.storage = []
    this.size = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
   //get current min from the top value
   let min = this.size === 0? val : this.storage[this.size-1].min;  
  //store min with each element
    this.storage[this.size]= {val: val, min: Math.min(min, val)};
    
    this.size ++;
};

/**
 * @return {void}
 */
 MinStack.prototype.pop = function() {
  this.storage[this.size - 1] = null;
  this.size --;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  //console.log(this.storage)
  return this.storage[this.size - 1].val; 
};
/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    //sort storage
    //get first index
    return this.size > 0? this.storage[this.size].min: null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//use node to implement stack

