/**
 * Design an algorithm to encode a list of strings to a string.
 * The encoded string is then sent over the network and is decoded back to the original list of strings.
 *
 *
 *  Example1
 * Input: [“lint”,“code”,“love”,“you”] Output: [“lint”,“code”,“love”,“you”]
 * Explanation: One possible encode method is: “lint:;code:;love:;you”
 * Example2
 * Input: [“we”, “say”, “:”, “yes”] Output: [“we”, “say”, “:”, “yes”]
 * Explanation: One possible encode method is: “we:;say:;:::;yes”
 *
 */
public class Codec {
  //time O(n) space O(n)
  // Encodes a list of strings to a single string.
  public String encode(List<String> strs) {
    //encode with stringlength + "#" + str
    StringBuilder sb = new StringBuilder();
    for (String str: strs) {
      sb.append(str.length()).append("#").append(str);
    }
    return sb.toString();
  }
  public List decode(String s) {
    List result = new LinkedList<>();
    if (s == null || s.length() == 0){
      return result;
    }
    int start = 0;
    int end = 0;

    while (end < s.length()) {
      if (s.charAt(end) == '#'){
        int length = Integer.valueOf(s.substring(start, end));
        result.add(s.substring(end + 1, end + 1 + length));
        start = end + 1 + length;
        end = start;
      }
      end++;
    }
    return result;
  }
}