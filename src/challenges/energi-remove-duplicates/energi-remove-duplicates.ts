export const removeDuplicateV1 = (arr: number[]) => {
    const uniqueNrs: {[key: number]: number} = {}
    const unqiueArr: number[] = []

    for (let i = 0; i < arr.length; i++) {
        const nr = arr[i]
        if (uniqueNrs[nr] == null) {
            uniqueNrs[nr] = nr
            unqiueArr.push(nr)
        }
    }

    return unqiueArr
}

export const removeDuplicateV2 = (arr: number[]) => arr.reduce((acc: number[], curr) => {
    if (!acc.includes(curr)) acc.push(curr)
    return acc
}, [])

export const removeDuplicateV3 = (arr: number[]) : number[] => [...new Set(arr)]