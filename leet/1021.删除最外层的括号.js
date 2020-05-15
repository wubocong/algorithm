/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  var left = 1, right = 0;
  var l = 1, r = 1;
  var s = '';
  while (r <= S.length) {
    if (S[r] === '(') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      s += S.substring(l, r);
      l = r = r + 2;
      left = 1;
      right = 0;
    } else {
      r++;
    }
  }
  return s;
};
// @lc code=end

