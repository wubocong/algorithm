/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let rootPos = 0;
  function getTree(start = 0, end = preorder.length - 1) {
    if (start > end) return null;
    const pos = inorder.indexOf(preorder[rootPos], start);
    return {
      val: preorder[rootPos++],
      left: getTree(start, pos - 1),
      right: getTree(pos + 1, end),
    };
  }
  return getTree();
};
// @lc code=end
