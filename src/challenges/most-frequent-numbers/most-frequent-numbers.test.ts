import { mostFrequentNumbersV1 as mostFrequentNumbers } from './most-frequent-numbers'

// find an array of numbers with most occurrence
// params:
//  arr - an array,
//  n - number of items needs to be returned

describe('most frequent numbers', () => {
    const numbers = [1, 2, 5, 1, 7, 4, 5, 1]

    test('case 1', () => {
        expect(mostFrequentNumbers(numbers, 1)).toEqual([1])
    })

    test('case 2', () => {
        expect(mostFrequentNumbers(numbers, 2)).toEqual([1, 5])
    })
})