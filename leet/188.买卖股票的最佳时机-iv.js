/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const dp = [[]];
  let i1_j1_0 = i_j_0 = i_j_1 = i1_j_1 = 0;
  for (let i = 1; i <= prices.length; i++) {
    for (let j = 1; j <= k; j++) {
      i_j_0 = Math.max(i1_j_0, i1_j_1 + prices[i]);
      i_j_1 = Math.max(i1_j_1, i1_j1_0 - prices[i]);
      dp[i][j][0] = Math.max(dp[i - 1][j][0] ?? 0, (dp[i - 1][j][1] ?? 0) + prices[i]);
      dp[i][j][1] = Math.max(dp[i - 1][j][1] ?? 0, (dp[i - 1][j - 1][0] ?? 0) - prices[i]);
    }
  }
  return dp[prices.length][k][0];
};
// @lc code=end

