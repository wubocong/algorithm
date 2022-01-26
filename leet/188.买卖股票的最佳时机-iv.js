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

// dp[i][j][0] 代表第i天结束后，最多能进行j笔交易，不持有股票的最大收益
// dp[i][j][1] 代表第i天结束后，最多能进行j笔交易，持有股票的最大收益
// var maxProfit = function (k, prices) {
//   const dp = [];
//   const days = prices.length;
//   for (let i = 0; i <= days; i++) {
//     dp.push([]);
//     for (let j = 0; j <= k; j++) {
//       dp[i].push([0, 0]);
//     }
//   }
//   for (let i = 1; i <= days; i++) {
//     for (let j = 1; j <= k; j++) {
//       // 第一天特殊处理，只能买不能卖
//       if (i === 1) dp[1][j][1] = -prices[0];
//       else {
//         dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i - 1]);
//         dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i - 1]);
//       }
//     }
//   }
//   return dp[days][k][0];
// };

// 状态压缩
var maxProfit = function (k, prices) {
  let dp_i, dp_i1 = [[0, 0]]; // k=0时收益一定为0
  for (let j = 1; j <= k; j++) {
    dp_i1.push([0, -prices[0]]); // 第一天特殊处理，只能买不能卖
  }
  for (let i = 2; i <= prices.length; i++) {
    dp_i = [[0, 0]]; // k=0时收益一定为0
    for (let j = 1; j <= k; j++) {
      dp_i.push([Math.max(dp_i1[j][0], dp_i1[j][1] + prices[i - 1]), Math.max(dp_i1[j][1], dp_i1[j - 1][0] - prices[i - 1])]);
    }
    dp_i1 = dp_i;
  }
  return dp_i1[k][0];
};
// @lc code=end

