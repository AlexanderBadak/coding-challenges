//custom implementation of debounce

import { debounceV1 as debounce } from './debounce'

describe('Debounce', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })
    afterEach(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
    })
    test('case 1', async () => {
        const callback = jest.fn()

        const debounceFunc = debounce<void>(callback, 500)

        for (let i = 0; i < 100; i++) {
            debounceFunc()
        }

        jest.runOnlyPendingTimers()

        expect(callback).toHaveBeenCalledTimes(1)
    })
})