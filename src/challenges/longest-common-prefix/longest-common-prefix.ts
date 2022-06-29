export const longestCommonPrefixV1 = (items: string[]) : string => {
    let longestPrefix = ''
    let currentPrefix = items[0][0]

    for (let i = 1; i < items.length; i++) {
        if (!items[i].startsWith(currentPrefix))
            return longestPrefix

        if (i === items.length - 1) {
            longestPrefix = currentPrefix

            if (currentPrefix.length < items[0].length) {
                currentPrefix += items[0][currentPrefix.length]
                i = 0
            }
        }
    }

    return longestPrefix
}

export const longestCommonPrefixV2 = (items: string[]) : string => {
    let longestPrefix = ''

    for (let i = 0; i < items[0].length; i++) {
        const char = items[0][i]
        for (let j = 0; j < items.length; j++) {
            if (items[j][i] !== char) return longestPrefix
        }
        longestPrefix += char
    }

    return longestPrefix
}