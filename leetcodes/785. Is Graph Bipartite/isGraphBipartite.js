/**
 * @param {number[][]} graph
 * @return {boolean}
 */
 var isBipartite = function(graph) {
  // input: matrix (arrays of array)
  //output: boolean
  /**
   * 1) DFS time O (v + e) : vertices + edges , space O(v + e)
   *  use color array to mark the color of each node (3 colors- no, black, white , -1 1 0)
   *  iterate each node in color array, if it doesn't have color, mark it black and move to adj nodes to color them white
   *   but do the verification before marking it, verify if the color of current is correct 
   *   this can be a new function before placing color, so the main function will run this function when iterate over the color array
   *  
   * 2) BFS O (v + e), space O (v + e)
   *    create color array for each node, iterate over each node to verify if color is not 0, continue; else, push this node to queue
   *    while queue is not empty, take out the first node from queue
   *       iterate over the graph of this node, to verify if its ajd nodes have color and if they are correct, return false if they are incorrect
   *    return true
   */
  let colors = new Array(graph.length).fill(-1);
  
  for (let u = 0; u < graph.length; u++) {
    if (colors[u] === -1 && !dfs(graph, colors, u, 0)) {
      //check vertices
      //without first condition it doesn't work..
      return false;
    }
  }
  return true;
};

const dfs = (graph, colors, u, color) => {
  if (colors[u] !== -1) {
    return colors[u] === color;
  }
  colors[u] = color;
  for (let v of graph[u]){
    //check adj nodes(edges)
    if (!dfs(graph, colors, v, 1-color)) {
      return false;
    }
  }
  return true;
}