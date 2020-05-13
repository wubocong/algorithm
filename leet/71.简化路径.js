/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  if (path[0] !== '/') path = '/' + path;
  let temp = path.replace(/\/{2,}/g, '/').replace(/\/$/, '');
  let arr = temp.split('/');
  for (let i = 1; i < arr.length; ) {
    if (arr[i] === '..') {
      if (i > 1) arr.splice(--i, 2);
      else arr.splice(i, 1);
    } else if (arr[i] === '.') arr.splice(i, 1);
    else i++;
  }
  return arr.join('/') || '/';
};
// @lc code=end
