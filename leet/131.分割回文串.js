/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const len = s.length;
  const solution = [];
  const combination = [];

  function isPalindrome(str) {
    let start = 0,
      end = str.length - 1;
    while (start < end) {
      if (str[start] !== str[end]) return false;
      start++;
      end--;
    }
    return true;
  }
  function backtrack(start = 0) {
    if (start === len) {
      solution.push([...combination]);
      return;
    }
    for (let i = start + 1; i <= len; i++) {
      const str = s.slice(start, i);
      if (isPalindrome(str)) {
        combination.push(str);
        backtrack(i);
        combination.pop();
      }
    }
  }
  backtrack();
  return solution;
};
// @lc code=end
