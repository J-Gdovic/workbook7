let promise = fetch("https://jsonplaceholder.typicode.com/comments/3");
console.log(promise);
promise.then(function processResponse(response){//.then resolves the promis to a response
    console.log(response.status, response.statusText);
   return response.json();    
})
.then(function(data){//resolves the promise to the JS object and names it data
    console.log(data);
})
//------------------------------short version below")




fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response)=>response.json())
.then((data)=> console.log(data));
