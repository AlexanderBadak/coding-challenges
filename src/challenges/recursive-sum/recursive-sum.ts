export const recursiveSum = (n: number) : number => {
    let sum = n
    if (n > 0) {
        sum += recursiveSum(n - 1)
    }
    return sum
}