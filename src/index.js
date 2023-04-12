// Your code here
  fetch("http://localhost:3000/characters")
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    