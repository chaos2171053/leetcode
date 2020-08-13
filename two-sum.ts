// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
function twoSum(nums: number[], target: number): number[] {
    let res: number[] = []
    let len = nums.length
    if (len === 0) { return [] } else if (len === 1) { return [0] }
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let sum = nums[i] + nums[j]
            if (sum === target)
                res = res.concat([i, j])
        }
    }
    return res
};

console.log(twoSum([2, 7, 11, 15], 9))