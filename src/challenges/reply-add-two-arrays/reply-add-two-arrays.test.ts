import { addTwoArraysV1 as addTwoArrays } from './reply-add-two-arrays'

//Write a method that takes two integer arrays of any length as parameters and returns  the sum of the arrays as a single array

// Example 1 : A = [1,2,3] , B = [2,3,4] , Output = [3,5,7]
// Example 2: A = [2,3,8], B = [1,3,8], Output = [3,7,6]
// Example 3: A = [3,2,5], B = [1,6,9,6], Output = [2,0,2,1]
// Example 4: A = [2,5], B = [9,9,9,6], Output = [1,0,0,2,1]

describe('Add Two Arrays', () => {
    test('case 1', () => {
        expect(addTwoArrays([1, 2, 3], [2, 3, 4])).toEqual([3, 5, 7])
    })

    test('case 2', () => {
        expect(addTwoArrays([3, 2, 5], [1, 6, 9, 6])).toEqual([2, 0, 2, 1])
    })

    test('case 3', () => {
        expect(addTwoArrays([2, 3, 8], [1, 3, 8])).toEqual([3, 7, 6])
    })

    test('case 4', () => {
        expect(addTwoArrays([2, 5], [9, 9, 9, 6])).toEqual([1, 0, 0, 2, 1])
    })

    test('case 5', () => {
        expect(addTwoArrays([9], [9])).toEqual([1, 8])
    })
})