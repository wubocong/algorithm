/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 递归dp解法
// var isMatch = function (s, p) {
//   const memo = {}
//   const sLength = s.length, pLength = p.length;
//   function dp(si, pi) {
//     if (si === sLength && pi === pLength) return true;
//     if (si > sLength || pi > pLength) return false;
//     const key = si + ',' + pi;
//     if (memo[key] !== undefined) return memo[key];
//     if (s[si] === p[pi] || p[pi] === '.') {
//       if (p[pi + 1] === '*') {
//         memo[key] = dp(si, pi + 2) || dp(si + 1, pi);
//       } else {
//         memo[key] = dp(si + 1, pi + 1)
//       }
//     } else {
//       if (p[pi + 1] === '*') {
//         memo[key] = dp(si, pi + 2);
//       } else {
//         memo[key] = false;
//       }
//     }
//     return memo[key];
//   }
//   return dp(0, 0);
// };

// dp table解法，可以进一步使用状态压缩
var isMatch = function (s, p) {
  const sLength = s.length, pLength = p.length;
  const dp = [];
  for (let i = 0; i <= sLength; i++) {
    dp.push([]);
    for (let j = 0; j <= pLength; j++) {
      dp[i][j] = false;
    }
  }
  dp[sLength][pLength] = true;
  for (let si = sLength; si >= 0; si--) {
    for (let pi = pLength - 1; pi >= 0; pi--) { // si===sLength，这一行可能为true，因为p剩余的可以不匹配，但pi===pLength这一行一定为false，因为模式串一镜到底，而待匹配的串还没完全匹配
      if (s[si] === p[pi] || p[pi] === '.') {
        if (p[pi + 1] === '*') dp[si][pi] = (pi + 2 <= pLength && dp[si][pi + 2]) || (si + 1 <= sLength && dp[si + 1][pi])
        else dp[si][pi] = (si + 1 <= sLength && pi + 1 <= pLength && dp[si + 1][pi + 1])
      } else {
        if (p[pi + 1] === '*') dp[si][pi] = (pi + 2 <= pLength && dp[si][pi + 2]);
        else dp[si][pi] = false;
      }
    }
  }
  return dp[0][0];
}
// @lc code=end