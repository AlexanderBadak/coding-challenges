export const staircaseV1 = (steps: number) : number => {
    let globalCounter = 0

    const step1 = 1
    const step2 = 2

    globalCounter += doStep(steps, step1, 0)
    globalCounter += doStep(steps, step2, 0)

    return globalCounter
}

const doStep = (targetNumber: number, stepNumber: number, currentNumber: number) : number => {
    const step1 = 1
    const step2 = 2

    let counter = 0
    currentNumber += stepNumber
    if (currentNumber === targetNumber) {
        counter++
    } else if (currentNumber > targetNumber) {
        return counter
    }

    counter += doStep(targetNumber, step1, currentNumber)
    counter += doStep(targetNumber, step2, currentNumber)

    return counter
}