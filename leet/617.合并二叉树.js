/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  function dfs(node1, node2) {
    if (node1.left && node2.left) {
      node1.left.val += node2.left.val;
      dfs(node1.left, node2.left);
    } else if (node2.left) {
      node1.left = node2.left;
    }
    if (node1.right && node2.right) {
      node1.right.val += node2.right.val;
      dfs(node1.right, node2.right);
    } else if (node2.right) {
      node1.right = node2.right;
    }
  }
  if (root1 && root2) {
    root1.val += root2.val;
    dfs(root1, root2)
  } else if (root2) {
    root1 = root2;
  }
  return root1;
};
// @lc code=end

