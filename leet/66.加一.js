/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    if (++digits[i] === 10) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
    } else {
      break;
    }
  }
  return digits;
};
// @lc code=end
