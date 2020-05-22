/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let prev,
    cur = head;
  for (let i = 1; i < m; i++) {
    prev = cur;
    cur = cur.next;
  }
  const start = cur;
  let next = cur.next;
  for (let i = 0; i < n - m; i++) {
    cur = next;
    next = cur.next;
    if (prev) {
      cur.next = prev.next;
      prev.next = cur;
    } else {
      cur.next = head;
      head = cur;
    }
  }
  start.next = next;
  return head;
};
// @lc code=end
