export const longestUniqueStringV1 = (s: string) => {
    let uniqueChars: {[key: string]: string} = {}
    let uniqueCharsMaxCount = 0
    let uniqueCharsCount = 0

    for (let i = 0; i < s.length; i++) {
        if (uniqueChars[s[i]] != null) {
            i = i - uniqueCharsCount + 1
            uniqueCharsCount = 0
            uniqueChars = {}
        }
        uniqueChars[s[i]] = s[i]
        uniqueCharsCount++

        if (uniqueCharsCount > uniqueCharsMaxCount) {
            uniqueCharsMaxCount = uniqueCharsCount
        }
    }

    return uniqueCharsMaxCount
}