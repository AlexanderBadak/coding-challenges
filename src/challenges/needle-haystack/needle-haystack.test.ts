// Implement strStr().
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
 
// Constraints:
// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

import { needleHaystackV1Refactored as needleHaystack } from './needle-haystack'

describe('strStr', () => {
    test('case 1', () => {
        expect(needleHaystack('hello', 'll')).toBe(2)
    })
    test('case 2', () => {
        expect(needleHaystack('aaaaa', 'bba')).toBe(-1)
    })
    test('case 3', () => {
        expect(needleHaystack('aaaaa', '')).toBe(0)
    })
    test('case 4', () => {
        expect(needleHaystack('helllolllolllollll', 'llll')).toBe(14)
    })
})