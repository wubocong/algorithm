/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var numDecodings = function (s) {
//   let count = 0;
//   const len = s.length;
//   if (len > 0) {
//     function recursive(index = 0) {
//       if (index === len) count++;
//       else {
//         if (Number(s.slice(index, index + 1)) > 0) recursive(index + 1);
//         if (index + 2 <= len) {
//           const num = Number(s.slice(index, index + 2));
//           if (num > 0 && num <= 26 && s[index] !== '0') recursive(index + 2);
//         }
//       }
//     }
//     recursive();
//   }
//   return count;
// };
var numDecodings = function (s) {
  const count = [1];
  const len = s.length;
  count[1] = Number(s[0]) > 0 ? 1 : 0;
  for (let i = 2; i <= len; i++) {
    count[i] = 0;
    if (Number(s[i - 1]) > 0) count[i] += count[i - 1];
    if (s[i - 2] !== '0') {
      const num = Number(s.slice(i - 2, i));
      if (num <= 26) count[i] += count[i - 2];
    }
    if (count[i] === 0) return 0;
  }
  return count[len];
};
// @lc code=end
