const express=require('express')
const app=express();
const PORT=8888;
app.get("/get",(request,response)=>{
response.send("welcome to get/user method")
})
app.delete("/delete",(request,response)=>{
    response.send("this is delete method")
})
app.listen(7766,()=>{
    console.log("my Server is running on 7766 number")
})
