export const longPressedV1 = (name: string, typed: string) : boolean => {
    if (typed.length < name.length) return false
    if (name[0] !== typed[0]) return false

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