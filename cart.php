<?php include 'header.php' ?>

<link rel="stylesheet" href="Css/root.css">
<link rel="stylesheet" href="Css/cart.css">

<section id="cartPage">
    <div id="leftCart">

        <div class="product">
            <div class="productTop">
                <div class="productImg">
                    <img src="Img/cake.png" alt="Product-img">
                </div>
                <div class="productDetails">
                    <h3>Classic Red Velvet Cake (Half Kg)</h3>
                    <div class="productQTY">
                        <button><i class="fa-solid fa-minus minusBtn"></i></button>
                        <span>1</span>
                        <button><i class="fa-solid fa-plus plusBtn"></i></button>
                    </div>
                    <div class="priceDetails">
                        <p class="finalPrice">₹<span>10</span></p>
                        <p class="oldPrice">₹<span>15</span></p>
                        <p class="totalDescount"><span>40</span>% OFF</p>
                        <input type="hidden" class="hiddeTotalPrice">
                        <input type="hidden" class="hiddenTotalDiscount">
                        
                    </div>
                </div>
            </div>
            <button class="removeBtn">Remove</button>
        </div>
        <div class="product">
            <div class="productTop">
                <div class="productImg">
                    <img src="Img/cake.png" alt="Product-img">
                </div>
                <div class="productDetails">
                    <h3>Classic Red Velvet Cake (Half Kg)</h3>
                    <div class="productQTY">
                        <button><i class="fa-solid fa-minus minusBtn"></i></button>
                        <span>1</span>
                        <button><i class="fa-solid fa-plus plusBtn"></i></button>
                    </div>
                    <div class="priceDetails">
                        <p class="finalPrice">₹<span>20</span></p>
                        <p class="oldPrice">₹<span>15</span></p>
                        <p class="totalDescount"><span>40</span>% OFF</p>
                        <input type="hidden" class="hiddeTotalPrice">
                        <input type="hidden" class="hiddenTotalDiscount">
                        
                    </div>
                </div>
            </div>
            <button class="removeBtn">Remove</button>
        </div>
        <div class="product">
            <div class="productTop">
                <div class="productImg">
                    <img src="Img/cake.png" alt="Product-img">
                </div>
                <div class="productDetails">
                    <h3>Classic Red Velvet Cake (Half Kg)</h3>
                    <div class="productQTY">
                        <button><i class="fa-solid fa-minus minusBtn"></i></button>
                        <span>1</span>
                        <button><i class="fa-solid fa-plus plusBtn"></i></button>
                    </div>
                    <div class="priceDetails">
                        <p class="finalPrice">₹<span>30</span></p>
                        <p class="oldPrice">₹<span>15</span></p>
                        <p class="totalDescount"><span>40</span>% OFF</p>
                        <input type="hidden" class="hiddeTotalPrice">
                        <input type="hidden" class="hiddenTotalDiscount">
                        
                    </div>
                </div>
            </div>
            <button class="removeBtn">Remove</button>
        </div>
        

    </div>


    <div id="rightCart">
        <h2 id="priceTitle">PRICE DETAILS</h2>
        <hr>
        <div id="couponBox" class="disActive">
            <div id="couponHeading">
                <h3>Coupon Discount</h3>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div id="couponcdoeBox">
                <input type="text" id="couponInput" placeholder="Coupon Code">
                <button id="couponBtn">Apply Coupon</button>
            </div>
        </div>
        <div id="totalpriceDetails">
            <div id="finalPrice">
                <p>Price</p>
                <p id="finalPriceN">1559</p>
            </div>
            <div id="discountPrice" style="display: none;">
                <p>Total Descount</p>
                <p id="discountPriceN">1559</p>
            </div>
            <div id="totalProduct">
                <p>Total Product</p>
                <p id="totalProductN">10</p>
            </div>
            <div id="couponcodeBox" style="display: none;">
                <p>Coupon Code</p>
                <p id="couponcodePrice">-<span>50</span></p>
            </div>
            <div id="deliveryCharge">
                <p>Delivery Charge</p>
                <p id="deliveryChargeN">Free</p>
            </div>
            <div id="totalAmount">
                <p>Total Amount</p>
                <p id="totalAmountN">1596</p>
            </div>
        </div>
        <button id="orderBtn">Checkout</button>
    </div>
</section>
<?php include 'message.php' ?>
<?php include 'footer.php' ?>

<script src="Js/cart.js"></script>