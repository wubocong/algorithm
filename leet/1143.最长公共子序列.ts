/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  const dp = [];
  const l1 = text1.length,
    l2 = text2.length;
  for (let i = -1; i < l1; i++) {
    dp[i] = [];
  }
  for (let i = 0; i < l1; i++) {
    for (let j = 0; j < l2; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + (dp[i - 1][j - 1] ?? 0);
      } else {
        dp[i][j] = Math.max(dp[i - 1][j] ?? 0, dp[i][j - 1] ?? 0);
      }
    }
  }
  return dp[l1 - 1][l2 - 1] ?? 0;
}
