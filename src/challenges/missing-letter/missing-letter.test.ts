import { missingLetterV1 as missingLetter } from './missing-letter'

// #Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:
// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

describe('missing letter', () => {
    test('case 1', () => {
        expect(missingLetter(['a', 'b', 'c', 'd', 'f'])).toBe('e')
    })
    test('case 2', () => {
        expect(missingLetter(['O', 'Q', 'R', 'S'])).toBe('P')
    })
    test('case 3', () => {
        expect(missingLetter(['b', 'c', 'd', 'f'])).toBe('e')
    })
    test('case 4', () => {
        expect(missingLetter(['o', 'q', 'r', 's'])).toBe('p')
    })
})