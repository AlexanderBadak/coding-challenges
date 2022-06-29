type TParenthesisPair = {
    open: '(' | '[' | '{'
    close: ')' | ']' | '}'
}

export const validParenthesisV1 = (s: string) : boolean => {
    const parenthesisPairs: {[key: string]: TParenthesisPair} = {
        normal: {
            open: '(',
            close: ')'
        },
        bracket: {
            open: '[',
            close: ']'
        },
        curly: {
            open: '{',
            close: '}'
        }
    }

    const getOpening = (char: string) : TParenthesisPair | undefined => {
        switch (char) {
            case parenthesisPairs.normal.open:
                return parenthesisPairs.normal

            case parenthesisPairs.bracket.open:
                return parenthesisPairs.bracket

            case parenthesisPairs.curly.open:
                return parenthesisPairs.curly

            default:
                return undefined
        }
    }

    const openingStack: TParenthesisPair[] = []

    for (let i = 0; i < s.length; i++) {
        const opening = getOpening(s[i])

        if (opening) {
            openingStack.push(opening)
        } else {
            const lastItem = openingStack.pop()
            if (!lastItem) return false
            if (lastItem.close !== s[i]) return false
        }
    }

    return true
}

export const validParenthesisV1Refactored = (s: string) : boolean => {
    const pairs: Record<string, string> = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    const openingStack: string[] = []

    for (let i = 0; i < s.length; i++) {
        const opening = pairs[s[i]]

        if (opening) {
            openingStack.push(s[i])
        } else {
            const lastItem = openingStack.pop()
            if (!lastItem) return false
            if (pairs[lastItem] !== s[i]) return false
        }
    }

    return true
}