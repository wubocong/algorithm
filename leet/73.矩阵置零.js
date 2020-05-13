/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix[0].length,
    n = matrix.length;
  let colFlag = false,
    rowFlag = false;
  for (let i = 0; i < n; i++)
    if (matrix[i][0] === 0) {
      colFlag = true;
      break;
    }

  for (let j = 0; j < m; j++)
    if (matrix[0][j] === 0) {
      rowFlag = true;
      break;
    }

  for (let i = 1; i < n; i++)
    for (let j = 1; j < m; j++)
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }

  for (let i = 1; i < n; i++)
    if (matrix[i][0] === 0) for (let j = 1; j < m; j++) matrix[i][j] = 0;

  for (let j = 1; j < m; j++)
    if (matrix[0][j] === 0) for (let i = 1; i < n; i++) matrix[i][j] = 0;
  
  if (colFlag) for (let i = 0; i < n; i++) matrix[i][0] = 0;
  if (rowFlag) for (let j = 0; j < m; j++) matrix[0][j] = 0;
};
// @lc code=end
