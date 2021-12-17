import { removeSortedDuplicatesV1 as removeSortedDuplicates } from './remove-sorted-duplicates'

describe('Remove Sorted Duplicates', () => {
    test('should return the array length', () => {
        expect(removeSortedDuplicates([1, 2, 2, 2, 3, 6, 6, 8])).toEqual(5)
    })
})