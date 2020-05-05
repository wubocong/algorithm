/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const len = s.length;
  let num = 0;
  for (let i = 0; i < len; ) {
    if (s[i] === 'I') {
      if (s[i + 1] === 'V') {
        num += 4;
        i = i + 2;
      } else if (s[i + 1] === 'X') {
        num += 9;
        i = i + 2;
      } else {
        num++;
        i++;
      }
    } else if (s[i] === 'X') {
      if (s[i + 1] === 'L') {
        num += 40;
        i = i + 2;
      } else if (s[i + 1] === 'C') {
        num += 90;
        i = i + 2;
      } else {
        num += 10;
        i++;
      }
    } else if (s[i] === 'C') {
      if (s[i + 1] === 'D') {
        num += 400;
        i = i + 2;
      } else if (s[i + 1] === 'M') {
        num += 900;
        i = i + 2;
      } else {
        num += 100;
        i++;
      }
    } else {
      num += map[s[i++]];
    }
  }
  return num;
};
// @lc code=end
