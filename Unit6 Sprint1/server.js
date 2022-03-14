const express = require("express")
const address = require("./address.json")
const fs = require("fs")

const port = 8000;

let app = express()

function logger(req, res, next) {
    next()
}

app.get("/api/addresses",[logger, express.json()], (req, res) => {
    res.json(address)
})

app.post("/api/addresses",[logger, express.json()], (req, res) => {
    address.push(req.body);
    fs.writeFileSync("address.json", JSON.stringify(address));
    res.json(req.body);
})

app.delete("/api/addresses/:id",[logger, express.json()], (req, res) => {
    const { id } = req.params
    const deleteAddress = address.find((address) => address.id === Number.parseInt(id))
    address.splice(deleteAddress, 1)
    fs.writeFileSync("address.json", JSON.stringify(address));
    res.send();
})

app.put("/api/addresses/:id",[logger, express.json()], (req, res) => {
    const { id } = req.params
    let newDatax = address.find((address) => address.id === Number.parseInt(id))

    console.log(newDatax)

    newData = {
        "id": req.params.id,
        "flat_no": req.body.flat_no,
        "street": req.body.street,
        "landmark": req.body.landmark,
        "locality": req.body.locality,
        "city": req.body.city,
        "pin": req.body.pin
    }
    // address.push(newData);
    fs.writeFileSync("address.json", JSON.stringify(address));

    // fs.writeFileSync("address.json", JSON.stringify(address));
    // res.json(req.body);
    res.send(newData)

    console.log(newData)

})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})