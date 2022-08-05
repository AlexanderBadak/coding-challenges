import { missingLetterV2 as missingLetter } from './missing-letter'

// #Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:
// 'abcdf' -> 'e' OQRS -> 'P'

describe('missing letter', () => {
    test('case 1', () => {
        expect(missingLetter('abcdf')).toBe('e')
    })
    test('case 2', () => {
        expect(missingLetter('OQRS')).toBe('P')
    })
    test('case 3', () => {
        expect(missingLetter('bcdf')).toBe('e')
    })
    test('case 4', () => {
        expect(missingLetter('oqrs')).toBe('p')
    })
})