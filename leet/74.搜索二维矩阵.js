/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const n = matrix.length,
    m = n && matrix[0].length;

  let lo = 0,
    hi = m * n - 1;
  if (hi === -1) return false;
  if (hi === 0) return target === matrix[0][0];
  while (lo < hi) {
    const loY = Math.floor(lo / m),
      loX = lo - loY * m;
    const hiY = Math.floor(hi / m),
      hiX = hi - hiY * m;
    let mid = Math.floor((lo + hi) / 2);
    const midY = Math.floor(mid / m),
      midX = mid - midY * m;
    if (
      target === matrix[loY][loX] ||
      target === matrix[hiY][hiX] ||
      target === matrix[midY][midX]
    )
      return true;
    if (target < matrix[midY][midX]) hi = mid - 1;
    else lo = mid + 1;
  }
  return false;
};
// @lc code=end
