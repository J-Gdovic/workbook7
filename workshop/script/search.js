"use strict";
let productSelect = document.querySelector("#productSelect");

function fetchProductData() {
  //fetch by view all products
  fetch("http://localhost:8081/api/products")
    .then((response) => response.json())
    .then((productArray) => {
      // console.log(productArray);
      return productArray;
    });
}
fetchProductData();

function loadProductDataDropDown(productArray) {
    for (const product of productArray){
        let option = document.createElement("option");
        option.value = product.productId;
        option.innerText = product.productName;
        productSelect.appendChild(option);
    }
   
}
loadProductDataDropDown();



//////////////////////////////////////////////////////////
function loadCategoryData() {
  //fetch by categories
  fetch("http://localhost:8081/api/categories")
    .then((response) => response.json())
    .then((categoryArray) => {
      // console.log(categoryArray);
      return categoryArray;
    });
}
