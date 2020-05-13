/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid[0].length,
    n = grid.length;
  const solution = [[grid[0][0]]];
  for (let i = 1; i < n; i++) {
    solution.push([grid[i][0] + solution[i - 1][0]]);
  }
  for (let i = 1; i < m; i++) {
    solution[0][i] = grid[0][i] + solution[0][i - 1];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      solution[i][j] =
        Math.min(solution[i - 1][j], solution[i][j - 1]) + grid[i][j];
    }
  }
  return solution[n - 1][m - 1];
};
// @lc code=end
