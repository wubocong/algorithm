/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n < 1) return [];
  const memoized = {};
  function recursive(start = 1, end = n) {
    if (start > end) return [null];
    const key = `${start}-${end}`;
    if (memoized[key]) return memoized[key];
    const trees = [];
    for (let i = start; i <= end; i++) {
      const leftTrees = recursive(start, i - 1);
      const rightTrees = recursive(i + 1, end);
      for (let leftTree of leftTrees)
        for (let rightTree of rightTrees)
          trees.push({ val: i, left: leftTree, right: rightTree });
    }
    memoized[key] = trees;
    return trees;
  }
  return recursive();
};
// @lc code=end
