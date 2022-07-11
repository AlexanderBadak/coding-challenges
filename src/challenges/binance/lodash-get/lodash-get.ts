export const lodashGetV1 = (obj: Record<string, any>, path: string) : string | undefined => {
    const splitArr = path.split('.')

    const firstProp = obj[splitArr[0]]

    if (splitArr.length === 2) {
        //obj
        return firstProp[splitArr[1]]
    } else if (splitArr.length === 3) {
        //array
        const index = splitArr[1][1]
        const item = firstProp[index]

        if (item) return item[splitArr[2]]
        return undefined
    }

    return undefined
}

export const lodashGetV2 = (obj: Record<string, any>, path: string) : string | undefined => {
    const splitArr = path.split('.')

    const getValue = (object: Record<string, any>, pathItems: string[], count: number) => {
        const pathSegment = pathItems[count]

        if (pathSegment.length === 3) {
            const isOpening = pathItems[0] === '['
            const index = parseInt(pathItems[1])
            const isIndex = !isNaN(index)
            const isClosing = pathItems[2] === ']'

            if (isOpening && isIndex && isClosing) {
                if (count === pathItems.length) return
                //https://www.youtube.com/watch?v=7VAU_J3BwIc
                return
            }
        }
    }

    const value = getValue(obj, splitArr, 1)

    const firstProp = obj[splitArr[0]]

    if (splitArr.length === 2) { //obj
        const secondProp = splitArr[1]
        if (secondProp in firstProp) return firstProp[secondProp]
        return undefined
    } else if (splitArr.length === 3) { //array
        const index = splitArr[1][1]
        const item = firstProp[index]

        if (item) return item[splitArr[2]]
        return undefined
    }

    return undefined
}