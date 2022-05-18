let mailingList = [];

function setQuantityByName(cart, name, quantity) {
    const cartCopy = [... cart]
    for (let i = 0; i < cartCopy.length; i++) {
        if (cartCopy[i].name === name) {
            cartCopy[i] = setQuantity(cartCopy[i], quantity)
        }
    }
    return cartCopy}

function setPriceByName(cart, name, price) {
    const cartCopy = [... cart]
    for (let i = 0; i < cartCopy.length; i++) {
        if (cartCopy[i].name === name) {
            cartCopy[i] = setPrice(cartCopy[i], price)
        }
    }
    return cartCopy
}

function setPrice(item, newPrice) {
    const itemCopy = Object.assign({}, item)
    itemCopy.price = newPrice;
    return itemCopy;
}

function setQuantity(item, newQuantity) {
    const itemCopy = Object.assign({}, item)
    itemCopy.quantity = newQuantity;
    return itemCopy;
}

function removeItemByName(cart, name) {
    const index = null;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) index = i;
    }

    if (index !== null) return removeItems(cart, index, 1);
    return cart;
}

function submitFormHandler(event) {
    const form = event.target;
    const email = form.elements["email"].value;
    mailingList = addContact(mailingList, email)
}

function addContact(mailingList, email) {
    return push(mailingList, email)
}

function removeItems(array, index, count) {
    const newArray = [... array]
    newArray.splice(index, count)
    return newArray
}

function push(array, item) {
    const newArray = [... array]
    newArray.push(item);
    return newArray;
}