export const snailSortV1 = (arr: number[][]) : number[] => {
    const returnArr: number[] = []

    const minMaxRect = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }

    const position = {
        x: 0,
        y: 0
    }

    let direction = 0 //0 right, 1 down, 2 left, 3 up

    for (let i = 0; i < arr[0].length ** 2; i++) {
        returnArr.push(arr[position.y][position.x])

        if (direction === 0) { // right
            if (position.x === arr[0].length - minMaxRect.right - 1) {
                minMaxRect.top++
                position.y++
                direction = 1
            } else {
                position.x++
            }
        } else if (direction === 1) { // down
            if (position.y === arr[0].length - minMaxRect.bottom - 1) {
                minMaxRect.right++
                position.x--
                direction = 2
            } else {
                position.y++
            }
        } else if (direction === 2) { // left
            if (position.x === minMaxRect.left) {
                minMaxRect.bottom++
                position.y--
                direction = 3
            } else {
                position.x--
            }
        } else if (direction === 3) { // up
            if (position.y === minMaxRect.top) {
                minMaxRect.left++
                position.x++
                direction = 0
            } else {
                position.y--
            }
        }
    }

    return returnArr
}

export const snailSortV2 = (arr: number[][]) : number[] => {
    const minMaxRect = {
        right: arr.length - 1,
        bottom: arr.length - 1,
        left: 0,
        top: 0
    }

    const position = {
        x: 0,
        y: 0
    }

    const direction = {
        x: 1,
        y: 0
    }

    const returnArr: number[] = []

    const resultSize = arr.length * arr.length
    
    while (returnArr.length < resultSize) {
    
        returnArr.push(arr[position.y][position.x])
    
        position.x += direction.x
        position.y += direction.y
    
        if (position.x > minMaxRect.right) {
            direction.x = 0
            direction.y = 1
            minMaxRect.top += 1
            position.x = minMaxRect.right
            position.y += 1
        } else if (position.x < minMaxRect.left) {
            direction.x = 0
            direction.y = -1
            minMaxRect.bottom -= 1
            position.x = minMaxRect.left
            position.y -= 1
        } else if (position.y > minMaxRect.bottom) {
            direction.x = -1
            direction.y = 0
            minMaxRect.right -= 1
            position.y = minMaxRect.bottom
            position.x -= 1
        } else if (position.y < minMaxRect.top) {
            direction.x = 1
            direction.y = 0
            minMaxRect.left += 1
            position.y = minMaxRect.top
            position.x += 1
        }
    }
    
    return returnArr
}