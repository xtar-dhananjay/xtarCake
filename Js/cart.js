let navbarMenu = document.querySelectorAll('header nav a');
navbarMenu[0].classList.remove('activeNav');
navbarMenu[1].classList.add('activeNav');

let couponCollapseBtn = document.querySelector('#couponHeading i');
let couponBox = document.getElementById('couponBox');
let productDetails = document.querySelectorAll('.productDetails');
let hiddeTotalPrice1 = document.querySelectorAll('.productDetails .hiddeTotalPrice');
let finalPrice = document.getElementById('finalPriceN');
let totalProduct = document.querySelectorAll('.productQTY span');
let totalProductBox = document.getElementById('totalProductN');
let deliveryCharge = document.getElementById('deliveryChargeN');
let totalAmount = document.getElementById('totalAmountN');
let discountPrice = document.getElementById('discountPriceN');
let hiddenTotalDiscount1 = document.querySelectorAll('.priceDetails .hiddenTotalDiscount');
let couponBtn = document.getElementById('couponBtn');
let couponInput = document.getElementById('couponInput');
let couponcodeBox = document.getElementById('couponcodeBox');
let couponcodeBoxPrice = document.querySelector('#couponcodeBox p span');
let allProduct = document.querySelectorAll('#leftCart .product .removeBtn');

couponCollapseBtn.onclick = () => {
    couponBox.classList.toggle('disActive');
    if (couponBox.classList.contains('disActive')) {
        couponCollapseBtn.classList.replace('fa-chevron-up', 'fa-chevron-down');
    }else{
        couponCollapseBtn.classList.replace('fa-chevron-down', 'fa-chevron-up');
    }
}

productDetails.forEach( e => {
    let minusBtn = e.querySelector('.productQTY .minusBtn');
    let plusBtn = e.querySelector('.productQTY .plusBtn');
    let productCount = e.querySelector('.productQTY span');
    let findPrice = e.querySelector('.finalPrice span');
    let hiddeTotalPrice2 = e.querySelector('.hiddeTotalPrice');
    let oldPrice = e.querySelector('.oldPrice span');
    let hiddenTotalDiscount2 = e.querySelector('.hiddenTotalDiscount');

    calculatePrice();
    minusBtn.onclick = () => {
        if (productCount.innerText == 1) {
            productCount.innerText == 1;
        }else{
            let newCount = parseInt(productCount.innerText) - 1;
            productCount.innerText = newCount;
        }
        calculatePrice();
    }
    plusBtn.onclick = () => {
        let plusCount = parseInt(productCount.innerText) + 1;
        productCount.innerText = plusCount;      
        calculatePrice();
    }
    function calculatePrice(){
        // coupon code diactivate now
        couponBtn.classList.remove('deactivateBtn');
        couponInput.classList.remove('deactivateBtn');
        couponInput.value = '';
        couponcodeBoxPrice.innerText = '';
        couponcodeBox.style.display="none";
        //
        let productPrice = parseInt(findPrice.innerText) * parseInt(productCount.innerText);
        let productDiscount = parseInt(oldPrice.innerText) - parseInt(findPrice.innerText);
        hiddeTotalPrice2.value = productPrice;
        hiddenTotalDiscount2.value = productDiscount * parseInt(productCount.innerText);
        totalPrice();
    }
})

var finalAmount;
function totalPrice(){
    // Total Price
    let totalPrice = 0;
    hiddeTotalPrice1.forEach( e => {
        totalPrice += parseInt(e.value);
    })
    finalPrice.innerText = totalPrice;

    // Total discount
    let totalDescount = 0;
    hiddenTotalDiscount1.forEach(e => {
        totalDescount += parseInt(e.value);
    });
    discountPrice.innerText = totalDescount;    

    // Total Product
    let totalProducts = 0;
    totalProduct.forEach( e => {
        totalProducts += parseInt(e.innerText);
    })
    totalProductBox.innerText = totalProducts;

    // Delivery Charge
    let countDeliveryCharge = 0;
    if (deliveryCharge.innerText == "Free") {
        countDeliveryCharge = 0;
    }else{
        countDeliveryCharge = parseInt(deliveryCharge.innerText);
    }

    // Total Final Price
    totalAmount.innerText = totalPrice + countDeliveryCharge;
    finalAmount = totalPrice + countDeliveryCharge;
}


let couponCode = "xtar20";
let couponPrice = 50;

couponBtn.onclick = () => {
    if (couponInput.value != '') {
        if (couponInput.value == couponCode) {
            if (parseInt(totalAmount.innerText) >= (couponPrice+50)) {
                totalAmount.innerText = parseInt(totalAmount.innerText) - couponPrice;
                couponBtn.classList.add('deactivateBtn');
                couponInput.classList.add('deactivateBtn');
                couponcodeBoxPrice.innerText = couponPrice;
                couponcodeBox.style.display="flex";
            }else{
                errMsg('Please make your bill atleast '+(couponPrice+50));
            }
            couponInput.style.border = '1px solid lightgray';
        }else{
            errMsg('Wrong coupon code');
            couponInput.style.border = '1px solid red';
        }
    }else{
        couponInput.style.border = '1px solid red';
        errMsg("Please enter the coupon code");
    }
    console.log('sdf');
}

// Remove action for product
allProduct.forEach( function(product) {
    console.log(product);
    product.addEventListener('click', function() {
        product.closest('.product').remove(); // select closest element with class "product" and remove it
    });
});