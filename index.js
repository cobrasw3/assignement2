const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


const users = [
  { name: "Paul", age: "21", likes: "bread"},
  { name: "Arthur", age: "20", likes: "radish"},
  { name: "Fanny", age: "18", likes: "Boba"},
  { name: "Julian", age: "19", likes: "Manga"},
  { name: "Lucas", age: "22", likes: "Nutella"}
]

app.use(express.static('public1'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})


app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/users/:id', (req, res) => {
    res.json(users[parseInt(req.params.id)-1]);
})

app.listen(port, () => {
  console.log("Example app listening on port 3000");
})
