/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.used = 0;
  this.head = { next: null };
  this.tail = { prev: this.head };
  this.head.next = this.tail;
  this.map = {}
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map[key]) {
    this.top(key);
    return this.map[key].value;
  }
  else return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map[key]) {
    this.top(key);
    this.map[key].value = value;
  }
  else {
    this.map[key] = { key, value }
    this.top(key);
    if (++this.used > this.capacity) {
      this.removeTail();
    }
  }
};

LRUCache.prototype.top = function (key) {
  const item = this.map[key];
  item.next && (item.next.prev = item.prev);
  item.prev && (item.prev.next = item.next);
  item.prev = this.head;
  item.next = this.head.next;
  this.head.next.prev = item;
  this.head.next = item;
}
LRUCache.prototype.removeTail = function () {
  const item = this.tail.prev;
  delete this.map[item.key]
  item.prev.next = item.next;
  this.tail.prev = item.prev;
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
