import { twoSumV1 as twoSum } from './two-sum'

describe('Two Sum', () => {
    test('', () => {
        expect(twoSum([1, 2, 3, 4], 4)).toStrictEqual([0, 2])
    })

    test('', () => {
        expect(twoSum([1234, 5678, 9012], 14690)).toStrictEqual([1, 2])
    })

    test('', () => {
        expect(twoSum([2, 2, 3], 4)).toStrictEqual([0, 1])
    })
})