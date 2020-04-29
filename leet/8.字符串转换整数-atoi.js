/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const len = str.length;
  let number = '';
  const INT_MAX = 2147483647,
    INT_MIN = -2147483648;
  function state(index) {
    if (index === len) return;

    const char = str[index];
    const ascii = char.charCodeAt(0);
    if (char === ' ') {
      return state(index + 1);
    } else if (char === '-') {
      number += char;
      return inNumber(index + 1);
    } else if (char === '+') {
      return inNumber(index + 1);
    } else if (ascii >= 48 && ascii <= 57) {
      if ((char !== '0') || (char === '0' && !/^-?$/.test(number)))
        number += char;
      return inNumber(index + 1);
    } else {
      return;
    }
  }
  function inNumber(index) {
    if (index === len) return;

    const char = str[index];
    const ascii = char.charCodeAt(0);
    if (ascii >= 48 && ascii <= 57) {
      if ((char !== '0') || (char === '0' && !/^-?$/.test(number)))
        number += char;
      return inNumber(index + 1);
    } else {
      return;
    }
  }
  state(0);
  if (!number || number === '-' || number === '+') {
    return 0;
  } else {
    if (number.length > 11) {
      if (number[0] === '-') return INT_MIN;
      else return INT_MAX;
    } else {
      const int = +number;
      if (int > INT_MAX) return INT_MAX;
      else if (int < INT_MIN) return INT_MIN;
      else return int;
    }
  }
};
// @lc code=end
