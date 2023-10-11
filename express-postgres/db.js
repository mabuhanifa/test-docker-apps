const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: 5432,
  database: process.env.database,
});

(async function connectDB() {
  try {
    await pool.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
})();

module.exports = pool;
