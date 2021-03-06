/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root) {
    let node = root;
    while (node.left) {
      const nextLeft = node.left;
      while (node) {
        node.left.next = node.right;
        if (node.next) {
          node.right.next = node.next.left;
          node = node.next;
        } else break;
      }
      node = nextLeft;
    }
  }
  return root;
};
// @lc code=end
