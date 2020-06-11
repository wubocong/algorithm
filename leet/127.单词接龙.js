/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  const wordSet = new Set(wordList);
  function canTransform(pre, nxt) {
    let count = 0;
    for (let i = pre.length - 1; i >= 0; i--) {
      if (pre[i] !== nxt[i]) {
        count++;
        if (count > 1) return false;
      }
    }
    if (count === 1) return true;
    else return false;
  }

  let curSet = new Set([beginWord]);
  let min = 2;
  while (curSet.size) {
    const nextSet = new Set();
    for (let cur of curSet) {
      if (canTransform(cur, endWord)) return min;
      for (let nxt of wordSet) {
        if (canTransform(cur, nxt)) {
          nextSet.add(nxt);
          wordSet.delete(nxt);
        }
      }
    }
    curSet = nextSet;
    min++;
  }
  return 0;
};
// @lc code=end
