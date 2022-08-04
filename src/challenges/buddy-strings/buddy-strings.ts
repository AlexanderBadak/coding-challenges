export const buddyStringsV1 = (s: string, goal: string) : boolean => {
    if (s.length !== goal.length) return false

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let swapped = `${s.substring(0, i)}${s[j]}${s.substring(i + 1)}`
            swapped = `${swapped.substring(0, j)}${s[i]}${swapped.substring(j + 1)}`
            if (swapped === goal) return true
        }
    }
    return false
}

export const buddyStringsV2 = (s: string, goal: string) : boolean => {
    if (s.length !== goal.length) return false

    const isSameString = s === goal
    if (isSameString) {
        const uniqueLetters: Record<string, number> = {}
        for (let i = 0; i < s.length; i++) {
            if (uniqueLetters[s[i]] !== undefined) return true
            uniqueLetters[s[i]] = -1
        }
        return false
    }

    const differences: number[] = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            differences.push(i)
        }
    }

    const hasExactTwoDifferences = differences.length === 2
    const areSameLetters = s[differences[0]] === goal[differences[1]] && goal[differences[0]] === s[differences[1]]
    if (hasExactTwoDifferences && areSameLetters) return true

    return false
}