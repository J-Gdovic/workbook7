"use strict";
//using fetch .then .then
// fetch("http://jsonplaceholder.typicode.com/users/1")
// .then((reponse) => Response.json())
// .then((data) => {
//     console.log(data.name);
// });

///using async await function
async function loadUser(){
    let response = await fetch("http://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log(data);
}
loadUser();