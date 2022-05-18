function getFirstElement(array) {
    return array[0];
}

function dropFirst(array) {
    const newArray = [... array]
    newArray.shift()
    return newArray;
}

function shift(array) {
    return {
        firstElement: getFirstElement(array),
        array: dropFirst(array)
    }
}

function test() {
    const arr = [1, 32, 34, 14, 5]
    const { firstElement, array } = shift(arr)
    console.log(firstElement, array)
}

test()