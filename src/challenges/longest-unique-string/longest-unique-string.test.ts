import { longestUniqueStringV1 as longestUniqueString } from './longest-unique-string'

describe('Longest Unique String', () => {
    test('cab is the longest substring', () => {
        expect(longestUniqueString('baacab')).toBe(3)
    })

    test('abcd is the longest substring', () => {
        expect(longestUniqueString('abcd')).toBe(4)
    })

    test('chzvfrkmlno is the longest substring', () => {
        expect(longestUniqueString('hchzvfrkmlnozjk')).toBe(11)
    })

    test('!@#$%^& is the longest substring', () => {
        expect(longestUniqueString('!@#$%^&^%$#@!')).toBe(7)
    })
})