import express from 'express'
const app = express()
const PORT = process.env.PORT || 4000;
//Routing

app.get("/", (req, res) => {
    res.send("Hello world from express");
})

app.get("/ecommerce", (req, res) => {
    res.send("Hello world from ecommerce");
})


app.listen(PORT, () => {
    console.info("Server working at port", PORT)
})