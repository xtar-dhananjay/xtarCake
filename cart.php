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
                        <button><i class="fa-solid fa-minus"></i></button>
                        <span>1</span>
                        <button><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <div class="priceDetails">
                        <p class="finalPrice"><span>₹</span>299</p>
                        <p class="oldPrice"><span>₹</span>599</p>
                        <p class="totalDescount"><span>40</span>% OFF</p>
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
                        <button><i class="fa-solid fa-minus"></i></button>
                        <span>1</span>
                        <button><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <div class="priceDetails">
                        <p class="finalPrice"><span>₹</span>299</p>
                        <p class="oldPrice"><span>₹</span>599</p>
                        <p class="totalDescount"><span>40</span>% OFF</p>
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
                        <button><i class="fa-solid fa-minus"></i></button>
                        <span>1</span>
                        <button><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <div class="priceDetails">
                        <p class="finalPrice"><span>₹</span>299</p>
                        <p class="oldPrice"><span>₹</span>599</p>
                        <p class="totalDescount"><span>40</span>% OFF</p>
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
                <i class="fa-solid fa-chevron-up"></i>
            </div>
            <div id="couponcdoeBox">
                <input type="text" placeholder="Coupon Code">
                <button>Apply Coupon</button>
            </div>
        </div>
        <div id="totalpriceDetails">
            <div id="finalPrice">
                <p>Price</p>
                <p>1559</p>
            </div>
            <div id="totalProduct">
                <p>Total Product</p>
                <p>3</p>
            </div>
            <div id="deliveryCharge">
                <p>Delivery Charge</p>
                <p>Free</p>
            </div>
            <div id="totalAmount">
                <p>Total Amount</p>
                <p>1596</p>
            </div>
        </div>
        <button id="orderBtn">PLACE ORDER</button>
    </div>
</section>

<?php include 'footer.php' ?>

<script src="Js/cart.js"></script>