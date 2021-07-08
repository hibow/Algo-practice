/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
  //input: number x number arrays
  //output: integer
  //edge case: if grid.len = 0, return -1
  /**
   * BFS:
   * return the shortestPath from [0,0] ->[1,1]
   *  -> return the fisrt path counted when it arrives [1,1]
   * use queue to store info [x, y, paths]
   * push [0,0,1] to queue (if it's 0)
   * use dir as possible paths = [[ -1, -1], [[-1, 0]], [ -1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
   *
   * iterate this action until queue
   *   shift() from queue
   *   ->check if it met the boundary [m-1, n-1], if yes
   *
   *   move to next path
   *   iterate over dir with [iDif, jDif]
   *     newI = iDif + i, newJ = jDif + j
   *   if (newI and new J in the boundary and grid[newI][newJ] is null or 0), push [newI, newJ, paths + 1]
   *   mark grid[newI][newJ] = 1 as visited
   *
   * return -1
   *
   * time O(mxn), space O(mxn)
   *
   */
  if (grid[0][0] === 1) return -1;
  let m = grid.length;
  let n = grid[0].length;
  let dir = [[-1, -1], [-1, 0], [-1, 1], [0, 1] ,[0, -1], [1, 1], [1, -1], [1, 0]];
  let queue = [[0, 0, 1]];

  while(queue.length) {
    let [i, j, paths] = queue.shift();
    if (i === m -1 && j === n-1) return paths;
    for (let [iDif, jDif] of dir){
      let newI = i + iDif;
      let newJ = j + jDif
      if (newI >=0 && newJ >= 0 && newI < m && newJ <n && grid[newI][newJ] === 0){
        queue.push([newI, newJ, paths +1]);
        grid[newI][newJ] = 1;
      }
    }
  }
  return -1;
}
