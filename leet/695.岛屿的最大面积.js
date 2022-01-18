/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const count = {};
  let max = 0;
  const m = grid.length, n = grid[0]?.length || 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        count[i + ',' + j] = 0;
        dfs(i, j, i, j)
      }
    }
  }
  function dfs(x, y, startX, startY) {
    if (x >= m || x < 0 || y >= n || y < 0) return
    if (grid[x][y] === 1) {
      grid[x][y] = 0
      if (++count[startX + ',' + startY] > max) max = count[startX + ',' + startY];
      dfs(x + 1, y, startX, startY)
      dfs(x - 1, y, startX, startY)
      dfs(x, y + 1, startX, startY)
      dfs(x, y - 1, startX, startY)
    }
  }
  return max;
};
// @lc code=end

