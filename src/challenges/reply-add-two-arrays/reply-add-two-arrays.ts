export const addTwoArraysV1 = (arr1: number[], arr2: number[]) : number[] => {
    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1

    const finalArray: number[] = []

    const [largerArray, smallerArray] = arr1.length >= arr2.length ? [arr1, arr2] : [arr2, arr1]

    let carry = 0
    let value = 0
    
    let currentIndex = largerArray.length - 1
    const difference = largerArray.length - smallerArray.length

    while (carry > 0 || currentIndex >= 0) {
        if (currentIndex >= 0) {
            value += largerArray[currentIndex]
        }

        const smallerArrayIndex = currentIndex - difference
        if (smallerArray.length >= currentIndex) {
            value += smallerArray[smallerArrayIndex]
        }

        if (value > 9) {
            carry = 1
            value %= 10
        } else {
            carry = 0
        }

        finalArray.unshift(value)
        value = carry
        currentIndex--
    }

    return finalArray
}

export const addTwoArraysRefactoredV2 = (arr1: number[], arr2: number[]) : number[] => {
    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1

    const finalArray: number[] = []

    const [largerArray, smallerArray] = arr1.length >= arr2.length ? [arr1, arr2] : [arr2, arr1]

    let carry = 0
    let value = 0
    let currentIndex = 0

    while (carry > 0 || currentIndex < largerArray.length) {
        value = carry
        if (largerArray.length > currentIndex) {
            value += largerArray[largerArray.length - 1 - currentIndex]
            
            if (smallerArray.length > currentIndex) {
                value += smallerArray[smallerArray.length - 1 - currentIndex]
            }
        }

        if (value > 9) {
            carry = 1
            value %= 10
        } else {
            carry = 0
        }

        finalArray.unshift(value)
        currentIndex++
    }

    return finalArray
}