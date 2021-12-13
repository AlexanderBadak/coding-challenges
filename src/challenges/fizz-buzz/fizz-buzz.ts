export const fizzBuzzV1 = (n: number) : (number | string)[] => {
    const arr: (number | string)[] = []
    for (let i = 1; i <= n; i++) {
        let str = ''
        if (i % 3 === 0) str += 'Fizz'
        if (i % 5 === 0) str += 'Buzz'
        if (str.length > 0)
            arr.push(str)
        else
            arr.push(i)
    }

    return arr
}