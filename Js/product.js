let reviewStars = document.querySelectorAll('#writeStars i');
let star1 = document.getElementById('star1');
let star2 = document.getElementById('star2');
let star3 = document.getElementById('star3');
let star4 = document.getElementById('star4');
let star5 = document.getElementById('star5');
let writereviewsBox = document.getElementById('writeReviews');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let productPage = document.getElementById('productPage');
let closeReviewBox = document.getElementById('closeReviewBox');
let reviewSubmitBtn = document.getElementById('reviewSubmitBtn');
let revewTextarea = document.getElementById('revewTextarea');
let reviewError = document.getElementById('reviewError');

addreivewBtn.onclick = () => {
    header.style.filter="blur(10px)";
    footer.style.filter="blur(10px)";
    productPage.style.filter="blur(10px)";
    writereviewsBox.classList.add('active');
}

closeReviewBox.onclick = () => {
    header.style.filter="blur(0)";
    footer.style.filter="blur(0)";
    productPage.style.filter="blur(0)";
    writereviewsBox.classList.remove('active');
    removeStar();
    revewTextarea.value="";
}

let starStatus = false;
let writeStatus = false;
reviewSubmitBtn.onclick = () => {
    reviewStars.forEach(e => {
        if (e.classList.contains('activeStar')) {
            starStatus = true;
        }else{
        }
    })

    revewTextarea.value != "" ? writeStatus = true : writeStatus = false;

    if (starStatus == true && writeStatus == true) {
        reviewError.classList.remove('active');
        reviewError.classList.remove('active');
        
        console.log('this review is ready to submit');
        // write from here for save the data into data base
    }else{
        reviewError.classList.add('active');
        reviewError.classList.add('active');
    }
}


star1.onclick = () => {
    removeStar();
    star1.classList.add('activeStar');
}
star2.onclick = () => {
    removeStar();
    star1.classList.add('activeStar');
    star2.classList.add('activeStar');
}
star3.onclick = () => {
    removeStar();
    star1.classList.add('activeStar');
    star2.classList.add('activeStar');
    star3.classList.add('activeStar');
}
star4.onclick = () => {
    removeStar();
    star1.classList.add('activeStar');
    star2.classList.add('activeStar');
    star3.classList.add('activeStar');
    star4.classList.add('activeStar');
}
star5.onclick = () => {
    removeStar();
    star1.classList.add('activeStar');
    star2.classList.add('activeStar');
    star3.classList.add('activeStar');
    star4.classList.add('activeStar');
    star5.classList.add('activeStar');
}

function removeStar(){
    reviewStars.forEach(e => {
        e.classList.remove('activeStar');
    });
}