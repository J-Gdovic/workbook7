"use strict";
//all users data in array
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(usersArray => {
    console.log(usersArray);
});

//one specific users data in object
fetch("https://jsonplaceholder.typicode.com/users/5")
.then(response => response.json())
.then(user => {
    console.log(user);
});