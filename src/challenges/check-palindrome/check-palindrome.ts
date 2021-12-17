export const checkPalindromeV1 = (s: string) : boolean => {
    for (let i = 0; i < s.length / 2; i++) {
        const leftLetter = s[i]
        const rightLetter = s[s.length - 1 - i]

        if (leftLetter !== rightLetter)
            return false
    }
    return true
}

export const checkPalindromeV2 = (s: string) : boolean => {
    if (s.length === 0) return true

    const isEven = s.length % 2 === 0

    let li: number
    let ri: number

    if (!isEven) {
        const mid = Math.round(s.length / 2)
        li = mid
        ri = mid
    } else {
        const mid = s.length / 2
        li = mid - 1
        ri = mid
    }

    while (li > 0 && ri <= s.length) {
        if (s[li] !== s[ri]) return false

        li--
        ri++
    }

    return true
}