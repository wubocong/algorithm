/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  const dp = [{ len: 1, count: 1 }];
  let maxLen = 1, count = 1;
  for (let i = 1; i < nums.length; i++) {
    dp.push({ len: 1, count: 1 });
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        const len = dp[j].len + 1;
        if (len > dp[i].len) {
          dp[i].len = dp[j].len + 1;
          dp[i].count = dp[j].count;
          if (len === i + 1) continue; // 剪枝
        } else if (len === dp[i].len) {
          dp[i].count += dp[j].count;
        }
      }
    }
    if (dp[i].len > maxLen) {
      maxLen = dp[i].len;
      count = dp[i].count;
    }
    else if (dp[i].len === maxLen) { count += dp[i].count; }
  }
  return count;
};
// @lc code=end

