import { checkPalindromeV2 as checkPalindrome } from './check-palindrome'

describe('Check Palindrome', () => {
    test('different versions', () => {
        expect(checkPalindrome('anna')).toBe(true)
        expect(checkPalindrome('abc')).toBe(false)
        expect(checkPalindrome('tattarrattat')).toBe(true)
        expect(checkPalindrome('m')).toBe(true)
    })
})