document.addEventListener("DOMContentLoaded", function() {
    const productImage = document.querySelector(".product__image");
    const thumbnailImages = document.querySelectorAll(".images__n40__pro");

    thumbnailImages.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const thumbnailSrc = thumbnail.getAttribute("src");
            productImage.setAttribute("src", thumbnailSrc);
        });
    });
});
// ************************************************************

// document.addEventListener('DOMContentLoaded', function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     const productType = urlParams.get('type');
//     const productDataString = urlParams.get('data');

//     if (productType && productDataString) {
//         const productData = JSON.parse(decodeURIComponent(productDataString));

//         document.querySelector('.product__image').src = productData.imageSrc;
//     }
// });





