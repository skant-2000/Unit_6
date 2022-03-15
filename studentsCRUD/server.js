const express = require("express")
const users = require("./users.json")

const PORT = 8000;

let app = express();

var fs = require('fs');

function logger(req, res, next) {
    next()
}

function logger (req, res, next) {
    next()
}

app.get("/", (req, res) => {
    res.send("Welcome to the Home page")
})

app.get("/users", (req, res) => {
    res.json(users)
})

app.post("/users",[logger, express.json()], (req, res) => {
    users.push(req.body);
    fs.writeFileSync("users.json", JSON.stringify(users));
    res.json(req.body);
})

app.delete("/users/:id",[logger, express.json()], (req, res) => {
    const { id } = req.params
    const deleteData = users.find((user) => user.id === Number.parseInt(id))
    let newUsers = users.filter(user => user.id !== Number.parseInt(id))
    fs.writeFileSync("users.json", JSON.stringify(newUsers));
    res.status(200).json(deleteData);
})

// app.patch("/users/:id", (req, res) => {
//     const { id } = req.params;
//     const user = users.find((user) => user.id === Number.parseInt(id))
//     users.push(req.body)
//     res.json(user)
// })


app.listen(PORT, () => {
    console.log(`Listening on port 8000`)
})