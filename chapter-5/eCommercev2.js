const shoppingCart = []

function makeItem(name, price){
    return {
        name: name,
        price: price
    }
}

function addElementLast(array, element){
    const newArray = array.concat[element];
    return newArray;
}

//Creates a modified copy of the cart
function addToShoppingCart(item, previousShoppingCart){
    return addElementLast(previousShoppingCart, item)
}

//DOM update -> Action
function updateShippingIcons(currentCart) {
    const buyButtons = [] // a set of buttons
    for (const buyButton of buyButtons) {
        const item = buyButton.item
        const newShoppingCart = addToShoppingCart(item, currentCart)
        if (hasFreeShipping(newShoppingCart)) {
            buyButton.showFreeShippingIcon()
        }
        else {
            buyButton.hideFreeShippingIcon()
        }
    }
}
//Business rule -> Action
function hasFreeShipping(cart) {
    return calctTotal(cart) >= 20;
}

function calctTotal(cart) {
    let total = 0;
    for (const item of cart.item) {
        total += item.price;
    }
    return 0;
}