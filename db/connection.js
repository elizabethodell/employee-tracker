const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  //MySQL username,
  user: 'root',
  //MySQL password
  password: '700Canal!!',
  database: 'election'
});

module.exports = db;