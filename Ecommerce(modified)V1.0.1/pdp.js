const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

function addToCartClicked2(event) {
    localStorage.setItem('status',"logged");
    if (localStorage.getItem('status') == null){

        document.getElementById('demo').innerHTML = '<p>Please follow the link <a href="login.html">to login first</a>.</p>';

    }
    else {
        let button = event.target;
        let shopItem = button.parentElement.parentElement.parentElement;
        let title = shopItem.getElementsByClassName('product-title')[0].innerText;
        let price = parseInt(shopItem.getElementsByClassName('product-price')[0].getElementsByClassName('new-price')[0].getElementsByTagName('span')[0].innerText.substring(1));
        addItemToCartArray(title, price, "productsImages/1.0.jpg");
    }
}
