/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const n = board.length,
    m = board[0].length;
  const len = word.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === word[0] && recursive(0, i, j)) return true;
    }
  }
  function recursive(index, y, x) {
    index++;
    if (index === len) return true;
    else {
      const temp = board[y][x];
      board[y][x] = false;
      if (
        y > 0 &&
        board[y - 1][x] === word[index] &&
        recursive(index, y - 1, x)
      )
        return true;

      if (
        x > 0 &&
        board[y][x - 1] === word[index] &&
        recursive(index, y, x - 1)
      )
        return true;
      if (
        y < n - 1 &&
        board[y + 1][x] === word[index] &&
        recursive(index, y + 1, x)
      )
        return true;
      if (
        x < m - 1 &&
        board[y][x + 1] === word[index] &&
        recursive(index, y, x + 1)
      )
        return true;
      board[y][x] = temp;
    }
  }
  return false;
};
// @lc code=end
