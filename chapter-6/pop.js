function getLastElement(array) {
    return array[array.length - 1]
}

function dropLastElement(array){
    const newArr = array.slice()
    newArr.pop()
    return newArr;
}

function pop(array){
    return {
        lastElement: getLastElement(array),
        array: dropLastElement(array)
    }
}

function test(){
    const arr = [1, 32, 34, 14, 5]
    const { lastElement, array } = pop(arr)
    console.log(lastElement, array)
}

test()