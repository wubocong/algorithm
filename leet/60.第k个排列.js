/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// var getPermutation = function (n, k) {
//   const nums = [];
//   for (let i = 1; i <= n; i++) {
//     nums.push(i);
//   }
//   let count = 0;
//   let answer = null;
//   function recursive(unused = Array.from(nums), str = '') {
//     const len = unused.length;
//     if (len === 0 && ++count === k) answer = str;

//     for (let i = 0; i < len; i++) {
//       if (answer) return;
//       const newUnused = Array.from(unused);
//       newUnused.splice(i, 1);
//       recursive(newUnused, str + unused[i]);
//     }
//   }
//   recursive();
//   return answer;
// };
var getPermutation = function (n, k) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  const factor = [1, 1, 2, 6, 24, 120, 720, 5040, 40320];
  k--;
  let answer = '';
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(k / factor[i]);
    answer += nums[digit];
    nums.splice(digit, 1);
    k -= factor[i] * digit;
  }
  return answer;
};
// @lc code=end
