// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false
 
// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'

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