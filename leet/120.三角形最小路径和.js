/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const len = triangle.length;
  let min = len ? (triangle[0][0] ? triangle[0][0] : 0) : 0;

  for (let i = 1; i < len; i++) {
    triangle[i][0] += triangle[i - 1][0];
    triangle[i][i] += triangle[i - 1][i - 1];
    if (i === len - 1) {
      min = triangle[i][0];
      if (triangle[i][i] < min) min = triangle[i][i];
    }
    for (let j = 1; j < i; j++) {
      triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1]);
      if (triangle[i][j] < min) min = triangle[i][j];
    }
  }
  return min;
};
// @lc code=end
