/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const circle = [];
  const n = board.length,
    m = n && board[0].length;
  for (let i = 0; i < n; i++) circle.push([]);
  function dfs(x, y) {
    if (!circle[y][x]) {
      circle[y][x] = true;
      if (y > 0 && board[y - 1][x] === 'O') dfs(x, y - 1);
      if (x > 0 && board[y][x - 1] === 'O') dfs(x - 1, y);
      if (y < n - 1 && board[y + 1][x] === 'O') dfs(x, y + 1);
      if (x < m - 1 && board[y][x + 1] === 'O') dfs(x + 1, y);
    }
  }
  for (let i = 0; i < n; i++) {
    if (board[i][0] === 'O') {
      dfs(0, i);
    }
    if (board[i][m - 1] === 'O') {
      dfs(m - 1, i);
    }
  }

  for (let j = 0; j < m; j++) {
    if (board[0][j] === 'O') {
      dfs(j, 0);
    }
    if (board[n - 1][j] === 'O') {
      dfs(j, n - 1);
    }
  }
  for (i = 0; i < n; i++)
    for (j = 0; j < m; j++)
      if (!circle[i][j] && board[i][j] === 'O') board[i][j] = 'X';
};
// @lc code=end
