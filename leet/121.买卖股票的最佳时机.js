/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp_i, dp_i1 = [0, -prices[0]]; 
  for (let i = 2; i <= prices.length; i++) {
    dp_i = [Math.max(dp_i1[0], dp_i1[1] + prices[i - 1]), Math.max(dp_i1[1], 0 - prices[i - 1])];
    dp_i1 = dp_i;
  }
  return dp_i1[0];
};
// @lc code=end

