/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const len = intervals.length;
  const merged = [];
  if (len > 0) {
    merged.push(intervals[0]);
    let index = 0;
    for (let i = 1; i < len; i++) {
      if (intervals[i][0] <= merged[index][1]) {
        if (intervals[i][1] > merged[index][1])
          merged[index][1] = intervals[i][1];
      } else {
        merged.push(intervals[i]);
        index++;
      }
    }
  }
  return merged;
};
// @lc code=end
