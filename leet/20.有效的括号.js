/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const leftOf = {
  ')': '(',
  ']': '[',
  '}': '{',
}
var isValid = function (s) {
  const sLength = s.length;
  const stack = [];
  for (let i = 0; i < sLength; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') stack.push(s[i]);
    else if (stack.pop() !== leftOf[s[i]]) return false;

  }
  return stack.length === 0;
};
// @lc code=end

