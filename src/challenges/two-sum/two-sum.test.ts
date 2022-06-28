import { twoSumV1 as twoSum } from './two-sum'

// Write a function that takes an array of numbers (integers for the tests)
// and a target number. It should find two different items in the array that,
// when added together, give the target value. The indices of these items should
// then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// The input will always be valid (numbers will be an array of length 2 or greater,
// and all of the items will be numbers; target will always be the sum of two different items from that array).

describe('Two Sum', () => {
    test('case 1', () => {
        expect(twoSum([1, 2, 3, 4], 4)).toStrictEqual([0, 2])
    })

    test('case 2', () => {
        expect(twoSum([1234, 5678, 9012], 14690)).toStrictEqual([1, 2])
    })

    test('case 3', () => {
        expect(twoSum([2, 2, 3], 4)).toStrictEqual([0, 1])
    })
})