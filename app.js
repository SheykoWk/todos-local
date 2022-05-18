//Imports
const express = require("express");
const fs = require("fs");
const path = require("path");


// Server configurations
const app = express();
const databasePath = path.resolve("database.json");

const PORT = 8000;

const databaseRead = fs.readFileSync(databasePath, "utf-8");
const database = JSON.parse(databaseRead);

app.use(express.json())

// Routes
app.get("/todos", (req, res) => {
  res.json(database);
});

app.post("/todos", (req, res) => {
  const data = [...database, req.body];

  fs.writeFileSync(databasePath, JSON.stringify(data));

  res.status(201).json({message: "TODO creado exitosamente"});
});

app.delete("/todos/:id");

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
