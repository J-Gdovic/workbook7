"use strict";
let toDoTextbox = document.getElementById("toDoTextbox");
let addToDoButton = document.getElementById("addToDoButton");
let toDoParagraph = document.getElementById("toDoParagraph");

function addTodo() {
  let toDoID = toDoTextbox.value;
  fetch("https://jsonplaceholder.typicode.com/todos/" + toDoID)
    .then((response) => response.json())
    .then((data) => {
      let message = `To Do: ${data.title} `;
      toDoParagraph.innerText = message;
    });
}
addToDoButton.onclick = addTodo;
