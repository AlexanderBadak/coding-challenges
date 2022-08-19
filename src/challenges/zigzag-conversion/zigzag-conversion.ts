//https://www.youtube.com/watch?v=Q2Tw6gcVEwc
export const zigzagConversionV1 = (s: string, numRows: number) : string => {
    if (numRows === 1) return s

    let returnStr: string = ''

    for (let r = 0; r < numRows; r++) {
        const increment = 2 * (numRows - 1)
        for (let i = r; i < s.length; i += increment) {
            returnStr += s[i]
            if (r > 0 && r < numRows - 1 && i + increment - 2 * r < s.length) {
                returnStr += s[i + increment - 2 * r]
            }
        }

    }

    return returnStr
}