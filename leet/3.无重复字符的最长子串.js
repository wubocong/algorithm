/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0,
    end = 0;
  const len = s.length;
  const set = new Set();
  let maxLength = 0,
    count = 0;
  if (len > 0) {
    while (true) {
      if (!set.has(s[end])) {
        count++;
        if (count > maxLength) maxLength = count;
        set.add(s[end++]);
        if (len - start <= maxLength) break;
      } else {
        count--;
        set.delete(s[start++]);
      }
    }
  }
  return maxLength;
};
// @lc code=end
