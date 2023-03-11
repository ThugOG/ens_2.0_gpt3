import express from 'express'
import * as dotenv from "dotenv";
import router from './router/routes.js'
import cors from 'cors'
dotenv.config()
const PORT = 3000
const app = express()


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use("/getResponse", router)
app.get("/", (req, res)=>{
    res.status(200).json({
        status: "Dont worry i gotcha"
    })
})
app.listen(PORT, ()=> {
    console.log(`App running at ${PORT}`)
})