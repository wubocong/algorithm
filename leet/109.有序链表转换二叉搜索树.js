/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const nodes = [];
  let pointer = head;
  while (pointer) {
    nodes.push(pointer.val);
    pointer = pointer.next;
  }
  const len = nodes.length;
  function getTree(start = 0, end = len - 1) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    return {
      val: nodes[mid],
      left: getTree(start, mid - 1),
      right: getTree(mid + 1, end),
    };
  }
  return getTree();
};

// @lc code=end
