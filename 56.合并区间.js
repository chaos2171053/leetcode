/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 0) return []
    let res = []
    intervals.sort((a, b) => a[0] - b[0]) // 升序
    let candidate = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i]
        /**
         * 比较前一个数组的右边界和当前数组的左边界。如果有左边界大于等于右边界
         * 比如 [[1,3],[2,6]],3>2
         */
        if (candidate[1] >= cur[0]) {
            candidate[1] = Math.max(cur[1], candidate[1]) // 所要合并的数组，左边界不变，即1不变，取3和6的最大值
        } else { // 不重合，不能合并
            res.push(candidate)
            candidate = cur
        }
    }
    res.push(candidate)
    return res
};
// @lc code=end

