/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const stack = [];
  const traversal = [];
  let node = root;

  while (node) {
    if (!node.visited) {
      traversal.push(node.val);
      node.visited = true;
    }
    if (node.left && !node.left.visited) {
      stack.push(node);
      node = node.left;
    } else if (node.right && !node.right.visited) {
      stack.push(node);
      node = node.right;
    } else node = stack.pop();
  }
  return traversal;
};
// @lc code=end
