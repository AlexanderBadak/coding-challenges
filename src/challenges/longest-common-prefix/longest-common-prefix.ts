// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 
// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

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