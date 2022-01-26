/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let dp_i, dp_i1 = [0, -prices[0] - fee];// 第一天特殊处理，只能买不能卖
  for (let i = 2; i <= prices.length; i++) {
    dp_i = [Math.max(dp_i1[0], dp_i1[1] + prices[i - 1]), Math.max(dp_i1[1], dp_i1[0] - prices[i - 1] - fee)];
    dp_i1 = dp_i;
  }
  return dp_i1[0];
};
// @lc code=end

