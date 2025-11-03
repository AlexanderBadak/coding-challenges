// export const uncompressStringRecursionFailedV1 = (s: string) => {
//     let finalStr = ''
//     let currentNr = ''
//     for (let i = 0; i < s.length; i++) {
//         const currentChar = s[i]
//         if (currentChar === '(') {
//             const finalNr = parseInt(currentNr)
//             const remainingStr = s.substring(i + 1)
//             const result = uncompressStringV1(remainingStr)
//             finalStr += result.repeat(finalNr)
//             currentNr = ''
//             const skipIndexCount = result.length + 1 // + 1 because we know a ) is at the end
//             i += skipIndexCount
//             // const nextChar = s[i + 1] // + 1 becuase i++ hasnt triggered yet
//             // if (nextChar === ')') {
//             //     i++
//             // }
//         } else if (numbersStrObj[currentChar] !== undefined) {
//             currentNr += numbersStrObj[currentChar].toString()
//         } else if (currentChar === ')') {
//             return finalStr
//         } else {
//             finalStr += currentChar
//         }
//     }

//     return finalStr
// }

const numbersStrObj: Record<string, number> = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
}

export const uncompressStringV1 = (s: string) => {
    let finalStr = ''
    let depth = 0

    const depthKVP: Record<number, { currentStr: string, multiplier: number}> = {
        0: {
            multiplier: -1,
            currentStr: ''
        }
    }

    let currentNrTemp = ''
    
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i]

        if (numbersStrObj[currentChar] !== undefined) {
            currentNrTemp += numbersStrObj[currentChar].toString()
        } else if (currentChar === '(') {
            depth++
            const multiplier = parseInt(currentNrTemp)

            depthKVP[depth] = {
                multiplier,
                currentStr: ''
            }
            currentNrTemp = ''
        } else if (currentChar === ')') {
            let currentStr = ''
            for (; depth > 0; depth--) {
                const depthStr = `${depthKVP[depth].currentStr}${currentStr}`.repeat(depthKVP[depth].multiplier)
                if (depth === 1) {
                    currentStr = ''
                }
                currentStr = `${depthStr}${currentStr}`
                depthKVP[depth] = {
                    multiplier: -1,
                    currentStr: ''
                }
            }
            finalStr += currentStr
        } else {
            if (depth > 0) {
                depthKVP[depth].currentStr += currentChar 
            } else {
                finalStr += currentChar
            }
        }
    }

    return finalStr
}


export const uncompressStringV2 = (s: string) => {
    const stack = ['']
    const count = []
    let n = ''
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (/\d/.test(char)) {
            n += char
        } else if (char === '(') {
        stack.push('')
        count.push(Number(n));
        n = ''
        } else if (char === ')') {
            const sequence = stack.pop()
            const times = count.pop()
            stack.push(stack.pop() + sequence!.repeat(times!))
        } else {
            stack.push(stack.pop() + char)
        }
    }
    return stack.pop()  
}