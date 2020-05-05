/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let first = head,
    second = head;
  for (let i = 0; i < n; i++) first = first.next;
  if (first === null) return head.next;
  while (first.next) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return head;
};
// @lc code=end
