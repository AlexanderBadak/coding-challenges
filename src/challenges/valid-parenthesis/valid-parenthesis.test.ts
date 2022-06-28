import { validParenthesisV1Refactored as validParenthesis } from './valid-parenthesis'

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