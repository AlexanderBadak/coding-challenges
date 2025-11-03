// Given a compressed string, return its original form.

// For example.
// uncompress('3(ab)') // 'ababab'
// uncompress('3(ab2(c))') // 'abccabccabcc'

// a number k followed by a pair of parenthesis, meaning to repeat the substring
// inside the parenthesis by k times, k is positive integer.
// inputs are guaranteed to be valid input like above example, 
// there is no numerical digit in original form.

import { uncompressStringV2 as uncompressString} from "./uncompress-string"

describe('uncompress string', () => {
    const testParams = [
        ['3(ab)', 'ababab'],
        ['3(ab2(c))', 'abccabccabcc'],
        ['2(a)2(b)', 'aabb'],
        ['gg3(ab)', 'ggababab'],
        ['10(a)', 'aaaaaaaaaa'],
        ['11(b)', 'bbbbbbbbbbb'],
        ['3(b)a', 'bbba'],
        ['2(a2(b))2(c)', 'abbabbcc'],
        ['3(ab3(cd))3(ef)', 'abcdcdcdabcdcdcdabcdcdcdefefef'],
        ['3(ab2(c))3(ab)', 'abccabccabccababab'],
    ] as const
    test.each(testParams)('cases', (iteration, result) => {
        expect(uncompressString(iteration)).toEqual(result)
    })
})