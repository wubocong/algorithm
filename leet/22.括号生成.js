/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const arr = [];
  if (n > 0) {
    function recursive(left = 0, str = '', leftSum = 0) {
      if (str.length === 2 * n) arr.push(str);
      if (leftSum < n) recursive(left + 1, str + '(', leftSum + 1);
      if (left > 0) recursive(left - 1, str + ')', leftSum);
    }
    recursive();
  }
  return arr;
};
// @lc code=end
