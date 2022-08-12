import { longestUniqueStringV1 as longestUniqueString } from './longest-unique-string'

//given is a string s which can be letters, numbers or symbols
// find the longest unique chain of characters
// and return the length of the longest chain of chars

describe('Longest Unique Characters', () => {
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

    test('limshady is the longest substring', () => {
        expect(longestUniqueString('mynameisslimshady')).toBe(8)
    })

    test('b is the longest substring', () => {
        expect(longestUniqueString('bbbbbb')).toBe(1)
    })
})