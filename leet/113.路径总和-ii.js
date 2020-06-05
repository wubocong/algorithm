/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const solution = [];
  const path = [];
  function dfs(node = root, tempSum = 0) {
    path.push(node.val);
    tempSum += node.val;
    if (node.left) dfs(node.left, tempSum);
    if (node.right) dfs(node.right, tempSum);
    if (!node.left && !node.right && tempSum === sum) solution.push([...path]);
    path.pop();
  }
  if (root) dfs();
  return solution;
};
// @lc code=end
