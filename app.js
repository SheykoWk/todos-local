//Imports
const express = require('express');
const fs = require('fs');
const path = require('path')

// Server configurations
const app = express()
const databasePath = path.resolve('database.json')

const PORT = 8000

const databaseRead = fs.readFileSync(databasePath, 'utf-8')
const database = JSON.parse(databaseRead)
// Routes
app.get('/todos', (req, res) => {
    res.json(database)
})

app.post('/todos')
app.delete('/todos/:id')

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})