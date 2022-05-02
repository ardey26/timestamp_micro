const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT)

app.get("/", (req, res) => {
    res.send("Working!")
})

app.get("/api/", (req, res) => {
    const dateToUnix = Date.now()
    const formattedUnix = dateToUnix / 1
    const date = new Date(formattedUnix)
      return res.json({"unix": dateToUnix, "utc": date.toUTCString()})
  })

app.get("/api/:id", (req, res) => {

   if(/^\d*$/.test(req.params.id)){
    const formattedUnix = req.params.id / 1
    const date = new Date(formattedUnix)
      
      // Error handler
      if(date.toUTCString() === "Invalid Date") return res.json({"error": "Invalid Date"})
      
    res.json({"unix" : parseInt(req.params.id), "utc": date.toUTCString()})
    }

  else{
        const dateToUnix = Date.parse(req.params.id)
        const date = new Date(dateToUnix / 1)

        // Error handler
        if(date.toUTCString() === "Invalid Date") return res.json({"error": "Invalid Date"})

        res.json({"unix": dateToUnix, "utc": date.toUTCString()})
    }
    
})