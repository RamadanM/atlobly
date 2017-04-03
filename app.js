// Load Express Module
var express=require("express");
var app=express();

app.get("/",function(req,resp){
  resp.sendFile(__dirname+"/views/regestration/index.html");
})


app.listen(8090);
