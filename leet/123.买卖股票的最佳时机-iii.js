/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const k = 2;
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

