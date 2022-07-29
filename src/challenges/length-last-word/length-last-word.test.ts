import { lengthLastWordV1 as lengthLastWord } from './length-last-word'

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 
// Constraints:
// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

describe('length last word', () => {
    test('case 1', () => {
        expect(lengthLastWord('   fly me   to   the moon  ')).toBe(4)
    })

    test('case 2', () => {
        expect(lengthLastWord('Hello World')).toBe(5)
    })

    test('case 3', () => {
        expect(lengthLastWord('luffy is still joyboy')).toBe(6)
    })

    test('case 4', () => {
        expect(lengthLastWord('test')).toBe(4)
    })
})