require('dotenv').config({path:"./config/.env"})
const express = require('express')
const morgan = require("morgan")

const { APP_PORT } = process.env

const app = express()
const PORT = APP_PORT || 4000

app.use(morgan('dev'))

app.get("/", (req,res)=>{
  res.send("working")  
})


app.listen(PORT, ()=>console.log("Sever good to go on PORT: " + PORT))