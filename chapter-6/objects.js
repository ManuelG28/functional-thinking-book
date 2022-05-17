function objectSet(object, key, value){
    const newObject = Object.assign({}, object);
    newObject[key] = value;
    return newObject;
}

function objectDelete(object, key){
    const newObject = Object.assign({}, object);
    delete newObject[key];
    return newObject;
}

function setQuantity(item, newQuantity){
    return objectSet(item, "quantity", newQuantity);
}
