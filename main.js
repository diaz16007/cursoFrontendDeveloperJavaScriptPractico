
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon=document.querySelector(".product-detail-close")
const shoppingCardContainer = document.querySelector("#shoppingCardContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoaside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);



function toggleDesktopMenu() {

   const isAsideClosed = shoppingCardContainer.classList.contains("inactive");

   if (!isAsideClosed) {
      shoppingCardContainer.classList.toggle("inactive");

   }

   desktopMenu.classList.toggle("inactive");


}
function toggleMobileMenu() {


   const isAsideClosed = shoppingCardContainer.classList.contains("inactive");

   if (!isAsideClosed) {
      shoppingCardContainer.classList.add("inactive");

   }

   closeProductDetailAside();

   mobileMenu.classList.toggle("inactive");

}



function toggleCarritoaside() {

   const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

   if (!isMobileMenuClosed) {
      mobileMenu.classList.add("inactive");

   }
   
   const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
   
   if (!isProductDetailClosed) {
      productDetailContainer.classList.add("inactive");

   }




   shoppingCardContainer.classList.toggle("inactive");

}

function openProductDetailAside(){
   shoppingCardContainer.classList.add("inactive")
   productDetailContainer.classList.remove("inactive")
}

function closeProductDetailAside(){
   productDetailContainer.classList.add("inactive")

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
   productImg.addEventListener("click", openProductDetailAside);
   
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
