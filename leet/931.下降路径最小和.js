/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  let min = Infinity;
  for (let row = 0; row < n; row++) {
    for (let column = 0; column < n; column++) {
      const leftTop = matrix[row - 1]?.[column - 1] ?? Infinity;
      const top = matrix[row - 1]?.[column] ?? 0; // 第一行上方为0
      const rightTop = matrix[row - 1]?.[column + 1] ?? Infinity;
      matrix[row][column] += Math.min(leftTop, top, rightTop);
      if (row === n - 1 && matrix[row][column] < min) min = matrix[row][column];
    }
  }
  return min;
};
// @lc code=end
