const shoppingCarTotal = 0;

//DOM update
function updateTaxDom() {
    setTaxDom(calculateTaxes(0.10, shoppingCarTotal))
}

//Business rule -> calculation
function calculateTaxes(taxPercent, total) {
    return taxPercent * total
}

//DOM update -> action
function setTaxDom(tax) {
    //set the tax DOM with the given value
}

//DOM update -> Action
function updateShippingIcons() {
    const buyButtons = [] // a set of buttons
    for (const buyButton of buyButtons) {
        const item = buyButton.item
        if (hasFreeShipping(item, shoppingCarTotal)) {
            buyButton.showFreeShippingIcon()
        }
        else{
            buyButton.hideFreeShippingIcon()
        }
    }
}
//Business rule -> Action
function hasFreeShipping(item, total) {
    return item + total >= 20;
}