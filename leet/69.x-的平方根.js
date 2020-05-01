/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let cur = 1,
    pre;
  while (true) {
    pre = cur;
    cur = (cur + x / cur) / 2;
    if (Math.abs(pre - cur) < 1e-6) return Math.floor(cur);
  }
};
// @lc code=end
