import { chuckNorrisEncodeV1Refactored as chuckNorrisEncode } from './chuck-norris-encode'

/*
Receive a character which needs to be encoded in different blocks.
First the letter needs to be converted into a binary form.
Then the binary form needs to be separated into blocks of invididual consecutive digits.

example: 1000011 becomes 1 0000 11

Each block needs to be encoded in another 2 blocks:

- First block: it is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0
- Second block: the number of 0 in this block is the number of bits in the series

example: 1000011 becomes 1 0000 11 becomes 0 0 00 0000 0 00

*/

describe('Chuck Norris Encode', () => {
    test('case 1', () => {
        expect(chuckNorrisEncode('C')).toBe('0 0 00 0000 0 00')
    })

    test('case 2', () => {
        expect(chuckNorrisEncode('CC')).toBe('0 0 00 0000 0 000 00 0000 0 00')
    })
})