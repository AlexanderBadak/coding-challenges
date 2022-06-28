import { romanIntegerV2 as romanInteger } from './roman-integers'

describe('roman integer', () => {
    it('case 1', () => {
        expect(romanInteger('III')).toBe(3)
    })

    it('case 2', () => {
        expect(romanInteger('LVIII')).toBe(58)
    })

    it('case 3', () => {
        expect(romanInteger('MCMXCIV')).toBe(1994)
    })

    it('case 4', () => {
        expect(romanInteger('I')).toBe(1)
    })
})