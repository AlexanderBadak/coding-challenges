import { removeDuplicateV3 as removeDuplicate } from './energi-remove-duplicates'

describe('Remove Duplicates', () => {
    test('should remove duplicates', () => {
        expect(removeDuplicate([2, 6, 1, 2, 5, 2, 6, 4, 3])).toEqual([2, 6, 1, 5, 4, 3])
    })
})