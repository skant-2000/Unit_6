const mongoose = require("mongoose")
const express = require("express")

const connectDatabase = mongoose.connect("mongodb+srv://suryakant:Atlas.1998@cluster0.ugfu6.mongodb.net/todos", () => console.log("Mongoose is connected"))

const port = 8000;

let app = express()

app.use(express.json());

app.get("/tasks", (req, res) => {
    // connectDatabase.find
    // connectDatabase
    console.log(connectDatabase)
    res.json(connectDatabase)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

