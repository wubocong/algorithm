/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => a[0] - b[0]);
  const dp = [1];
  let max = 1;
  for (let i = 1; i < envelopes.length; i++) {
    dp.push(1);
    for (let j = i - 1; j >= 0; j--) {
      if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
        if (max < dp[i]) max = dp[i];
        if (dp[i] === j + 2) break;
      }
    }
  }
  return max;
};
// @lc code=end

