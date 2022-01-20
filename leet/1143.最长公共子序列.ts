/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
// function longestCommonSubsequence(text1: string, text2: string): number {
//   const dp = [];
//   const l1 = text1.length,
//     l2 = text2.length;
//   for (let i = -1; i < l1; i++) {
//     dp[i] = [];
//   }
//   for (let i = 0; i < l1; i++) {
//     for (let j = 0; j < l2; j++) {
//       if (text1[i] === text2[j]) {
//         dp[i][j] = 1 + (dp[i - 1][j - 1] ?? 0);
//       } else {
//         dp[i][j] = Math.max(dp[i - 1][j] ?? 0, dp[i][j - 1] ?? 0);
//       }
//     }
//   }
//   return dp[l1 - 1][l2 - 1] ?? 0;
// }

// 状态压缩
function longestCommonSubsequence(text1: string, text2: string): number {
  const l1 = text1.length,
    l2 = text2.length;
  let dp_i1 = [],
    dp_i = [];
  for (let i = 0; i < l1; i++) {
    dp_i1 = dp_i;
    dp_i = [];
    for (let j = 0; j < l2; j++) {
      if (text1[i] === text2[j]) {
        dp_i[j] = 1 + (dp_i1[j - 1] ?? 0);
      } else {
        dp_i[j] = Math.max(dp_i1[j] ?? 0, dp_i[j - 1] ?? 0);
      }
    }
  }
  return dp_i[l2 - 1] ?? 0;
}
