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


function loadProductDataDropDown() {
  for (const product of productArray) {
    let option = document.createElement("option");
    option.value = product.productId;
    option.innerText = product.productName;
    productSelect.appendChild(option);
  }
}


//////////////////////////////////////////////////////////
function fetchCategoryData() {
  //fetch by categories
  fetch("http://localhost:8081/api/categories")
    .then((response) => response.json())
    .then((categoryArray) => {
      // console.log(categoryArray);
      return categoryArray;
    });
}


function loadCategoryDataDropDown() {
  for (const category of categoryArray) {
    let option = document.createElement("option");
    option.value = category.categorytId;
    option.innerText = category.name;
    productSelect.appendChild(option);
  }
}

/////////////wire Up
fetchProductData(); //fetches the product array
loadProductDataDropDown(); // loads the product name in dropdown
fetchCategoryData();// fetches the category array
loadCategoryDataDropDown() // loads the category name into a dropdown