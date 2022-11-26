
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoaside);



function toggleDesktopMenu() {

   const isAsideClosed = aside.classList.contains("inactive");

   if (!isAsideClosed) {
      aside.classList.toggle("inactive");

   }

   desktopMenu.classList.toggle("inactive");


}
function toggleMobileMenu() {


   const isAsideClosed = aside.classList.contains("inactive");

   if (!isAsideClosed) {
      aside.classList.toggle("inactive");

   }

   mobileMenu.classList.toggle("inactive");

}



function toggleCarritoaside() {

   const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

   if (!isMobileMenuClosed) {
      mobileMenu.classList.toggle("inactive");

   }

   aside.classList.toggle("inactive");

}


const productList = [];

productList.push({
   name: "bike",
   price: 120,
   Image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productList.push({
   name: "pantalla",
   price: 220,
   Image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productList.push({
   name: "compu",
   price: 620,
   Image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productList.push({
   name: "bike",
   price: 120,
   Image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productList.push({
   name: "pantalla",
   price: 220,
   Image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productList.push({
   name: "compu",
   price: 620,
   Image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});

function rederProducts(array){
   for (product of array) {
      const productCard = document.createElement("div");
      productCard.classList.add ("product-card");
   
   
   // product= {name, price,image} -> product.Image
   const productImg = document.createElement ("img" );
   productImg.setAttribute("src",product.Image);
   
    const productInfo = document.createElement("div");
      productInfo.classList.add ("product-info");
   
   
   
    const productInfoDiv = document.createElement("div");
   
    const productPrince = document.createElement("p");
   productPrince.innerText= "$"+ product.price;
    const productName = document.createElement("p");
    productName.innerText= product.name;
   
   
    productInfoDiv.appendChild(productPrince);
    productInfoDiv.appendChild(productName);
   
   
   
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./Icons/bt_add_to_cart.svg");
   
    productInfoFigure.appendChild(productImgCart);
   
   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);
   
   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);
   
   
   cardsContainer.appendChild(productCard);
   
   }

}

rederProducts (productList);  
