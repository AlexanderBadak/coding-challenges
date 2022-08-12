export const zigzagConversionV1 = (s: string, numRows: number) : string => {
    const returnArr: string[] = new Array(s.length)

    returnArr.push(s[0])

    for (let i = numRows + 1; i < s.length; i++) {
        if (i % (numRows + 1) === 0) {
            returnArr.push(s[i])
        }
    }

    for (let i = 1; i < s.length; i++) {
        if ((i - 1) % 2 === 0)
            returnArr.push(s[i])
    }

    returnArr.push(s[2])

    for (let i = numRows; i < s.length; i++) {
        if ((i - 2) % (numRows + 1) === 0) {
            returnArr.push(s[i])
        }
    }

    return returnArr.join('')
}