import { validParenthesisV1Refactored as validParenthesis } from './valid-parenthesis'

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false
 
// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'

describe('Valid Parenthesis', () => {
    test('case 1', () => {
        expect(validParenthesis('[]')).toBe(true)
    })

    test('case 2', () => {
        expect(validParenthesis('[](){}')).toBe(true)
    })

    test('case 3', () => {
        expect(validParenthesis('(}')).toBe(false)
    })

    test('case 4', () => {
        expect(validParenthesis('([{}])')).toBe(true)
    })

    test('case 5', () => {
        expect(validParenthesis('([{}()[]])')).toBe(true)
    })

    test('case 6', () => {
        expect(validParenthesis('([{}()[]})')).toBe(false)
    })

    test('case 7', () => {
        expect(validParenthesis(')')).toBe(false)
    })

    test('case 8', () => {
        expect(validParenthesis('([)]')).toBe(false)
    })
})