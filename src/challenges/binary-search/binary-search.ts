export const binarySearch = (sortedArray: number[], target: number) : number => {
    let start = 0
    let end = sortedArray.length - 1

    while (start <= end) {
        const middle = Math.floor((start + end) / 2)

        if (sortedArray[middle] === target) {
            // found the key
            return middle
        } else if (sortedArray[middle] < target) {
            // continue searching to the right
            start = middle + 1
        } else {
            // search searching to the left
            end = middle - 1
        }
    }

    return -1
}