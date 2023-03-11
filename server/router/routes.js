import express from 'express'
import { Configuration, OpenAIApi } from 'openai';
const router = express.Router();
import * as dotenv from "dotenv";
dotenv.config()
const configuration = new Configuration({
    apiKey:process.env.API_KEY_OPENAPI
})
const openai = new OpenAIApi(configuration)
router.route("/").get((req, res)=>{
    res.status(200).json({
        message: "OK"
    })
})
router.route("/getName").post(async(req, res)=>{
    try{
        const {prompt} = req.body;
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages : [prompt]
        })
        const answer = (response?.data?.choices[0]?.message?.content).replace(/[\n0-9-]/g,"");
        res.status(200).json({
            answer
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send(error?.response?.data?.error?.message || "Something went wrong");
    }
})


export default router