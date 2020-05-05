/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let index = 0;
  if (strs.length)
    while (true) {
      if (index === strs[0].length) return strs[0].substring(0, index);
      for (let i = strs.length - 1; i > 0; i--) {
        if (index === strs[i].length || strs[i][index] !== strs[0][index])
          return strs[0].substring(0, index);
      }
      index++;
    }
  return '';
};
// @lc code=end
