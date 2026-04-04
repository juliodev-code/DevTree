import express from 'express'
import router from './router'
import dotenv from 'dotenv'
import connectDB from './config/db'

const app = express()

//loading environment variables
dotenv.config()

//add support to read JSON data
app.use(express.json())

//connecting to mongo db cluster
connectDB()

//Routing
app.use('/', router)

export default app;