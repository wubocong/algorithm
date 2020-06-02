/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  let rootPos = inorder.length - 1;
  function getTree(start = 0, end = inorder.length - 1) {
    if (start > end) return null;
    const pos = inorder.indexOf(postorder[rootPos], start);
    return {
      val: postorder[rootPos--],
      right: getTree(pos + 1, end),
      left: getTree(start, pos - 1),
    };
  }
  return getTree();
};
// @lc code=end

