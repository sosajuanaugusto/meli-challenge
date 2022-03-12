const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes/itemRoutes')
app.use(cors())
app.use(routes)



app.listen(3001, ()=>{
    console.log("server listening on port 3001...")
})
