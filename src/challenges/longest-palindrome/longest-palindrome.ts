export const longestPalindromeV1 = (s: string) : string => {
    const isPalindrome = (s: string) : boolean => {
        for (let i = 0; i < s.length / 2; i++)
            if (s[i] !== s[s.length - 1 - i])
                return false
    
        return true
    }

    let longest = ''

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const sub = s.substring(i, j)
            if (isPalindrome(sub) && sub.length > longest.length) {
                longest = sub
            }
        }
    }

    return longest
}

export const longestPalindromeV2 = (s: string) : string => {
    if (s.length <= 1) return s

    const expandRange = (s: string, begin: number, end: number) : [number, number] => {
        let li = begin
        let ri = end
    
        while (li >= 0 && ri <= s.length) {
            if (s[li] !== s[ri]) return [li, ri]
    
            li--
            ri++
        }
    
        return [li, ri]
    }

    let longest = ''
    for (let i = 0; i < s.length; i++) {
        let indeces: [number, number]
        if (s.length % 2 === 0) {
            indeces = expandRange(s, i - 1, i)
        } else {
            indeces = expandRange(s, i, i)
        }
        const sub = s.substring(indeces[0], indeces[1])
        if (sub.length > longest.length) {
            longest = sub
        }
    }
    return longest
}

