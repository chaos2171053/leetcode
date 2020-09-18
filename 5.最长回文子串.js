/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const validPalindomicStr = (str, left, right) => {
    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

var longestPalindrome = function (s) {
    const len = s.length
    // 长度为1时，其本身为回文子串。
    // 长度为0时，则不存在回文子串。
    if (len < 2) {
        return s
    }
    let maxLen = 1 // 最长回文子串长度最小为1
    let begin = 0
    // 存在最坏情况，可能最后两个字符才组成回文子串，所以需要i<len-1, j = i+1,j<len,即倒数第二个字符和倒数第一个字符比较
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (j - i + 1 > maxLen && validPalindomicStr(s, i, j)) {
                maxLen = j - i + 1
                begin = i
            }

        }
    }
    return s.substring(begin, begin + maxLen);
};
// @lc code=end

