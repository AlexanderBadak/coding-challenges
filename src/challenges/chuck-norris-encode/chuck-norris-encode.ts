export const chuckNorrisEncodeV1 = (char: string) => {
    const numberAsZeros = (number: number) => {
        let returnStr = ''
        for (let i = 0; i < number; i++) {
            returnStr += '0'
        }
        return returnStr
    }
    const charCodeBlocks = []
    let currConsecutiveDigits = ''

    for (let i = 0; i < char.length; i++) {
        const charCode = char.charCodeAt(i).toString(2)
      
        for (let j = 0; j < charCode.length; j++) {
            if (currConsecutiveDigits[0] === charCode[j]) {
                currConsecutiveDigits += charCode[j]
                if (j === charCode.length - 1) {
                    charCodeBlocks.push(currConsecutiveDigits)
                }
            } else {
                if (currConsecutiveDigits) {
                    charCodeBlocks.push(currConsecutiveDigits)
                }
                currConsecutiveDigits = charCode[j]
            }
        }
    }
  
    let finalEncodedStr = ''
    for (let i = 0; i < charCodeBlocks.length; i++) {
        if (charCodeBlocks[i].includes('1')) {
            finalEncodedStr += '0 '
        } else {
            finalEncodedStr += '00 '
        }
    
        finalEncodedStr += `${numberAsZeros(charCodeBlocks[i].length)} `
    }
    return finalEncodedStr.trim()
}

export const chuckNorrisEncodeV1Refactored = (text: string) => {
    let finalEncodedStr = ''

    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i).toString(2)
        let consecutiveDigits = ''
        
        for (let j = 0; j < charCode.length; j++) {
            const isConsecutive = consecutiveDigits.endsWith(charCode[j])

            if (isConsecutive) {
                consecutiveDigits += charCode[j]
            }

            if ((isConsecutive && j === charCode.length - 1) || (!isConsecutive && consecutiveDigits.length)) {
                finalEncodedStr += (consecutiveDigits.endsWith('1') ? '0' : '00') + ' '
                finalEncodedStr += ''.padStart(consecutiveDigits.length, '0') + ' '
            }

            if (!isConsecutive) {
                consecutiveDigits = charCode[j]
            }
        }
    }
    
    return finalEncodedStr.trim()
}

export const chuckNorrisEncodeV2 = (text: string) => {
    let res = ''
    let pre = -1

    for (let i = 0; i < text.length; i++) {
        for (let j = 6; j >= 0; j--) {
            const bit = text.charCodeAt(i) >> j & 1
            if (bit !== pre) {
                if (-1 !== pre) {
                    res += ' '
                }
                res += 1 == bit ? '0 ' : '00 '
                pre = bit
            }
            res += '0'
        }
    }
    return res
}