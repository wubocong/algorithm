/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  let depth = 0;
  if (root) {
    function dfs(node, h = 1) {
      if (h > depth) depth = h;
      if (node.left) dfs(node.left, h + 1);
      if (node.right) dfs(node.right, h + 1);
    }
    dfs(root);
  }
  return depth;
};
// @lc code=end
