/*
 * @lc app=leetcode.cn id=793 lang=javascript
 *
 * [793] 阶乘函数后 K 个零
 */

// @lc code=start
/**
 * @param {number} K
 * @return {number}
 */

var preimageSizeFZF = function (K) {
  const MAX_RIGHT = 5 * (K + 1);

  function searchRight(sLeft) {
    let left = sLeft, right = MAX_RIGHT;

    while (left < right) {
      const mid = Math.floor(left + (right - left) / 2);
      const calcK = calcZero(mid);
      if (calcK === K) left = mid + 1;
      else if (calcK < K) left = mid + 1;
      else if (calcK > K) right = mid;
    }
    return left - 1;
  }
  function calcZero(num) {
    let count = 0;
    while (num >= 5) {
      num = Math.floor(num / 5);
      count += num;
    }
    return count;
  }
  let left = 0, right = MAX_RIGHT;
  let rightSearched = false;
  let resultRight;
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    const calcK = calcZero(mid);
    if (calcK === K) {
      right = mid;
      if (!rightSearched) {
        resultRight = searchRight(mid); //第一次匹配时搜索右侧边界
        rightSearched = true;
      }
    }
    else if (calcK < K) left = mid + 1;
    else if (calcK > K) right = mid;
  }
  return calcZero(left) === K ? resultRight - left + 1 : 0;
};

preimageSizeFZF(3)

// @lc code=end

