const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Home"});
})

app.get('/dashboard', (req, res) => {
  res.json([{ id: 1, nome: 'Andre', email: 'teste@gmail.com'}]);
})

app.post('/login', (req, res) => {
  if (req.body.user === 'Andre' && req.body.password === '123456'){
    return res.end();
  }

  res.status(401).end();
})

const server = http.createServer(app);
server.listen(3000);
