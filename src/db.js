const mysql = require('mysql2/promise');

const client = mysql.createPool(process.env.CONNECTION_STRING);

async function selectCustomers() {
  const res = await client.query('SELECT * FROM cliente');
  return res[0];
}
async function selectContaReceber(){
  const res = await client.query('SELECT * FROM contareceber');
  return res[0];
}

async function selectEstados(){
  const res = await client.query('SELECT * FROM estado');
  return res[0];
}
async function selectMunicipios() {
  const res = await client.query('SELECT * FROM municipio');
  return res[0];
}

module.exports = { selectCustomers, selectContaReceber, selectEstados, selectMunicipios };

