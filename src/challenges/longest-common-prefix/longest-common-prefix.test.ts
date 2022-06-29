import { longestCommonPrefixV2 as longestCommonPrefix} from './longest-common-prefix'

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 
// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

describe('longest common prefix', () => {
    test('case 1', () => {
        expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
    })

    test('case 2', () => {
        expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
    })

    test('case 3', () => {
        expect(longestCommonPrefix(['abcdefg', 'abcdef', 'abcde'])).toBe('abcde')
    })

    test('case 4', () => {
        expect(longestCommonPrefix(['abc', 'abc', 'abc'])).toBe('abc')
    })
})