fetch("http://localhost:8080/HelloWorld")
  .then(res => res.json())
  .then(data => console.log(data));