const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT)

app.get("/", (req, res) => {
    res.send("Working!")
})

app.get("/api/:id", (req, res) => {

    if(req.params.id.includes("-")){
        const dateToUnix = Date.parse(req.params.id)
        const date = new Date(dateToUnix / 1)
        res.json({"unix": dateToUnix, "utc": date.toUTCString()})
    }
    else{
    const formattedUnix = req.params.id / 1
    const date = new Date(formattedUnix)
    res.json({"unix" : req.params.id, "utc": date.toUTCString()})
    }
    
})