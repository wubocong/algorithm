/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const len = digits.length;
  const arr = [];
  if (len) {
    function recursive(index = 0, str = '') {
      map[digits[index]].forEach((letter) => {
        if (index === len - 1) {
          arr.push(str + letter);
        } else {
          recursive(index + 1, str + letter);
        }
      });
    }
    recursive();
  }
  return arr;
};
// @lc code=end
