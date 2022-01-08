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
    connectTwo(root.left, root.right);
  }
  return root;
};
function connectTwo(leftNode, rightNode) {
  if (leftNode && rightNode) {
    leftNode.next = rightNode;
    connectTwo(leftNode.left, leftNode.right);
    connectTwo(leftNode.right, rightNode.left);
    connectTwo(rightNode.left, rightNode.right)
  }
}
// 2020/06/02解法，记录下一个开头的leftNode，层次遍历，上一层帮下一层连好线
// var connect = function (root) {
//   if (root) {
//     let node = root;
//     while (node.left) {
//       const nextLeft = node.left;
//       while (node) {
//         node.left.next = node.right;
//         if (node.next) {
//           node.right.next = node.next.left;
//           node = node.next;
//         } else break;
//       }
//       node = nextLeft;
//     }
//   }
//   return root;
// };
// @lc code=end
