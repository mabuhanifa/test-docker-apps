const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const db = require("./db");
require("dotenv").config();

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀🚀🚀`);
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from express app");
});

app.get("/users", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users from the database.");
  }
});
