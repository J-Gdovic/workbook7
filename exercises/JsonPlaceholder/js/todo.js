"use strict";
let toDoTextbox = document.getElementById("toDoTextbox");
let addToDoButton = document.getElementById("addToDoButton");
let toDoDiv = document.getElementById("toDoDiv");

function addTodo() {
  let toDoID = toDoTextbox.value;
  fetch("https://jsonplaceholder.typicode.com/todos/" + toDoID)
    .then((response) => response.json())
    .then((data) => {
      toDoDiv.innerText = `To Do: ${data.title} `;
    });
}
addToDoButton.onclick = addTodo;
