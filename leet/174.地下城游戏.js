/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const dp = [];
  const M = dungeon.length ?? 0, N = dungeon[0]?.length ?? 0;
  // dp[i][j]表示(i,j)到达(M,N)所需的最小生命值
  for (let i = 0; i <= M; i++) {
    dp.push([]);
    for (let j = 0; j <= N; j++) {
      dp[i].push(Infinity);
    }
  }
  for (let i = M - 1; i >= 0; i--) {
    for (let j = N - 1; j >= 0; j--) {
      if (i === M - 1 && j === N - 1) dp[i][j] = dungeon[i][j] > 0 ? 1 : -dungeon[i][j] + 1
      else {
        const hp = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];
        dp[i][j] = hp > 0 ? hp : 1;
      }
    }
  }
  return isFinite(dp[0][0]) ? dp[0][0] : 1;
};
// @lc code=end

