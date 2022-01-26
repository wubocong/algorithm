/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let dp_i, dp_i1 = [0, -prices[0]];// 第一天特殊处理，只能买不能卖
  for (let i = 2; i <= prices.length; i++) {
    dp_i = [Math.max(dp_i1[0], dp_i1[1] + prices[i - 1]), Math.max(dp_i1[1], dp_i1[0] - prices[i - 1])];
    dp_i1 = dp_i; // 没有触发垃圾回收，所以显示的空间较多
  }
  return dp_i1[0];
};
// @lc code=end

