export const mostFrequentNumbersV1 = (arr: number[], amount: number) : number[] => {
    const foundNumbers: Record<number, number> = {}

    for (let i = 0; i < arr.length; i++) {
        if (foundNumbers[arr[i]] !== undefined) {
            foundNumbers[arr[i]]++
        } else {
            foundNumbers[arr[i]] = 1
        }
    }

    return Object.entries(foundNumbers)
        .sort((a, b) => b[1] - a[1])
        .slice(0, amount)
        .map(entry => +entry[0])
}