import express from 'express'
import * as dotenv from "dotenv";
import router from './router/routes.js'
dotenv.config()
const PORT = 3000
const app = express()


app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use("/", router)
app.listen(PORT, ()=> {
    console.log(`App running at ${PORT}`)
})