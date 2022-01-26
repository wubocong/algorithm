/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp_i, dp_i1 = [0, -prices[0]], dp_i2 = [0];// 第一天特殊处理，只能买不能卖
  for (let i = 2; i <= prices.length; i++) {
    dp_i = [Math.max(dp_i1[0], dp_i1[1] + prices[i - 1]), Math.max(dp_i1[1], dp_i2[0] - prices[i - 1])];
    dp_i2 = dp_i1;
    dp_i1 = dp_i;
  }
  return dp_i1[0];
};
// @lc code=end

