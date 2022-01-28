/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
// dp[k][m]表示有k枚鸡蛋最多扔m次能判断的楼层数
// var superEggDrop = function (K, N) {
//   const dp = [];
//   for (let i = 0; i <= K; i++) {
//     dp.push([])
//     for (let j = 0; j <= N; j++) {
//       dp[i].push(0);
//     }
//   }
//   let m = 0;
//   while (dp[K][m] < N) {
//     m++;
//     for (let k = 1; k <= K; k++) {
//       dp[k][m] = dp[k - 1][m - 1] + dp[k][m - 1] + 1;
//     }
//   }
//   return m;
// };
// 状态压缩
var superEggDrop = function (K, N) {
  let dp_m1 = [];
  for (let i = 0; i <= K; i++) {
    dp_m1.push(0);
  }
  let m = 0;
  while (dp_m1[K] < N) {
    const dp_m = [0];
    m++;
    for (let k = 1; k <= K; k++) {
      dp_m[k] = dp_m1[k - 1] + dp_m1[k] + 1;
    }
    dp_m1 = dp_m;
  }
  return m;
};
// @lc code=end

