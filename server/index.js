import express from 'express';
import cors from 'cors';
import generate from './api.js';
const app=express();
app.use(express.json());
app.use(cors({origin:"*"}));
const PORT=process.env.PORT||3007;
app.get('/',(req,res)=>{
    res.send("hello world");
})

app.post('/generate',async(req,res)=>{
  try {
      const {queryDescription}=req.body;
      console.log(queryDescription);
      const sqlQuery=await generate(queryDescription);
      res.json({answer:sqlQuery});
  } catch (error) {
    console.log(error)
    res.json({sqlQuery:'Great Question. I seem to having a problem answering. please ask again'})
  }
})



app.listen(PORT,()=>{
    console.log(`server listening ${PORT}`);
}) 
