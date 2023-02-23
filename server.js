const express = require('express');
const mongojs = require('mongojs');
const db = mongojs('fsapp', ['users']);

const app = express();

app.use(express.json());

app.get('/data', (req, res) => {
    res.send("Works fine!!!");
})

app.post('/register', (req, res) => {
    // save new user
    console.log(req.body)
    res.send('OK');

    //db.users.insert({name: req.body.name, pass: req.body.pass}, (err, docs) => {
    //  res.send("OK");})
})

app.post('/login', (req, res) => {
  // find user from db
  console.log(req.body)
  res.send({
    name: 'Goran',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  })

  //db.users.find({name: req.body.userName, pass: req.body.password}, (err, docs) => {
  //  if (docs.length == 1) {
  //    res.send({name: docs[0].name, token: docs[0]._id})}})
})

app.listen(9000, () => {
    console.log('Server running on port 9000');
})