export const twoSumV1 = (numbers: number[], target: number) : [number, number] => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j]
            if (sum === target) {
                return [i, j]
            }
        }
    }

    return [-1, -1]
}

export const twoSumV2 = (numbers: number[], target: number) : [number, number] => {
    const prevValues: {[key: number]: number} = {}
  
    for (let i = 0; i < numbers.length; i++) {
        const missingNumber = target - numbers[i]
        if (prevValues[missingNumber] != null) {
            return [prevValues[missingNumber], i]
        }
        prevValues[numbers[i]] = i
    }

    return [-1, -1]
}