import { recursiveSum } from './recursive-sum'

describe('recursive sum', () => {
    test('case 1', () => {
        expect(recursiveSum(4)).toBe(10)
    })

    test('case 2', () => {
        expect(recursiveSum(0)).toBe(0)
    })
})