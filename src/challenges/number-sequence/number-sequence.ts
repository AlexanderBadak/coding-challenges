export const numberSequenceV1 = (n: number) : string => {
    const createSequence = (currentIteration: number, currentSequence: string) : string => {
        if (currentIteration === n) return currentSequence
        currentIteration++

        let newSequence = ''
        let currentConsecutiveSequenceLength = 1
        for (let i = 0; i < currentSequence.length; i++) {
            if (currentSequence[i] === currentSequence[i + 1]) {
                currentConsecutiveSequenceLength++
            } else {
                newSequence += `${currentConsecutiveSequenceLength}${currentSequence[i]}`
                currentConsecutiveSequenceLength = 1
            }
        }

        return createSequence(currentIteration, newSequence)
    }

    return createSequence(1, '1')
}