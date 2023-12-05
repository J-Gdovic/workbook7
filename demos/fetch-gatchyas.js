"use strict";
fetch("http://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response.status);
    return response.json(); //must have return if function is more than one line
  })
  .then((data) => {
    console.log(data.name);
    console.log(data.email);
    console.log(data.website);
  });