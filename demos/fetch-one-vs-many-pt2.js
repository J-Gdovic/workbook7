//many, array
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((albums) => {
    for (const album of albums) {
      console.log(album.title);
    }
  });

//one, object
fetch("https://jsonplaceholder.typicode.com/albums/1")
  .then((response) => response.json())
  .then((album) => {
    console.log(album.title);
  });