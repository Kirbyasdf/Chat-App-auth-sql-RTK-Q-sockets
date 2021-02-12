require('dotenv').config({path:"./config/.env"})
const express = require('express')
const morgan = require("morgan")
const router = require("./router")
const { APP_PORT } = process.env

const app = express()
const PORT = APP_PORT || 4000

app.use(express.json())
app.use(morgan('dev'))
app.use(router)

app.get("*", (req,res)=>{
  res.status(404).send({success: true, status: res.statusCode})  
})


app.listen(PORT, ()=>console.log("Sever good to go on PORT: " + PORT))