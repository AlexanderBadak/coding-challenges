export const addTwoArraysV1 = (arr1: number[], arr2: number[]) : number[] => {
    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1

    const finalArray: number[] = []

    const [largerArray, smallerArray] = arr1.length >= arr2.length ? [arr1, arr2] : [arr2, arr1]

    let carry: number = 0
    let value: number = 0
    
    let largerArrayIndex = largerArray.length - 1
    const difference: number = largerArray.length - smallerArray.length

    while (carry > 0 || largerArrayIndex >= 0) {
        value = carry

        if (largerArrayIndex >= 0) {
            value += largerArray[largerArrayIndex]
        }

        const smallerArrayIndex = largerArrayIndex - difference
        if (smallerArrayIndex >= 0) {
            value += smallerArray[smallerArrayIndex]
        }

        if (value > 9) {
            carry = 1
            value %= 10
        } else {
            carry = 0
        }

        finalArray.unshift(value)

        largerArrayIndex--
    }

    return finalArray
}