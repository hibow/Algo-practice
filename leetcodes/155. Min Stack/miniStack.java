class MinStack {
  // space: O(2n)
  private Stack<Integer> dataStack;
  private Stack<Integer> minStack;
  private int min;

  /** initialize your data structure here. */
  public MinStack() {
    dataStack = new Stack<>();
    minStack = new Stack<>();
    min = Integer.MAX_VALUE;
  }

  // worse time O(n) to get min
  public void push(int val) {
    dataStack.add(val);
    min = Math.min(min, val);
    minStack.add(min);
  }

  // time O(1)
  public void pop() {
    dataStack.pop();
    minStack.pop();
    min = minStack.isEmpty() ? Integer.MAX_VALUE : minStack.peek();
  }

  // time O(1)
  public int top() {
    return dataStack.peek();
  }

  // time O(1)
  public int getMin() {
    return minStack.peek();
  }
}

/**
 * Your MinStack object will be instantiated and called as such: MinStack obj =
 * new MinStack(); obj.push(val); obj.pop(); int param_3 = obj.top(); int
 * param_4 = obj.getMin();
 */