fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => {
    console.log(response.status, response.statusText);
    return response.json();
  })
  .then((albums) => {
    console.log(albums);
  });