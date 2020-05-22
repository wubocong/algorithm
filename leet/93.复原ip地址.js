/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const solution = [];
  const len = s.length;
  if (len <= 12 && len >= 4) {
    function recursive(index = 0, left = 4, str = '') {
      if (left === 1) {
        if (s[index] === '0') {
          if (index === len - 1) solution.push(str + '0');
        } else {
          const segment = s.slice(index);
          if (Number(segment) <= 255) solution.push(str + segment);
        }
      } else {
        if (s[index] === '0') {
          const average = (len - index - 1) / (left - 1);
          if (average <= 3 && average >= 1)
            recursive(index + 1, left - 1, str + '0.');
        } else
          for (let i = index + 1; i <= index + 3 && i < len; i++) {
            const segment = s.slice(index, i);
            const average = (len - i) / (left - 1);
            if (Number(segment) <= 255 && average <= 3 && average >= 1)
              recursive(i, left - 1, str + segment + '.');
          }
      }
    }
    recursive();
  }
  return solution;
};
// @lc code=end
