import express from 'express'
import cors from "cors"
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { FormData } from './formDataSchema.js'
const app = express()
const port = 3000

let conn = await mongoose.connect("mongodb://localhost:27017/Car_Website");

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
})

app.post('/', (req, res) => {
    const formData = new FormData(req.body)
    formData.save()
    res.send("Submitted!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})