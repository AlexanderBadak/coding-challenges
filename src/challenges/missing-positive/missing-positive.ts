export const missingPositiveV1 = (unsortedArray: number[]) : number => {
    let missingNr = 1
    const foundNumbers: Record<number, number> = {}

    for (let i = 0; i < unsortedArray.length; i++) {
        if (unsortedArray[i] > 0) {
            if (unsortedArray[i] === missingNr && foundNumbers[unsortedArray[i]] !== i) {
                foundNumbers[unsortedArray[i]] = i
                missingNr++
                i = -1
            }
        }
    }

    return missingNr
}