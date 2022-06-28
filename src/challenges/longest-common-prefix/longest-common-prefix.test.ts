import { longestCommonPrefixV2 as longestCommonPrefix} from './longest-common-prefix'

describe('longest common prefix', () => {
    test('case 1', () => {
        expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
    })

    test('case 2', () => {
        expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
    })

    test('case 3', () => {
        expect(longestCommonPrefix(['abcdefg', 'abcdef', 'abcde'])).toBe('abcde')
    })

    test('case 4', () => {
        expect(longestCommonPrefix(['abc', 'abc', 'abc'])).toBe('abc')
    })
})