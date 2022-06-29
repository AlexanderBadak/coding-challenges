export const lengthLastWordV1 = (s: string) : number => {
    const space = ' '
    let wordLength = 0

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === space) {
            if (!wordLength) continue
            return wordLength
        }

        wordLength++
    }

    return wordLength
}