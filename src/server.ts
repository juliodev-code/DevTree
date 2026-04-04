import express from 'express'
import router from './router'
const app = express()
//add support to read JSON data
app.use(express.json())

//Routing
app.use('/', router)

export default app;