/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let first = head;
  if (head === null) return head;
  let len = 1;
  while (first.next) {
    len++;
    first = first.next;
  }
  k = k % len;
  if (k === 0) return head;
  let second = head;
  for (let i = 0; i < len - k - 1; i++) {
    second = second.next;
  }
  first.next = head;
  head = second.next;
  second.next = null;
  return head;
};
// @lc code=end
