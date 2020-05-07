/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const len = strs.length;
  const solution = [];
  const map = {
    a: 2,
    b: 3,
    c: 5,
    d: 7,
    e: 11,
    f: 13,
    g: 17,
    h: 19,
    i: 23,
    j: 29,
    k: 31,
    l: 37,
    m: 41,
    n: 43,
    o: 47,
    p: 53,
    q: 59,
    r: 61,
    s: 67,
    t: 71,
    u: 73,
    v: 79,
    w: 83,
    x: 89,
    y: 97,
    z: 101,
  };
  const productMap = new Map();
  for (let i = 0; i < len; i++) {
    let product = 1n;
    for (let j = strs[i].length - 1; j >= 0; j--) {
      product *= BigInt(map[strs[i][j]]);
    }
    if (productMap.has(product)) {
      const arr = productMap.get(product);
      arr.push(strs[i]);
      productMap.set(product, arr);
    } else productMap.set(product, [strs[i]]);
  }
  for (let arr of productMap.values()) {
    solution.push(arr);
  }
  return solution;
};
// @lc code=end
