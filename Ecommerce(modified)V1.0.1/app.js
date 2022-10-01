if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
class cartData {
    constructor(title,price,image){
        this.title =title;
        this.price = price;
        this.image = image;
    }
}
function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    let addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

    document
        .getElementsByClassName('btn-purchase')[0]
        .addEventListener('click', purchaseClicked);
}

function purchaseClicked() {
    alert('Thank you for your purchase');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    const variableName = (input = event.target);
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}


function addToCartClicked(event) {
    //let button = event.target;
    //let shopItem = button.parentElement.parentElement;
    //let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    //let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    //let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    //addItemToCart(title, price, imageSrc);
    //updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart');
            return;
        }
    }
    let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow
        .getElementsByClassName('btn-danger')[0]
        .addEventListener('click', removeCartItem);
    cartRow
        .getElementsByClassName('cart-quantity-input')[0]
        .addEventListener('change', quantityChanged);
}
function addItemToCartArray(title, price, imageSrc) {
    let cartItem = new cartData(title,price,imageSrc);
    let cartArray = window.localStorage.getItem('cartArray') != null ?JSON.parse(window.localStorage.getItem('cartArray')) : [];
    for(let i=0; i< cartArray.length ; i++){
        if(cartArray[i].title == title){
            alert('This item is already added to the cart');
            return;
        }
    }
    cartArray.push(cartItem);
    window.localStorage.setItem('cartArray', JSON.stringify(cartArray));
}
function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName(
            'cart-quantity-input'
        )[0];
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText =
        '$' + total;
}
function addInhome(){
    let carts = document.getElementsByClassName("cart")[0];

    carts.addEventListener("click",addItemToCart);
    carts.addEventListener("click", addToCartClicked);

}
window.onload= (event) =>
{
    updateCartTotalPrice();
    addItemToCartDisplay();
};
function updateCartTotalPrice(){
    let total = 0;
    let cartArray = JSON.parse(window.localStorage.getItem('cartArray'));
    cartArray.forEach(x => total+=x.price);
    document.getElementsByClassName("cart-total-price")[0].innerHTML = "$"+total;
}

function addItemToCartDisplay(title, price, imageSrc) {
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartArray = JSON.parse(window.localStorage.getItem('cartArray'));
    for(let i=0; i< cartArray.length; i++){

        let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${cartArray[i].image}" width="100" height="100">
            <span class="cart-item-title">${cartArray[i].title}</span>
        </div>
        <span class="cart-price cart-column">${cartArray[i].price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`;

        let cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');
        cartRow.innerHTML = cartRowContents;
        cartItems.append(cartRow);
        cartRow
            .getElementsByClassName('btn-danger')[0]
            .addEventListener('click', removeCartItem);
        cartRow
            .getElementsByClassName('cart-quantity-input')[0]
            .addEventListener('change', quantityChanged);
    }

}
