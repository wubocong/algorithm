/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const solution = [];
  const combination = [];
  function recursive(index = 1) {
    const count = combination.length;
    const max = n - k + count + 1;
    for (let i = index; i <= max; i++) {
      combination.push(i);
      if (count === k - 1) solution.push([...combination]);
      else recursive(i + 1, combination);
      combination.pop();
    }
  }
  recursive();
  return solution;
};
// @lc code=end
