function arraySet(array, index, value) {
    const newArr = [... array]
    newArr[index] = value;
    return newArr;
}

