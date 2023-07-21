const express = require('express');
const fs = require('fs')
const cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json());



//Filenames
const admins = 'Books.json'



//readFiles or initiate empty ARR

var Books = JSON.parse(fs.readFileSync(admins, 'utf-8', (err, data) => {
  if (err) return err
  else return data
}))


app.get('/books', (req, res) => {
  res.json({ books: Books })
});

app.get('/books/:id', (req, res) => {
  const {id} = req.params
  let book  = Books.books.filter(book=>book.id == id)[0]
  res.json(book)
});


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
