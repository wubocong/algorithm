/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;
  function dfs(node = root, str = '') {
    str += node.val;
    if (node.left) dfs(node.left, str);
    if (node.right) dfs(node.right, str);
    if (!node.left && !node.right) sum += Number(str);
  }
  root && dfs();
  return sum;
};
// @lc code=end
