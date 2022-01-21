import java.util.HashMap;

import org.w3c.dom.Node;

/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {
  public Node cloneGraph(Node node) {
    //DFS time(V+E) - each vertice and edge, space O(V)
    HashMap<Integer, Node> map = new HashMap<>();
    return clone(node, map);
  }
  private Node clone(Node node, HashMap<Integer, Node> map) {
    if (node == null) return null;
    if (map.containsKey(node.val)) return map.get(node.val);
    Node newNode = new Node(node.val, new ArrayList<Node>());
    map.put(newNode.val, newNode);
    for (Node neighbor : node.neighbors)
      newNode.neighbors.add(clone(neighbor, map));
    return newNode; //return each node in their neghibors
  }
}