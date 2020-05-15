/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const unique = {};
  let count = 0;
  for (let i = emails.length - 1; i >= 0; i--) {
    let email = emails[i];
    let atPos = email.indexOf('@');
    email = email.substring(0, atPos).replace(/\./g, '') + email.substring(atPos);
    const plusPos = email.indexOf('+');
    if (plusPos > -1) {
      atPos = email.indexOf('@');
      email = email.substring(0, plusPos) + email.substring(atPos);
    }
    if (!unique.hasOwnProperty(email)) {
      unique[email] = true;
      count++;
    }
  }
  return count;
};
// @lc code=end

