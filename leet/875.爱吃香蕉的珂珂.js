/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 0, right = 0;
  left = Math.ceil(piles.reduceRight((sum, val) => {
    if (val > right) right = val;
    return sum + val;
  }, 0) / h);

  function calcHour(K) {
    return piles.reduce((sum, val) => sum + Math.ceil(val / K), 0);
  }
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const hours = calcHour(mid)
    if (hours > h) {
      left = mid + 1;
    } else if (hours <= h) {
      right = mid;
    }
  }
  return left;
};
// @lc code=end

