/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const memo = {}
  const sLength = s.length, pLength = p.length;
  function dp(si, pi) {
    if (si === sLength && pi === pLength) return true;
    if (si > sLength || pi > pLength) return false;
    const key = si + ',' + pi;
    if (memo[key] !== undefined) return memo[key];
    if (s[si] === p[pi] || p[pi] === '.') {
      if (p[pi + 1] === '*') {
        memo[key] = dp(si, pi + 2) || dp(si + 1, pi) || dp(si + 1, pi + 2);
      } else {
        memo[key] = dp(si + 1, pi + 1)
      }
    } else {
      if (p[pi + 1] === '*') {
        memo[key] = dp(si, pi + 2);
      } else {
        memo[key] = false;
      }
    }
    return memo[key];
  }
  return dp(0, 0);
};
// @lc code=end