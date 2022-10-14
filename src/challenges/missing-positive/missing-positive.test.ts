// Given an unsorted integer array nums, return the smallest missing positive integer.
// Optional: Implement an algorithm that runs in O(n) time and uses constant extra space.

// Example 1:
// Input: nums = [1,2,0]
// Output: 3

// Example 2:
// Input: nums = [3,4,-1,1]
// Output: 2

// Example 3:
// Input: nums = [7,8,9,11,12]
// Output: 1
 
// Constraints:
// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1

import { missingPositiveV1 } from './missing-positive'

describe('first missing positive', () => {
    test('case 1', () => {
        expect(missingPositiveV1([1, 2, 0])).toBe(3)
    })
    test('case 2', () => {
        expect(missingPositiveV1([3, 4, -1, 1])).toBe(2)
    })
    test('case 3', () => {
        expect(missingPositiveV1([7, 8, 9, 11, 12])).toBe(1)
    })
    test('case 4', () => {
        expect(missingPositiveV1([0, 2, 1])).toBe(3)
    })
    test('case 5', () => {
        expect(missingPositiveV1([-1, 1, 3, 6, 7, 9, 10, 11, 2, 4, 6, 5, 8, 13])).toBe(12)
    })
    test('case 6', () => {
        expect(missingPositiveV1([1, 2, 3, 4, 5, 6, 7])).toBe(8)
    })
    test('case 7', () => {
        expect(missingPositiveV1([1, 2, 17, 18])).toBe(3)
    })
    test('case 8', () => {
        expect(missingPositiveV1([4, 3, 2, 1])).toBe(5)
    })
})