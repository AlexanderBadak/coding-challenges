import { addTwoArraysV1 as addTwoArrays } from './reply-add-two-arrays'

describe('Add Two Arrays', () => {
    test('it should carry over', () => {
        expect(addTwoArrays([1, 2, 3], [2, 3, 4])).toEqual([3, 5, 7])
        expect(addTwoArrays([3, 2, 5], [1, 6, 9, 6])).toEqual([2, 0, 2, 1])
        expect(addTwoArrays([2, 3, 8], [1, 3, 8])).toEqual([3, 7, 6])
        expect(addTwoArrays([2, 5], [9, 9, 9, 6])).toEqual([1, 0, 0, 2, 1])
        expect(addTwoArrays([9], [9])).toEqual([1, 8])
    })
})