const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const secretJWT = 'ocavalodenapoleaosechamavabranco';

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Home"});
})

function examineToken(req, res, next){
  const token = req.headers['x-access-token'];
  jwt.verify(token, secretJWT, (err, decoded) => {
    if(err) return res.status(401).end();

    req.userId = decoded.userId;
    next();
  });
}

app.get('/dashboard', examineToken,(req, res) => {
  res.json([{ id: 1, nome: 'Andre', email: 'teste@gmail.com'}]);
})

app.post('/login', (req, res) => {
  if (req.body.user === 'Andre' && req.body.password === '123456'){
    //gerar token
    const token = jwt.sign({userId:1}, secretJWT, {expiresIn: 180});    //JWT necessita de payload / um secret / tempo de expiração do token
    return res.json({auth: true, token});
  }

  res.status(401).end();
})

const server = http.createServer(app);
server.listen(3000);
