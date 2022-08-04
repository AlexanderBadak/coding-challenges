import { buddyStringsV2 as buddyStrings } from './buddy-strings'

// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:
// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

// Example 2:
// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

// Example 3:
// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
 
// Constraints:
// 1 <= s.length, goal.length <= 2 * 104
// s and goal consist of lowercase letters.

describe('buddy strings', () => {
    test('case 1', () => {
        expect(buddyStrings('ab', 'ba')).toBe(true)
    })
    test('case 2', () => {
        expect(buddyStrings('ab', 'ab')).toBe(false)
    })
    test('case 3', () => {
        expect(buddyStrings('aa', 'aa')).toBe(true)
    })
    test('case 4', () => {
        expect(buddyStrings('suavemente', 'euavements')).toBe(true)
    })
    test('case 5', () => {
        expect(buddyStrings('aa', 'aaa')).toBe(false)
    })
    test('case 6', () => {
        expect(buddyStrings('aba', 'aba')).toBe(true)
    })
    test('case 7', () => {
        expect(buddyStrings('abc', 'abc')).toBe(false)
    })
    test('case 8', () => {
        expect(buddyStrings('suavemente', 'luavements')).toBe(false)
    })
    test('case 9', () => {
        expect(buddyStrings('aaaaa', 'aaaaa')).toBe(true)
    })
    test('case 10', () => {
        expect(buddyStrings('abcda', 'abcda')).toBe(true)
    })
})