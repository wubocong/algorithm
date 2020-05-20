/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head) {
    let last = null,
      prev = head,
      cur = head.next,
      value = head.val,
      count = 1;

    while (cur) {
      if (cur.val === value) count++;
      else {
        if (count === 1) last = prev;
        else {
          if (last) last.next = cur;
          else head = cur;
          count = 1;
        }
        prev = cur;
        value = cur.val;
      }
      cur = cur.next;
    }
    if (count > 1)
      if (last) last.next = null;
      else head = null;
  }
  return head;
};
// @lc code=end
