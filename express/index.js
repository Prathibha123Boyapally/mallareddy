const express=require('express')
const app=express();
const PORT=8888;
app.get("/get",(request,response)=>{
response.send("welcome to get method in Express js")
})
app.get("/get1",(request,response)=>{
    response.send("welcome to get1 method in express js")
})
app.listen(PORT,()=>{
    console.log(`my Server is running on ${PORT}number`)
})
