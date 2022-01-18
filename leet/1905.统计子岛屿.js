/*
 * @lc app=leetcode.cn id=1905 lang=javascript
 *
 * [1905] 统计子岛屿
 */

// @lc code=start
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  let count = 0;
  const m = grid2.length, n = grid2[0]?.length || 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1 && isSubIsland(i, j)) count++;
    }
  }

  function isSubIsland(x, y) {
    if (x >= m || x < 0 || y >= n || y < 0) return true
    if (grid2[x][y] === 1) {
      grid2[x][y] = 0
      if (grid1[x][y] === 1) {
        grid1[x][y] = 0
        const bool1 = isSubIsland(x + 1, y), bool2 = isSubIsland(x - 1, y), bool3 = isSubIsland(x, y + 1), bool4 = isSubIsland(x, y - 1);
        return bool1 && bool2 && bool3 && bool4;
      }
      else {
        isSubIsland(x + 1, y)
        isSubIsland(x - 1, y)
        isSubIsland(x, y + 1)
        isSubIsland(x, y - 1)
        return false
      }
    } else return true;
  }
  return count;
};
// @lc code=end

