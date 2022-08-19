export const findFirstLastV1 = (numbers: number[], target: number) : [number, number] => {
    let first = -1
    let last = -1
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            if (first === -1) first = i
            last = i
        } else if (last !== -1) {
            break
        }
    }

    return [first, last]
}

export const findFirstLastV2 = (numbers: number[], target: number) : [number, number] => {
    const binarySearchModified = (sortedArray: number[], target: number, continueLeft: boolean) => {
        let start = 0
        let end = sortedArray.length - 1
        let i = -1
        while (start <= end) {
            const middle = Math.floor((start + end) / 2)
    
            if (sortedArray[middle] === target) {
                i = middle
                if (continueLeft) end = middle - 1
                else start = middle + 1
            } else if (sortedArray[middle] < target) {
                start = middle + 1
            } else {
                end = middle - 1
            }
        }
        return i
    }

    const leftMostIndex = binarySearchModified(numbers, target, true)
    const rightMostIndex = binarySearchModified(numbers, target, false)

    return [leftMostIndex, rightMostIndex]
}