import { staircaseV1 } from './staircase'

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 
// Constraints:
// 1 <= n <= 45

describe('staircase', () => {
    test('case 1', () => {
        expect(staircaseV1(0)).toBe(0)
    })

    test('case 2', () => {
        expect(staircaseV1(1)).toBe(1)
    })

    test('case 3', () => {
        expect(staircaseV1(2)).toBe(2)
    })

    test('case 4', () => {
        expect(staircaseV1(3)).toBe(3)
    })

    test('case 5', () => {
        expect(staircaseV1(5)).toBe(8)
    })

    test('case 6', () => {
        expect(staircaseV1(10)).toBe(89)
    })

    test('case 7', () => {
        expect(staircaseV1(20)).toBe(10946)
    })
})