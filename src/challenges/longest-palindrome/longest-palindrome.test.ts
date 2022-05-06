import { longestPalindromeV2 as longestPalindrome } from './longest-palindrome'

describe('Longest Palindrome', () => {
    test('Strings of odd length', () => {
        expect(longestPalindrome('babad')).toBe('bab')
        expect(longestPalindrome('madam')).toBe('madam')
        expect(longestPalindrome('dde')).toBe('dd')
        expect(longestPalindrome('ababbab')).toBe('babbab')
        expect(longestPalindrome('abababa')).toBe('abababa')
    })
      
    test('Strings of even length', () => {
        expect(longestPalindrome('banana')).toBe('anana')
        expect(longestPalindrome('abba')).toBe('abba')
        expect(longestPalindrome('cbbd')).toBe('bb')
        expect(longestPalindrome('zz')).toBe('zz')
        expect(longestPalindrome('dddd')).toBe('dddd')
    })
      
    test('Edge cases', () => {
        expect(longestPalindrome('')).toBe('')
        expect(longestPalindrome('abcdefghijklmnopqrstuvwxyz')).toBe('a')
        expect(longestPalindrome('ttaaftffftfaafatf')).toBe('aaftffftfaa')
        expect(longestPalindrome('bbaaacc')).toBe('aaa')
        expect(longestPalindrome('m')).toBe('m')
    })
})