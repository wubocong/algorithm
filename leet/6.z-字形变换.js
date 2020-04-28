/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const array = [];
  for (i = numRows; i > 0; i--) {
    array.push([]);
  }
  const len = s.length;

  for (let i = 0; i < len; i++) {
    const mod = i % (2 * numRows - 2);
    if (mod < numRows) {
      array[mod].push(s[i]);
    } else {
      array[2 * numRows - 2 - mod].push(s[i]);
    }
  }
  let str = '';
  for (i = 0; i < numRows; i++) {
    str += array[i].join('');
  }
  return str;
};
// @lc code=end
