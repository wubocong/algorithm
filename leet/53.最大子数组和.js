/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = dp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp = Math.max(dp + nums[i], nums[i]);
    if (dp > max) max = dp;
  }
  return max;
};
// @lc code=end

