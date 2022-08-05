export const missingLetterV1 = (s: string) : string => {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'

    const firstLetter = s[0]
    const startIndex = lowerCaseLetters.indexOf(firstLetter.toLowerCase())
    const isLowerCase = lowerCaseLetters[startIndex] === firstLetter

    for (let i = 1; i < s.length; i++) {
        if (s[i] !== lowerCaseLetters[startIndex + i]) {
            const missingLetter = lowerCaseLetters[startIndex + i]
            return isLowerCase ? missingLetter : missingLetter.toUpperCase()
        }
    }

    return ''
}

export const missingLetterV2 = (s: string) : string => {
    for (let i = 1; i < s.length; i++) {
        if (s.charCodeAt(i) - s.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(s.charCodeAt(i - 1) + 1)
        }
    }

    return ''
}