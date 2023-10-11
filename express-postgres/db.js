const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: 5432,
  database: process.env.database,
});

pool.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to Neon PostgreSQL database");
  }
});

module.exports = pool;
