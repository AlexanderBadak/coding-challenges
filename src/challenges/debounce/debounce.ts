export const debounceStep1 = (func: () => any, delay: number) => {
    const debouncedFunc = () => {
        setTimeout(() => {
            func()
        }, delay)
    }

    return debouncedFunc
}

export const debounceV1 = <A = void, R = void>(callback: (args: A) => R, ms: number): (args: A) => Promise<R> => {
    let timer: NodeJS.Timeout

    const debouncedFunc = (args: A): Promise<R> =>
        new Promise((resolve) => {
            if (timer) {
                clearTimeout(timer)
            }

            timer = setTimeout(() => {
                resolve(callback(args))
            }, ms)
        })

    return debouncedFunc
}