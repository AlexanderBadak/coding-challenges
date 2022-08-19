// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// Optional Bonus: Write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]
 
// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

import { findFirstLastV2 as findFirstLast } from './find-first-last'

describe('find first last position', () => {
    test('case 1', () => {
        expect(findFirstLast([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4])
    })
    test('case 2', () => {
        expect(findFirstLast([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1])
    })
    test('case 3', () => {
        expect(findFirstLast([], 0)).toEqual([-1, -1])
    })
    test('case 4', () => {
        expect(findFirstLast([1], 1)).toEqual([0, 0])
    })
    test('case 5', () => {
        expect(findFirstLast([1, 1, 1, 1, 1], 1)).toEqual([0, 4])
    })
})