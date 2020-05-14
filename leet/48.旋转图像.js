/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  const center = (n - 1) / 2;
  const times = Math.floor(n / 2);
  for (let i = 0; i < times; i++) {
    for (let j = i; j < n - i - 1; j++) {
      let y = i,
        x = j;
      const radius = Math.sqrt(
        (x - center) * (x - center) + (y - center) * (y - center)
      );
      let theta,
        temp1 = matrix[y][x],
        temp2;
      theta = Math.atan((y - center) / (x - center));
      if (theta > 0) theta += Math.PI;
      for (let _ = 0; _ < 3; _++) {
        theta += Math.PI / 2;
        y = Math.round(Math.sin(theta) * radius + center);
        x = Math.round(Math.cos(theta) * radius + center);
        temp2 = matrix[y][x];
        matrix[y][x] = temp1;
        temp1 = temp2;
      }
      matrix[i][j] = temp1;
    }
  }
};
// @lc code=end
