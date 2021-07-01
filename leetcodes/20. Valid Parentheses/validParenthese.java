class Solution {
    public boolean isValid(String s) {
      int len = s.length();
      if (len %2 != 0) return false;
      //create stack
      Stack<Character> temp = new Stack<Character>();
      for (char c : s.toCharArray()){
        if (c == '(') {
          temp.push(')');
        } else if (c == '[') {
          temp.push(']');
        } else if (c == '{') {
          temp.push('}');
        } else if ( temp.isEmpty()|| temp.pop() != c) return false;
      }
      return temp.isEmpty();
    }
}