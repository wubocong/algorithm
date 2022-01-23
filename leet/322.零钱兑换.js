/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function (coins, amount) {
  const dp = [0];
  for (let i = 1; i <= amount; i++) {
    dp.push(Infinity);
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j] && Number.isFinite(dp[i - coins[j]])) dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
    }
  }
  return isFinite(dp[amount]) ? dp[amount] : -1;
};
// @lc code=end

