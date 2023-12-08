"use strict";
let productSelect = document.querySelector("#productSelect");
let categorySelect = document.querySelector("#categorySelect");
let veiwAllSelect = document.querySelector("#veiwAllSelect");

fetch("http://localhost:8081/api/categories")
  .then((response) => response.json())
  .then((categoryArray) => {
    // console.log(categoryArray);
    return categoryArray;
  });
