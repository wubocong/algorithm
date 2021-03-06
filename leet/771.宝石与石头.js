/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var obj = {};
  var count = 0;
  for (var i = J.length - 1; i >= 0; i--) {
    obj[J[i]] = true;
  }
  for (var i = S.length - 1; i >= 0; i--) {
    if (obj[S[i]]) count++;
  }
  return count;
};
// @lc code=end

