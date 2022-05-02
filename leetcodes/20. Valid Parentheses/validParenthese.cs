public class Solution {
    public bool IsValid(string s) {
      //dictionary -> O(n) space -> O(n)
      //stack -> O(n) space O(n)
      //check len of s if it's odd -> false
      if (s.Length % 2 != 0) return false;
         Stack <char> stack = new Stack<char>();
      foreach (var c in s) {
        if (c == '(') stack.Push(')');
        else if (c =='[') stack.Push(']');
        else if (c =='{') stack.Push('}');
        else if (stack.Count == 0 || stack.Pop() != c) return false;
      }
      return stack.Count == 0;
    }
}