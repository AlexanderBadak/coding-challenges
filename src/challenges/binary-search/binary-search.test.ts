import { binarySearch } from './binary-search'

describe('find first last position', () => {
    test('case 1', () => {
        expect(binarySearch([5, 7, 7, 8, 10], 8)).toEqual(3)
    })
    test('case 2', () => {
        expect(binarySearch([5, 7, 7, 8, 8, 10], 6)).toEqual(-1)
    })
    test('case 3', () => {
        expect(binarySearch([], 0)).toEqual(-1)
    })
    test('case 4', () => {
        expect(binarySearch([1], 1)).toEqual(0)
    })
})