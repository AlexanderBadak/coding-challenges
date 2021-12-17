export const removeSortedDuplicatesV1 = (arr: number[]) : number => {
    let counter = 0
    let lastNr = -1
    for (let i = 0; i < arr.length; i++) {
        const currentNr = arr[i]

        if (lastNr !== currentNr) {
            arr[counter] = currentNr
            counter++
        }

        lastNr = currentNr
    }

    return counter
}