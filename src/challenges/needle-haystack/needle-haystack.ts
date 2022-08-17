export const needleHaystackV1 = (haystack: string, needle: string) : number => {
    if (!needle.length) return 0
    if (haystack.length < needle.length) return -1
    
    for (let i = 0; i < haystack.length; i++) {
        const currentLetter = haystack[i]

        if (currentLetter === needle[0]) {
            let isMatch = true
            for (let j = 1; j < needle.length; j++) {
                if (needle[j] !== haystack[i + j]) {
                    isMatch = false
                    break
                }
            }
            if (isMatch) return i
        }
    }

    return -1
}

export const needleHaystackV1Refactored = (haystack: string, needle: string) : number => {
    if (!needle.length) return 0
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {

        let j = 0
        for (; j < needle.length; j++) {
            if (needle[j] !== haystack[i + j]) break
        }

        if (j === needle.length) return i
    }

    return -1
}