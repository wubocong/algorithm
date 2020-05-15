/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let answer = '';
  if (t === '') return '';

  const tCount = {};
  for (let i = t.length - 1; i >= 0; i--) {
    if (tCount[t[i]]) tCount[t[i]]++;
    else tCount[t[i]] = 1;
  }

  const sLength = s.length;
  const windowCount = {};
  for (let i = 0; i < sLength; i++) {
    if (tCount[s[i]]) {
      if (windowCount[s[i]]) windowCount[s[i]]++;
      else windowCount[s[i]] = 1;
    }
  }
  for (let char in tCount) {
    if (!windowCount[char] || windowCount[char] < tCount[char]) return '';
  }

  let left = 0,
    right = s.length - 1;

  while (!tCount[s[right]] || windowCount[s[right]] > tCount[s[right]]) {
    windowCount[s[right]]--;
    right--;
  }
  do {
    while (!tCount[s[left]] || windowCount[s[left]] > tCount[s[left]]) {
      windowCount[s[left]] && windowCount[s[left]]--;
      left++;
    }
    if (!answer || right - left + 1 < answer.length)
      answer = s.slice(left, right + 1);

    do {
      right++;
      if (right === sLength) break;
      windowCount[s[right]] && windowCount[s[right]]++;
    } while (s[right] !== s[left]);

    windowCount[s[left]]--;
    left++;
  } while (right < sLength);
  return answer;
};
// @lc code=end
