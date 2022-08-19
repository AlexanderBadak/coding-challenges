// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);
 
// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output:    "PAHNAPLSIIGYIR"

// P   A   H   N
// A P L S I I G
// Y   I   R

//Pivoted:
// P A Y
//   P
// A L I
//   S
// H I R
//   I
// N G

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

//Pivoted:
// P A Y P
//     A
//   L
// I S H I
//     R
//   I
// N G

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

// Constraints:
// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

import { zigzagConversionV1 as zigzagConversion } from './zigzag-conversion'

describe('zigzag conversion', () => {
    test('case 1', () => {
        expect(zigzagConversion('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
    })
    test('case 2', () => {
        expect(zigzagConversion('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI')
    })
    test('case 3', () => {
        expect(zigzagConversion('A', 1)).toBe('A')
    })
})