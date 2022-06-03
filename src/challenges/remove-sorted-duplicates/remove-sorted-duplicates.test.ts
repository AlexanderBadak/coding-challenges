import { removeSortedDuplicatesV1 as removeSortedDuplicates } from './remove-sorted-duplicates'

// create a method with one parameter which is a sorted array of integers
// move the duplicate numbers to the end of the array
// the size of the array must not change, therefore the last digits are to be ignored
// a new array may not be created
// return the length of the new array

describe('Remove Sorted Duplicates', () => {
    test('should return the array length', () => {
        expect(removeSortedDuplicates([1, 2, 2, 2, 3, 6, 6, 8])).toEqual(5)
    })

    test('', () => {
        expect(removeSortedDuplicates([1, 1, 1, 4])).toEqual(2)
    })
})