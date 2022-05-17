function getButtons() {
    const buyButtons = [] // a set of buttons
    for (const buyButton of buyButtons) {
        const item = buyButton.item
        const hasFreeShipping = getsFreeShipping(cart, item)
        setFreeShippingIcon(button, hasFreeShipping)
    }
}

function setFreeShippingIcon(button, isShown) {
    if (isShown) {
        button.showFreeShippingIcon();
    }
    else {
        button.hideFreeShippingIcon();
    }

}

function hasFreeShipping(cart) {
    return calctTotal(cart) >= 20;
}