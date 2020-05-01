/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const count = [1, 1];
  for (let i = 2; i <= n; i++) {
    count[i] = count[i - 1] + count[i - 2];
  }
  return count[n];
};
// @lc code=end
