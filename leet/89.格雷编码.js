/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let set = [0];
  let add = 1;
  for (let i = 0; i < n; i++) {
    copy = set.map((num) => num + add).reverse();
    set = set.concat(copy);
    add <<= 1;
  }
  return set;
};
// @lc code=end
