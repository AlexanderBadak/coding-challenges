export const longPressedV1 = (name: string, typed: string) : boolean => {
    if (typed.length < name.length) return false

    let nameIndex = 0
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === name[nameIndex]) continue

        if (typed[i] === name[nameIndex + 1]) {
            nameIndex++
        } else if (typed[i] !== name[nameIndex - 1]) {
            return false
        }
    }

    return true
}

//Shpetim
export const longPressedV2 = (name: string, typed: string) : boolean => {
    let countName = 0
    let prevChar = ''

    for (let i = 0; i < typed.length; i++) {
        if (name[countName] === typed[i]) {
            countName++
        } else if (typed[i] !== prevChar) {
            return false
        }
        prevChar = name[countName]
    }

    return countName === name.length
}

//David
export const longPressedV3 = (name: string, typed: string) : boolean => {
    const pattern: RegExp = new RegExp(name.split('').join('+') + '+')
    return pattern.test(typed)
}