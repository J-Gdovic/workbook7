"use strict";

let quoteButton = document.querySelector("#quoteButton");
let kanyeQuoteDiv = document.querySelector("#kanyeQuoteDiv");

let saveButton = document.querySelector("#saveButton");
let saveQuoteDiv = document.querySelector("#saveQuoteDiv");

let clearSavedQuoteButton = document.querySelector("#clearSavedQuoteButton");

function displayKanyeQuote() {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => {
      kanyeQuoteDiv.innerText = `Kanye: ${data.quote}`;
    });
}

function addQuoteToSave() {
  let div = document.createElement("div");
  saveQuoteDiv.innerText = kanyeQuoteDiv.innerText;
  saveQuoteDiv.appendChild(div);
}

function clearSaveQuoteDiv(){
saveQuoteDiv.innerText = " ";
kanyeQuoteDiv.innerText = " ";
}


quoteButton.onclick = displayKanyeQuote;
saveButton.onclick = addQuoteToSave;
clearSavedQuoteButton.onclick = clearSaveQuoteDiv;
