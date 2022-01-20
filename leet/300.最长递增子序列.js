/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// dp解法
var lengthOfLIS = function (nums) {
  const dp = [];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    dp.push(1);
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && dp[j] + 1 > dp[i])
        dp[i] = dp[j] + 1;
    }
    if (dp[i] > max) max = dp[i]
  }
  return max;
};
// @lc code=end

