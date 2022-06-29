export const romanIntegerV1 = (s: string) : number => {
    const romans: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let integerValue = 0

    for (let i = 0; i < s.length; i++) {
        const symbol = s[i]
        const nextSymbol = s[i + 1]

        const value = romans[symbol]
        const nextValue = romans[nextSymbol]

        const caseOne = value === romans.I && (nextValue === romans.V || nextValue === romans.X)
        const caseTen = value === romans.X && (nextValue === romans.L || nextValue === romans.C)
        const caseHundred = value === romans.C && (nextValue === romans.D || nextValue === romans.M)

        if (caseOne || caseTen || caseHundred) {
            integerValue += nextValue - value
            i++
        } else {
            integerValue += value
        }
    }

    return integerValue
}

export const romanIntegerV2 = (s: string) : number => {
    const romans: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let integerValue = 0

    for (let i = 0; i < s.length; i++) {
        if (romans[s[i]] < romans[s[i + 1]])
            integerValue -= romans[s[i]]
        else {
            integerValue += romans[s[i]]
        }
    }

    return integerValue
}