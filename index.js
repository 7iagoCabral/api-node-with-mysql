require("dotenv").config();



const db = require('./src/db');


const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

app.get('/cliente', async (req, res) => {
  const results = await db.selectCustomers();
  res.json(results);
})

app.get('/contareceber', async (req, res) => {
  const results = await db.selectContaReceber();
  res.json(results);
})
