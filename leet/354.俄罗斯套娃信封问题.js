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
  envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
  const top = [];
  for (let i = 0; i < envelopes.length; i++) {
    let left = 0; right = top.length;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (top[mid] < envelopes[i][1]) {
        left = mid + 1;
      } else if (top[mid] >= envelopes[i][1]) {
        right = mid;
      }
    }
    top[left] = envelopes[i][1];
  }
  return top.length;
};
// @lc code=end

