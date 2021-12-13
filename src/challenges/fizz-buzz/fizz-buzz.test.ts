import { fizzBuzzV1 as fizzBuzz } from './fizz-buzz'

describe('Fizz Buzz', () => {
    test('', () => {
        const expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
        expect(fizzBuzz(15)).toStrictEqual(expected)
    })
})