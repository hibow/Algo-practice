/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
//input: 2d array
//output: integer
//edge case: null return 0
/**
 * 1) dfs time O(NM) -> 2d for loop
 *   space O(NM) -> worse case recursive stack for df
 *   main function ->
 *        create count = 0,
 *        iterate over n and m of grid
 *                if grid[i][j] == '1', count ++;
 *                  dfs(grid, i, j)-> search for all nodes in this island
 *        return count
 *   dfs function ->
 *      if i or j > len(grid) or < 0 or grid[i][j] == '0' return
 *      mark grid[i][j] to 0 -> it wont be counted again
 *      dfs(grid, i+1, j)
 *      dfs(grid, i-1, j)
 *      dfs(grid, i, j + 1)
 *      dfs(grid, i, j - 1)
 *
 */
  let m = grid.length;
  let n = grid[0].length;
  if (!n || !m ) return 0;
  let count = 0;
  const dfs = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j>=grid[0].length || grid[i][j] ==='0') return;
    grid[i][j] = '0';
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i , j + 1);
    dfs(grid, i , j - 1);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count ++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
};